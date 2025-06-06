'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Laptop Repair',
    'Desktop Repair',
    'Printer Service',
    'CCTV Installation',
    'Custom PC Build',
    'System Optimization',
    'Data Recovery',
    'Other'
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Tech Street', 'Digital City, DC 12345', 'United States'],
      color: 'text-neon-green'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', 'Emergency: +1 (555) 987-6543'],
      color: 'text-cyber-blue'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@nextgencomputers.com', 'support@nextgencomputers.com'],
      color: 'text-neon-purple'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 7:00 PM', 'Saturday: 10:00 AM - 5:00 PM', 'Sunday: Closed'],
      color: 'text-neon-pink'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <MessageSquare className="h-8 w-8 text-neon-green mr-3" />
              <span className="text-neon-green font-rajdhani font-semibold text-lg">
                CONTACT US
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani leading-relaxed">
              Ready to solve your tech challenges? Contact our expert team for 
              professional consultation and lightning-fast solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover glow className="p-6 text-center h-full">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-neon-green/20 to-cyber-blue/20 border border-neon-green/30">
                      <info.icon className={`h-8 w-8 ${info.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-400 font-rajdhani">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-6">
                  Send Us a Message
                </h2>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-neon-green/10 border border-neon-green/30 rounded-lg flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-neon-green mr-3" />
                    <span className="text-neon-green font-rajdhani">
                      Message sent successfully! We'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center"
                  >
                    <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                    <span className="text-red-500 font-rajdhani">
                      Failed to send message. Please try again.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-rajdhani font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white font-rajdhani focus:border-neon-green focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-rajdhani font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white font-rajdhani focus:border-neon-green focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-rajdhani font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white font-rajdhani focus:border-neon-green focus:outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-rajdhani font-medium text-gray-300 mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white font-rajdhani focus:border-neon-green focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-rajdhani font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white font-rajdhani focus:border-neon-green focus:outline-none transition-colors resize-none"
                      placeholder="Describe your tech issue or requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <span className="loading-dots">Sending</span>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <Card className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-neon-green mx-auto mb-4" />
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-gray-400 font-rajdhani">
                    Google Maps integration coming soon
                  </p>
                </div>
              </Card>

              {/* WhatsApp Contact */}
              <Card className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3">
                    WhatsApp Support
                  </h3>
                  <p className="text-gray-400 font-rajdhani mb-4">
                    Get instant support via WhatsApp for quick questions and urgent issues.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Chat on WhatsApp
                  </Button>
                </div>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-6 border-red-500/30 bg-red-500/5">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3">
                    Emergency Support
                  </h3>
                  <p className="text-gray-400 font-rajdhani mb-4">
                    For critical business systems and urgent repairs outside business hours.
                  </p>
                  <div className="text-red-400 font-orbitron font-bold text-lg">
                    +1 (555) 987-6543
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;