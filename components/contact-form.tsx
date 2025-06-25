
'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Mail } from 'lucide-react'

interface ContactFormProps {
  attorney?: string
}

export function ContactForm({ attorney }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create email content
    const subject = attorney 
      ? `Legal Consultation Request - ${attorney}` 
      : 'Legal Consultation Request'
    
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
${attorney ? `Attorney: ${attorney}` : ''}

Message:
${formData.message}

---
This message was sent from the Chetluru Srinivas & Associates website contact form.
    `.trim()

    // Create mailto link
    const mailtoLink = `mailto:info@chetlurulaw.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show success message and reset form
    setSubmitStatus('success')
    setFormData({ name: '', email: '', phone: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus('idle')
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {attorney && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 font-medium">
            Inquiry regarding: <span className="font-semibold">{attorney}</span>
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
            placeholder="Enter your email address"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-vertical"
          placeholder="Please describe your legal matter or question..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 rounded-lg flex items-center gap-3 bg-green-50 border border-green-200 text-green-800">
          <CheckCircle className="w-5 h-5" />
          <p>Your email client will open with a pre-filled message. Please send it to complete your inquiry.</p>
        </div>
      )}

      <button
        type="submit"
        className="w-full btn-primary flex items-center justify-center gap-2"
      >
        <Mail className="w-5 h-5" />
        Send via Email
      </button>

      <p className="text-sm text-gray-600 text-center">
        We will get back to you within 24 hours. All information is kept strictly confidential.
      </p>
    </form>
  )
}
