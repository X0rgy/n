'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Clock, Star } from 'lucide-react';
import Button from '../ui/Button';
import MatrixBackground from '../ui/MatrixBackground';

const Hero = () => {
  const stats = [
    { icon: Star, value: '500+', label: 'Happy Clients' },
    { icon: Shield, value: '99%', label: 'Success Rate' },
    { icon: Clock, value: '24/7', label: 'Support' },
    { icon: Zap, value: '5+', label: 'Years Experience' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
      {/* Matrix Background */}
      <MatrixBackground />
      
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-green/5 via-transparent to-cyber-blue/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-white leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="block">NEXTGEN</span>
              <span className="block bg-gradient-to-r from-neon-green via-cyber-blue to-neon-purple bg-clip-text text-transparent">
                COMPUTERS
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-rajdhani font-medium text-gray-300">
                <span className="glitch neon-glow" data-text="ELITE TECH SOLUTIONS">
                  ELITE TECH SOLUTIONS
                </span>
              </h2>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani leading-relaxed"
          >
            Professional computer repair, custom builds, and tech solutions. 
            We deliver cutting-edge services with lightning-fast turnaround times.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <Button size="lg" className="group">
                Get Free Diagnosis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                View Our Services
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-800"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-gradient-to-r from-neon-green/20 to-cyber-blue/20 border border-neon-green/30 group-hover:border-neon-green/60 transition-colors">
                    <stat.icon className="h-6 w-6 text-neon-green" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-orbitron font-bold text-white group-hover:text-neon-green transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-rajdhani">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 w-20 h-20 border border-neon-green/30 rounded-lg hidden lg:block"
      />
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 right-10 w-16 h-16 border border-cyber-blue/30 rounded-full hidden lg:block"
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neon-green/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neon-green rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;