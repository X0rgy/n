'use client';

import { motion } from 'framer-motion';
import { 
  Laptop, 
  Monitor, 
  Printer, 
  Camera, 
  Cpu, 
  Settings,
  ArrowRight,
  Zap
} from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ServicesPreview = () => {
  const services = [
    {
      icon: Laptop,
      title: 'Laptop Repair',
      description: 'Expert laptop diagnostics and repairs. From screen replacements to motherboard fixes.',
      features: ['Screen Replacement', 'Keyboard Repair', 'Battery Service', 'Performance Boost'],
      color: 'from-neon-green to-emerald-400'
    },
    {
      icon: Monitor,
      title: 'Desktop Repair',
      description: 'Complete desktop solutions including hardware upgrades and system optimization.',
      features: ['Hardware Upgrade', 'System Cleanup', 'Virus Removal', 'Data Recovery'],
      color: 'from-cyber-blue to-blue-400'
    },
    {
      icon: Printer,
      title: 'Printer Service',
      description: 'Professional printer maintenance, repair, and setup for all major brands.',
      features: ['Setup & Install', 'Maintenance', 'Ink System Repair', 'Network Config'],
      color: 'from-neon-purple to-purple-400'
    },
    {
      icon: Camera,
      title: 'CCTV Installation',
      description: 'Advanced security camera systems with remote monitoring capabilities.',
      features: ['System Design', 'Installation', 'Remote Access', '24/7 Monitoring'],
      color: 'from-neon-pink to-pink-400'
    },
    {
      icon: Cpu,
      title: 'Custom PC Builds',
      description: 'High-performance custom computers tailored to your specific needs.',
      features: ['Gaming Rigs', 'Workstations', 'Budget Builds', 'RGB Lighting'],
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Settings,
      title: 'System Optimization',
      description: 'Boost your computer\'s performance with professional optimization services.',
      features: ['Speed Boost', 'Memory Upgrade', 'SSD Migration', 'Driver Updates'],
      color: 'from-teal-400 to-cyan-400'
    }
  ];

  return (
    <section className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green via-cyber-blue to-neon-purple" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-neon-green mr-3" />
            <span className="text-neon-green font-rajdhani font-semibold text-lg">
              OUR SERVICES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Elite Tech Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani leading-relaxed">
            From simple repairs to complex custom builds, we deliver professional 
            technology services with cutting-edge expertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover glow className="h-full p-6 group">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 rounded-lg bg-gradient-to-r from-neon-green/20 to-cyber-blue/20 blur-lg group-hover:blur-xl transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 font-rajdhani leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-neon-green rounded-full mr-3 flex-shrink-0" />
                        <span className="font-rajdhani">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="pt-4">
                    <button className="flex items-center text-neon-green hover:text-cyber-blue transition-colors font-rajdhani font-medium group/link">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-dark-card to-dark-bg border border-neon-green/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-gray-400 font-rajdhani text-lg mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? We specialize in custom tech solutions 
              tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Get Custom Quote
              </Button>
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;