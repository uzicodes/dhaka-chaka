'use client'

import { FormEvent, useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="section">
      <h2 className="header center-align">Contact Us</h2>
      
      <div className="row" style={{ marginTop: '2rem' }}>
        <div className="col s12 m8 offset-m2">
          <div className="card">
            <div className="card-content">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">person</i>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">email</i>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">message</i>
                    <textarea
                      id="message"
                      className="materialize-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                    <label htmlFor="message">Your Message</label>
                  </div>
                </div>

                <div className="row center-align">
                  <button type="submit" className="waves-effect waves-light btn-large blue">
                    <i className="material-icons left">send</i>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row center-align" style={{ marginTop: '3rem' }}>
        <div className="col s12 m4">
          <div className="card-panel">
            <i className="material-icons large blue-text">location_on</i>
            <h5>Address</h5>
            <p>123 Web Street<br />Digital City, DC 12345</p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card-panel">
            <i className="material-icons large blue-text">phone</i>
            <h5>Phone</h5>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card-panel">
            <i className="material-icons large blue-text">email</i>
            <h5>Email</h5>
            <p>info@dhakachaka.com</p>
          </div>
        </div>
      </div>
    </div>
  )
} 