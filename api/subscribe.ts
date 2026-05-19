import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'
import { waitlistTemplate } from './templates/waitlist'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Valid email is required' })
  }

  const { error } = await resend.emails.send({
    from: 'Buddi <onboarding@resend.dev>',
    to: [email],
    subject: "You're on the Buddi waitlist!",
    html: waitlistTemplate(email),
  })

  if (error) {
    return res.status(500).json({ error: 'Failed to send email' })
  }

  return res.status(200).json({ success: true })
}
