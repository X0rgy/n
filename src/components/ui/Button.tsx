'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  type = 'button'
}: ButtonProps) => {
  const baseClasses = 'font-rajdhani font-semibold transition-all duration-300 rounded-lg relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-gradient-to-r from-neon-green to-cyber-blue text-dark-bg hover:shadow-lg hover:shadow-neon-green/25',
    secondary: 'bg-gradient-to-r from-neon-purple to-neon-pink text-white hover:shadow-lg hover:shadow-neon-purple/25',
    outline: 'border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-bg',
    ghost: 'text-neon-green hover:bg-neon-green/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default Button;