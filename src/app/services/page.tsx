'use client';

import { motion } from 'framer-motion';
import { 
  Laptop, 
  Monitor, 
  Printer, 
  Camera, 
  Cpu, 
  Settings,
  Wrench,
  Shield,
  Zap,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const ServicesPage = () => {
  const services = [
    {
      icon: Laptop,
      title: 'Laptop Repair & Service',
      description: 'Comprehensive laptop repair services for all major brands including screen replacement, keyboard repair, battery service, and performance optimization.',
      features: [
        'Screen & LCD Replacement',
        'Keyboard & Trackpad Repair',
        'Battery Replacement',
        'Motherboard Diagnostics',
        'RAM & Storage Upgrades',
        'Cooling System Cleaning',
        'Software Troubleshooting',
        'Data Recovery Services'
      ],
      pricing: 'Starting from $49',
      turnaround: '24-48 hours',
      warranty: '90 days',
      color: 'from-neon-green to-emerald-400'
    },
    {
      icon: Monitor,
      title: 'Desktop Computer Repair',
      description: 'Expert desktop repair and upgrade services including hardware diagnostics, component replacement, and system optimization for peak performance.',
      features: [
        'Hardware Diagnostics',
        'Component Replacement',
        'System Upgrades',
        'Virus & Malware Removal',
        'Operating System Installation',
        'Data Backup & Recovery',
        'Performance Optimization',
        'Network Configuration'
      ],
      pricing: 'Starting from $39',
      turnaround: '24-72 hours',
      warranty: '90 days',
      color: 'from-cyber-blue to-blue-400'
    },
    {
      icon: Printer,
      title: 'Printer Service & Repair',
      description: 'Professional printer maintenance and repair services for inkjet, laser, and multifunction printers from all major manufacturers.',
      features: [
        'Printer Setup & Installation',
        'Print Quality Issues',
        'Paper Jam Resolution',
        'Ink System Repair',
        'Network Printer Setup',
        'Driver Installation',
        'Maintenance & Cleaning',
        'Wireless Configuration'
      ],
      pricing: 'Starting from $29',
      turnaround: '24 hours',
      warranty: '60 days',
      color: 'from-neon-purple to-purple-400'
    },
    {
      icon: Camera,
      title: 'CCTV Installation & Setup',
      description: 'Advanced security camera systems with professional installation, configuration, and remote monitoring capabilities for homes and businesses.',
      features: [
        'System Design & Planning',
        'Camera Installation',
        'DVR/NVR Setup',
        'Remote Access Configuration',
        'Mobile App Setup',
        'Night Vision Optimization',
        'Motion Detection Setup',
        'Cloud Storage Integration'
      ],
      pricing: 'Starting from $199',
      turnaround: '1-3 days',
      warranty: '1 year',
      color: 'from-neon-pink to-pink-400'
    },
    {
      icon: Cpu,
      title: 'Custom PC Builds',
      description: 'High-performance custom computers tailored to your specific needs, from gaming rigs to professional workstations with premium components.',
      features: [
        'Gaming PC Builds',
        'Workstation Builds',
        'Budget-Friendly Options',
        'RGB Lighting Setup',
        'Liquid Cooling Systems',
        'Cable Management',
        'Performance Testing',
        'Software Installation'
      ],
      pricing: 'Starting from $599',
      turnaround: '3-7 days',
      warranty: '1 year',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Settings,
      title: 'System Optimization',
      description: 'Boost your computer\'s performance with professional optimization services including speed enhancement, memory upgrades, and system tuning.',
      features: [
        'Performance Analysis',
        'Speed Optimization',
        'Memory Upgrades',
        'SSD Migration',
        'Driver Updates',
        'Registry Cleaning',
        'Startup Optimization',
        'System Monitoring Setup'
      ],
      pricing: 'Starting from $79',
      turnaround: '24 hours',
      warranty: '30 days',
      color: 'from-teal-400 to-cyan-400'
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed technicians with comprehensive insurance coverage for your peace of mind.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick and efficient service with most repairs completed within 24-48 hours.'
    },
    {
      icon: Wrench,
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience in computer repair and technology.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'All work comes with warranty and satisfaction guarantee for complete confidence.'
    }
  ];

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
              <Zap className="h-8 w-8 text-neon-green mr-3" />
              <span className="text-neon-green font-rajdhani font-semibold text-lg">
                OUR SERVICES
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
              Professional Tech Solutions
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani leading-relaxed">
              From simple repairs to complex custom builds, we deliver comprehensive 
              technology services with expert precision and cutting-edge solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover glow className="h-full">
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} p-4 flex-shrink-0`}>
                        <service.icon className="w-full h-full text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 font-rajdhani leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-orbitron font-semibold text-neon-green mb-4">
                        What's Included:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="h-4 w-4 text-neon-green mr-3 flex-shrink-0" />
                            <span className="font-rajdhani">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-dark-bg/50 rounded-lg border border-gray-800">
                      <div className="text-center">
                        <div className="text-neon-green font-orbitron font-bold text-lg">
                          {service.pricing}
                        </div>
                        <div className="text-gray-500 font-rajdhani text-sm">
                          Pricing
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-cyber-blue font-orbitron font-bold text-lg">
                          {service.turnaround}
                        </div>
                        <div className="text-gray-500 font-rajdhani text-sm">
                          Turnaround
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-neon-purple font-orbitron font-bold text-lg">
                          {service.warranty}
                        </div>
                        <div className="text-gray-500 font-rajdhani text-sm">
                          Warranty
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1">
                        Get Quote
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
              Why Choose Nextgen?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani leading-relaxed">
              We stand out from the competition with our commitment to excellence, 
              expertise, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="p-6 text-center h-full">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-neon-green/20 to-cyber-blue/20 border border-neon-green/30">
                      <item.icon className="h-8 w-8 text-neon-green" />
                    </div>
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-rajdhani leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="p-12 bg-gradient-to-r from-dark-card to-dark-bg border-neon-green/20">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-rajdhani leading-relaxed">
                Contact us today for a free consultation and quote. Our expert technicians 
                are ready to solve your technology challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Get Free Quote
                </Button>
                <Button variant="outline" size="lg">
                  Call Now: (555) 123-4567
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;