# ALAREDEFO Website

Official React website for **ALAVEMASI Relief and Development Foundation (ALAREDEFO) Tanzania**.

ALAREDEFO is a registered Tanzanian NGO focused on relief, community development, empowerment, advocacy, environmental protection, food security, education, and support for women, youth, children, and vulnerable communities.

## Website Overview

This website presents ALAREDEFO's identity, mission, vision, objectives, thematic areas, membership categories, portfolio, and contact information.

Main sections include:

- Home page with organization introduction and registration details
- About section with mission, vision, and focus areas
- Thematic areas for ALAREDEFO programs
- Portfolio gallery with image details
- Objectives of the foundation
- Membership information
- Profile, Programs, Privacy, and Terms pages
- Contact form connected to an Express email API
- English and Swahili language toggle
- Light and dark theme toggle

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Express
- Nodemailer

## Project Structure

```text
alaredefo-website/
  public/          Static images and icons
  server/          Express API for contact form email
  scripts/         Development helper scripts
  src/             React source code
  src/components/  Shared UI components
  src/pages/       Website pages
  src/data/        Website content and translations
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the React client and API server:

```bash
npm run dev
```

Client URL:

```text
http://localhost:5173
```

API URL:

```text
http://localhost:8787
```

If the combined dev script has issues on Windows, run the client and server separately:

```bash
npm run dev:client
npm run dev:server
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run the Express production server:

```bash
npm start
```

## Contact Form Setup

The contact form sends messages through the Express API at `/api/contact`.

Create a `.env` file using `.env.example` as a guide:

```bash
PORT=8787
CONTACT_TO=alaredefo24@yahoo.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password
CONTACT_FROM=your-email@example.com
```

Do not commit `.env` to GitHub. It is ignored by `.gitignore`.

## Deployment Notes

For full functionality, deploy both:

- The Vite React frontend
- The Express server for `/api/contact`

If hosting the frontend only, the contact form will need a separate backend or serverless function.

## Organization Contact

**ALAREDEFO Tanzania**  
P.O. Box 12986, Arusha, Tanzania  
Email: alaredefo24@yahoo.com  
Phone: +255769095036  
Website: https://www.alaredefo.org
