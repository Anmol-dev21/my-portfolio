import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Icon from '../../components/Icon'
import socials from '../../data/socials'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const ready = Boolean(serviceId && templateId && publicKey)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!ready) return
    try {
      setStatus('sending')
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
      setStatus('success')
      formRef.current?.reset()
    } catch (err) {
      // Silent fail with user-friendly message - email errors shouldn't expose details
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section compact contact-section">
      <div className="container">
        <h2>Contact</h2>
  <div className="max-w-820 mx-auto">
          <div className="glass">
            <h3 className="flex items-center gap-3 mt-0">
              <Icon name="mail" /> Send a message
            </h3>
            {!ready && (
              <p className="prose text-muted">
                Tip: Connect EmailJS by creating a free account and setting{' '}
                <code>VITE_EMAILJS_SERVICE_ID</code>, <code>VITE_EMAILJS_TEMPLATE_ID</code>, and{' '}
                <code>VITE_EMAILJS_PUBLIC_KEY</code> in a <code>.env</code> file. Until then, the
                send button will be disabled.
              </p>
            )}
            <form ref={formRef} onSubmit={onSubmit} className="grid gap-3">
              <div className="visually-hidden" aria-live="polite" aria-atomic="true">
                {status === 'sending' && 'Sending your message...'}
                {status === 'success' && 'Message sent successfully.'}
                {status === 'error' && 'Failed to send the message.'}
              </div>
              <input
                name="user_name"
                placeholder="Your name"
                required
                className="card p-4"
                autoComplete="name"
              />
              <input
                name="user_email"
                placeholder="Your email"
                type="email"
                required
                className="card p-4"
                autoComplete="email"
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                required
                className="card p-4"
              />
              <button className="btn primary" type="submit" disabled={!ready || status === 'sending'}>
                <Icon name="send" /> {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-success">Thanks! Your message has been sent.</p>
              )}
              {status === 'error' && (
                <p className="text-error">Oops, something went wrong. Please try again later.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// removed inline inputStyle in favor of utility classes
