import React, { useState } from 'react';
import { Mail, Phone, MapPin, Eraser, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-purple-600 text-white">
              <div className="flex items-center gap-2 mb-6">
                <Eraser className="h-6 w-6" />
                <h2 className="text-2xl font-bold">Get in Touch</h2>
              </div>
              
              <p className="mb-8 text-purple-100">
                Have questions about tattoo removal costs? Need a personalized estimate? Our team of removal specialists is here to help!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-200" />
                  <span>info@tattooremovalcostcalculator.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-200" />
                  <span>1-800-NO-TATTOO (668-2886)</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-200" />
                  <span>123 Removal Center, Medical District, MD 12345</span>
                </div>

                <div className="pt-6 mt-6 border-t border-purple-500">
                  <h3 className="font-semibold mb-2">Consultation Hours</h3>
                  <p className="text-purple-100">Monday - Friday: 9:00 AM - 7:00 PM EST</p>
                  <p className="text-purple-100">Saturday: 10:00 AM - 4:00 PM EST</p>
                  <p className="text-purple-100">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="cost">Cost Estimation</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="treatment">Treatment Information</option>
                    <option value="aftercare">Aftercare Questions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    required
                    placeholder="How can we help you with your tattoo removal journey?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-200"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-500 mt-4">
                  * We typically respond within 24 business hours. For immediate assistance, please call our toll-free number.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}