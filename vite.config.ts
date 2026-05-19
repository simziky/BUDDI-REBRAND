import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'
import { Resend } from 'resend'
import { waitlistTemplate } from './api/templates/waitlist'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      tailwindcss(),
      svgLoader(),
      {
        name: 'dev-api',
        configureServer(server) {
          server.middlewares.use('/api/subscribe', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405
              res.end(JSON.stringify({ error: 'Method not allowed' }))
              return
            }

            let body = ''
            req.on('data', (chunk: Buffer) => { body += chunk })
            req.on('end', async () => {
              try {
                const { email } = JSON.parse(body)

                if (!email || typeof email !== 'string') {
                  res.statusCode = 400
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ error: 'Valid email is required' }))
                  return
                }

                const resend = new Resend(env.RESEND_API_KEY)
                const { error } = await resend.emails.send({
                  from: 'Buddi <onboarding@resend.dev>',
                  to: [email],
                  subject: "You're on the Buddi waitlist!",
                  html: waitlistTemplate(email),
                })

                if (error) {
                  console.error('[Resend error]', error)
                  res.statusCode = 500
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ error: 'Failed to send email', detail: error }))
                  return
                }

                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ success: true }))
              } catch {
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: 'Internal server error' }))
              }
            })
          })
        },
      },
    ],
  }
})
