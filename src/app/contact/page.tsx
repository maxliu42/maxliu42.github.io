"use client";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real implementation, you would send this data to a server
    // For now, we'll simulate a successful submission
    console.log(`Sending email to maxy.liu@mail.utoronto.ca`);
    console.log('Form data:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitMessage('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container">
      <section className="section">
        <h1 className="text-2xl font-bold mb-4">Contact</h1>
        <p className="mb-6 text-sm">
          Feel free to reach out!
        </p>
        
        {submitMessage && (
          <div className="bg-green-900/30 border border-green-700 p-3 mb-4 text-sm">
            {submitMessage}
          </div>
        )}
        
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              className="bg-transparent border border-gray-700 p-2 text-sm" 
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              className="bg-transparent border border-gray-700 p-2 text-sm" 
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm mb-1">Message</label>
            <textarea 
              id="message" 
              rows={5} 
              className="bg-transparent border border-gray-700 p-2 text-sm" 
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="bg-[var(--accent)] text-black font-bold py-2 px-4 mt-2 hover:opacity-90 transition-opacity disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          <p className="text-xs text-gray-400 mt-2">
            Your message will be sent to: maxy.liu@mail.utoronto.ca
          </p>
        </form>
      </section>
    </div>
  );
} 