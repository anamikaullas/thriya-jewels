
import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const WHATSAPP_NUMBER = "919995133495";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `New inquiry from Thriya Jewels website:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0A%0AMessage:%0A${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="animate-fade-in bg-[#fcf9f4] min-h-screen">
      {/* Header */}
      <section className="py-24 text-center bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#e2b4b4] font-bold mb-4">Get in Touch</p>
          <h1 className="serif italic text-5xl text-gray-900">Contact Us</h1>
          <div className="w-12 h-[1px] bg-[#e2b4b4] mx-auto mt-8"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Contact Info */}
          <div className="space-y-16">
            <div>
              <h2 className="serif italic text-3xl text-gray-900 mb-8">Client Care</h2>
              <p className="text-gray-600 text-sm leading-relaxed tracking-wide font-light mb-10 max-w-md">
                Whether you're inquiring about a specific piece, tracking an order, or seeking styling advice, our concierge team is here to assist you.
              </p>
              
              <div className="space-y-8">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#e2b4b4] shadow-sm group-hover:bg-[#e2b4b4] group-hover:text-white transition-all">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-800">WhatsApp Concierge</p>
                    <p className="text-[11px] text-gray-400 mt-1">Chat live with our stylists</p>
                  </div>
                </a>

                <a
                  href="https://chat.whatsapp.com/HM6bFlBf51WFD54hEXAWn8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 bg-[#25D366] text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#20bd5a] transition-all w-fit"
                >
                  Join WhatsApp Community
                </a>

                <a 
                  href="mailto:thriyajewels@gmail.com"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#e2b4b4] shadow-sm group-hover:bg-[#e2b4b4] group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-800">Email Inquiries</p>
                    <p className="text-[11px] text-gray-400 mt-1">thriyajewels@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#e2b4b4] shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-800">Flagship Studio</p>
                    <p className="text-[11px] text-gray-400 mt-1">124 Artisans Row, Chelsea, NY 10011</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-gray-100">
               <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-800 mb-4">Studio Hours</h3>
               <p className="text-[11px] text-gray-500 tracking-widest uppercase">Mon — Fri: 10am to 6pm</p>
               <p className="text-[11px] text-gray-500 tracking-widest uppercase mt-2">Sat: 11am to 4pm</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-16 shadow-2xl border border-gray-50 rounded-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in">
                <div className="w-16 h-16 bg-[#fdf8f8] rounded-full flex items-center justify-center mb-8">
                  <Send size={32} className="text-[#e2b4b4]" />
                </div>
                <h3 className="serif text-3xl italic text-gray-900 mb-4">Message Sent</h3>
                <p className="text-gray-500 text-xs uppercase tracking-[0.3em] max-w-xs leading-relaxed">
                  Thank you for reaching out. A member of our concierge team will respond to your inquiry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#e2b4b4] transition-colors text-sm"
                     value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                 <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#e2b4b4] transition-colors text-sm"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Subject</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#e2b4b4] transition-colors text-sm"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Message</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-200 py-2 outline-none focus:border-[#e2b4b4] transition-colors text-sm resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-[#333] text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
