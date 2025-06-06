'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  gradient?: boolean;
}

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  glow = false,
  gradient = false 
}: CardProps) => {
  const baseClasses = 'bg-dark-card border border-dark-border rounded-lg overflow-hidden relative';
  
  const glowClasses = glow 
    ? 'shadow-lg shadow-neon-green/10 border-neon-green/30' 
    : '';
    
  const gradientClasses = gradient 
    ? 'bg-gradient-to-br from-dark-card to-dark-bg border-gradient-to-r from-neon-green/30 to-cyber-blue/30' 
    : '';

  return (
    <motion.div
      whileHover={hover ? { 
        y: -5, 
        boxShadow: glow 
          ? '0 20px 40px rgba(0, 255, 65, 0.15)' 
          : '0 20px 40px rgba(0, 0, 0, 0.3)' 
      } : {}}
      transition={{ duration: 0.3 }}
      className={`${baseClasses} ${glowClasses} ${gradientClasses} ${className}`}
    >
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />
      
      {/* Animated border effect */}
      {glow && (
        <div className="absolute inset-0 rounded-lg">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-green via-cyber-blue to-neon-green opacity-20 blur-sm animate-pulse" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;