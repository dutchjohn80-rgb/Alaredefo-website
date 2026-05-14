import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import Stripe from 'stripe'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const PORT = Number(process.env.PORT || 8787)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.resolve(__dirname, '..', 'dist')

app.use(cors())
app.use(express.json())

function createTransporter() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    return null
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripe = stripeSecretKey ? new Stripe(stripeSecretKey, { apiVersion: '2023-08-16' }) : null

app.post('/api/create-checkout-session', async (req, res) => {
  if (!stripe) {
    return res.status(500).json({ ok: false, message: 'Stripe is not configured. Add STRIPE_SECRET_KEY to your environment.' })
  }

  const { amount, frequency, source, title, dedicate } = req.body ?? {}
  if (!amount || typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ ok: false, message: 'A valid amount is required.' })
  }

  const currency = 'tzs'
  const host = req.headers.origin || `http://localhost:${PORT}`

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: frequency === 'monthly' ? 'subscription' : 'payment',
      success_url: `${host}/donate?success=true`,
      cancel_url: `${host}/donate?canceled=true`,
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: frequency === 'monthly' ? 'Monthly donation' : 'One-time donation',
              description: title ? `Donation for ${title}` : source ? `Donation for ${source}` : 'Support ALAREDEFO',
            },
            unit_amount: amount,
            recurring: frequency === 'monthly' ? { interval: 'month' } : undefined,
          },
          quantity: 1,
        },
      ],
      metadata: {
        source: source || 'general',
        title: title || '',
        dedicate: dedicate ? 'yes' : 'no',
      },
    })

    return res.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout session error:', error)
    return res.status(500).json({ ok: false, message: 'Unable to create Stripe checkout session.' })
  }
})

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body ?? {}

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      ok: false,
      message: 'Name, email, subject, and message are required.',
    })
  }

  const transporter = createTransporter()

  if (!transporter) {
    return res.status(500).json({
      ok: false,
      message: 'Email service is not configured. Add SMTP env vars on the server.',
    })
  }

  try {
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone || 'Not provided')
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

    await transporter.sendMail({
      from: process.env.CONTACT_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `[ALAREDEFO Website] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        '',
        message,
      ].join('\n'),
      html: `
        <h2>New ALAREDEFO Website Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    })

    return res.json({
      ok: true,
      message: 'Your message has been sent successfully.',
    })
  } catch (error) {
    console.error('Email send failed:', error)
    return res.status(500).json({
      ok: false,
      message: 'Failed to send message. Please try again later.',
    })
  }
})

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.use(express.static(distPath))

app.get('/*path', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`ALAREDEFO server running on http://localhost:${PORT}`)
})
