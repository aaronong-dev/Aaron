import React, { useState } from 'react';
import './EmailModal.css';
import { MdClose, MdMail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

function EmailModal({ isOpen, onClose }) {
  // EmailJS Configuration - Replace these with your actual IDs
  const EMAILJS_SERVICE_ID = 'service_qd48frs'; // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = 'template_leg7f0e'; // Replace with your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = 'Ihq4t0WiVdFD_YJjD'; // Replace with your EmailJS public key

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Error details:', {
        status: error.status,
        text: error.text,
        message: error.message
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="email-modal-overlay" onClick={handleOverlayClick}>
      <div className="email-modal-content">
        <div className="email-modal-header">
          <div className="email-modal-title">
            <MdMail className="email-modal-icon" />
            <h2>Say Hi!</h2>
          </div>
          <button className="email-modal-close" onClick={onClose}>
            <MdClose />
          </button>
        </div>

        <form className="email-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              placeholder="What's this about?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Tell me about your project or just say hello!"
              rows="5"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="submit-status success">
              <p>Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="submit-status error">
              <p>Sorry, there was an error sending your message. Please try again.</p>
            </div>
          )}

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmailModal;
