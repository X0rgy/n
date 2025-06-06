'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Clock,
  Shield
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Laptop Repair',
    'Desktop Repair', 
    'Printer Service',
    'CCTV Installation',
    'Custom PC Builds',
    'System Optimization'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-dark-bg border-t border-neon-green/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green via-cyber-blue to-neon-purple" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-neon-green" />
              <span className="font-orbitron font-bold text-xl text-white">
                NEXTGEN
              </span>
            </div>
            <p className="text-gray-400 font-rajdhani text-lg leading-relaxed">
              Your trusted partner for all computer services and repairs. 
              We bring cutting-edge solutions to keep your technology running at peak performance.
            </p>
            <div className="flex items-center space-x-2 text-neon-green">
              <Shield className="h-5 w-5" />
              <span className="font-rajdhani font-medium">Licensed & Insured</span>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-orbitron font-bold text-lg text-neon-green">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="/services"
                    className="text-gray-400 hover:text-neon-green transition-colors duration-300 font-rajdhani"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-orbitron font-bold text-lg text-neon-green">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green transition-colors duration-300 font-rajdhani"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-orbitron font-bold text-lg text-neon-green">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-neon-green mt-1 flex-shrink-0" />
                <span className="text-gray-400 font-rajdhani">
                  123 Tech Street<br />
                  Digital City, DC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-neon-green flex-shrink-0" />
                <span className="text-gray-400 font-rajdhani">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-neon-green flex-shrink-0" />
                <span className="text-gray-400 font-rajdhani">
                  info@nextgencomputers.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-neon-green mt-1 flex-shrink-0" />
                <div className="text-gray-400 font-rajdhani">
                  <div>Mon-Fri: 9AM-7PM</div>
                  <div>Sat: 10AM-5PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 font-rajdhani">Follow us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-neon-green transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-400 font-rajdhani text-center md:text-right">
              <p>&copy; {currentYear} Nextgen Computers. All rights reserved.</p>
              <p className="text-sm mt-1">
                Built with ⚡ by{' '}
                <span className="text-neon-green">Nextgen Team</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;