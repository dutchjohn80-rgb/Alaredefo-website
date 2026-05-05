import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useAppContext } from '../context/AppContext'

type ContactValues = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const initialValues: ContactValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export function ContactForm() {
  const { language } = useAppContext()
  const [values, setValues] = useState<ContactValues>(initialValues)
  const [showToast, setShowToast] = useState(false)
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  })

  useEffect(() => {
    if (status.type === 'success' || status.type === 'error') {
      setShowToast(true)
      const timer = window.setTimeout(() => setShowToast(false), 4200)
      return () => window.clearTimeout(timer)
    }

    if (status.type === 'loading') {
      setShowToast(true)
    }
  }, [status])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus({ type: 'loading', message: language === 'sw' ? 'Ujumbe wako unatumwa...' : 'Sending your message...' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message.')
      }

      setStatus({ type: 'success', message: data.message || (language === 'sw' ? 'Ujumbe wako umetumwa.' : 'Your message has been sent.') })
      setValues(initialValues)
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : language === 'sw' ? 'Haiwezekani kutuma ujumbe kwa sasa.' : 'Unable to send your message right now.',
      })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="reveal-up rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-2xl shadow-slate-200/70 backdrop-blur">
        <h3 className="text-2xl font-bold text-slate-900">{language === 'sw' ? 'Tuma ujumbe' : 'Send a message'}</h3>
        <p className="mt-2 text-slate-600">{language === 'sw' ? 'Kwa ushirikiano, uanachama, programu za jamii, au mawasiliano ya kawaida.' : 'For partnerships, membership inquiries, community programs, or general communication.'}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <input className="input-field" placeholder={language === 'sw' ? 'Jina lako' : 'Your name'} value={values.name} onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))} required />
          <input className="input-field" placeholder={language === 'sw' ? 'Barua pepe yako' : 'Your email'} type="email" value={values.email} onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))} required />
          <input className="input-field" placeholder={language === 'sw' ? 'Namba ya simu' : 'Phone number'} value={values.phone} onChange={(e) => setValues((prev) => ({ ...prev, phone: e.target.value }))} />
          <input className="input-field" placeholder={language === 'sw' ? 'Kichwa cha ujumbe' : 'Subject'} value={values.subject} onChange={(e) => setValues((prev) => ({ ...prev, subject: e.target.value }))} required />
          <textarea className="input-field min-h-36 sm:col-span-2" placeholder={language === 'sw' ? 'Andika ujumbe wako kwa ALAREDEFO' : 'Write your message to ALAREDEFO'} value={values.message} onChange={(e) => setValues((prev) => ({ ...prev, message: e.target.value }))} required />
        </div>

        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status.type === 'loading' && <span className="spinner" aria-hidden="true" />}
          {status.type === 'loading' ? (language === 'sw' ? 'Inatuma...' : 'Sending...') : language === 'sw' ? 'Tuma Ujumbe' : 'Send Message'}
        </button>
      </form>

      <div
        className={`toast-notice ${
          showToast ? 'toast-notice-visible' : ''
        } ${
          status.type === 'success'
            ? 'toast-success'
            : status.type === 'error'
              ? 'toast-error'
              : 'toast-loading'
        }`}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-3">
          {status.type === 'loading' && <span className="spinner mt-0.5" aria-hidden="true" />}
          {status.type === 'success' && <span className="mt-0.5 text-sm font-bold">OK</span>}
          {status.type === 'error' && <span className="mt-0.5 text-lg">!</span>}
          <div>
            <p className="font-semibold">
              {status.type === 'success' ? (language === 'sw' ? 'Ujumbe umetumwa' : 'Message sent') : status.type === 'error' ? (language === 'sw' ? 'Imeshindikana kutuma' : 'Unable to send') : language === 'sw' ? 'Inatuma ujumbe' : 'Sending message'}
            </p>
            <p className="mt-1 text-sm opacity-90">{status.message}</p>
          </div>
        </div>
      </div>
    </>
  )
}
