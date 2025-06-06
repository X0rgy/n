'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Users,
  Award,
  ThumbsUp,
  MessageCircle
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const TestimonialsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      company: 'Johnson Marketing',
      rating: 5,
      text: 'Nextgen Computers saved my business! When our main server crashed, they had us back up and running within hours. Their expertise and quick response time are unmatched.',
      service: 'Emergency Server Repair',
      image: '/testimonials/sarah.jpg',
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      role: 'Gaming Enthusiast',
      company: 'Freelance Streamer',
      rating: 5,
      text: 'The custom gaming PC they built for me is absolutely incredible! Perfect performance, amazing RGB setup, and they stayed within my budget. Highly recommend!',
      service: 'Custom Gaming PC Build',
      image: '/testimonials/mike.jpg',
      date: '2024-02-03'
    },
    {
      id: 3,
      name: 'Dr. Emily Chen',
      role: 'Medical Professional',
      company: 'Chen Family Practice',
      rating: 5,
      text: 'Professional, reliable, and honest. They installed our CCTV system and provided excellent training. The remote monitoring gives us peace of mind.',
      service: 'CCTV Installation',
      image: '/testimonials/emily.jpg',
      date: '2024-01-28'
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Graphic Designer',
      company: 'Wilson Creative Studio',
      rating: 5,
      text: 'My MacBook Pro was completely dead, and I thought I lost all my work. They not only fixed it but recovered all my files. Lifesavers!',
      service: 'Laptop Repair & Data Recovery',
      image: '/testimonials/james.jpg',
      date: '2024-02-10'
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Office Manager',
      company: 'Park & Associates',
      rating: 5,
      text: 'Our office printer was constantly jamming and producing poor quality prints. They fixed it perfectly and showed us proper maintenance. Great service!',
      service: 'Printer Repair & Maintenance',
      image: '/testimonials/lisa.jpg',
      date: '2024-01-20'
    },
    {
      id: 6,
      name: 'David Thompson',
      role: 'Video Editor',
      company: 'Thompson Productions',
      rating: 5,
      text: 'The workstation they built for video editing is a beast! Renders that used to take hours now complete in minutes. Worth every penny.',
      service: 'Custom Workstation Build',
      image: '/testimonials/david.jpg',
      date: '2024-02-05'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Customers' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' },
    { icon: Award, value: '99%', label: 'Success Rate' },
    { icon: ThumbsUp, value: '100%', label: 'Satisfaction' }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
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
              <MessageCircle className="h-8 w-8 text-neon-green mr-3" />
              <span className="text-neon-green font-rajdhani font-semibold text-lg">
                TESTIMONIALS
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani leading-relaxed">
              Don't just take our word for it. Here's what our satisfied customers 
              have to say about our services and expertise.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <Card hover glow className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-neon-green/20 to-cyber-blue/20 border border-neon-green/30">
                      <stat.icon className="h-8 w-8 text-neon-green" />
                    </div>
                  </div>
                  <div className="text-3xl font-orbitron font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-rajdhani">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
              Featured Reviews
            </h2>
          </motion.div>

          <div className="relative">
            {/* Main Testimonial */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <Card className="p-8 md:p-12 text-center">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-r from-neon-green/20 to-cyber-blue/20 border border-neon-green/30">
                      <Quote className="h-8 w-8 text-neon-green" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl md:text-2xl text-gray-300 font-rajdhani leading-relaxed mb-8 max-w-4xl mx-auto">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                    {/* Avatar */}
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-green/20 to-cyber-blue/20 rounded-full border border-neon-green/30 flex items-center justify-center">
                      <Users className="h-8 w-8 text-neon-green" />
                    </div>

                    {/* Details */}
                    <div className="text-center md:text-left">
                      <div className="text-xl font-orbitron font-bold text-white">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-neon-green font-rajdhani font-medium">
                        {testimonials[currentTestimonial].role}
                      </div>
                      <div className="text-gray-400 font-rajdhani">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>

                    {/* Service Badge */}
                    <div className="px-4 py-2 bg-gradient-to-r from-neon-green/20 to-cyber-blue/20 border border-neon-green/30 rounded-full">
                      <span className="text-neon-green font-rajdhani font-medium text-sm">
                        {testimonials[currentTestimonial].service}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-dark-card border border-gray-700 rounded-full text-gray-400 hover:text-neon-green hover:border-neon-green transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-dark-card border border-gray-700 rounded-full text-gray-400 hover:text-neon-green hover:border-neon-green transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? 'bg-neon-green'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
              All Customer Reviews
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani leading-relaxed">
              Browse through all our customer testimonials and see why we're the 
              trusted choice for tech solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="p-6 h-full">
                  {/* Rating */}
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Text */}
                  <blockquote className="text-gray-300 font-rajdhani leading-relaxed mb-6">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-green/20 to-cyber-blue/20 rounded-full border border-neon-green/30 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-neon-green" />
                    </div>
                    <div>
                      <div className="font-orbitron font-bold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 font-rajdhani text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* Service & Date */}
                  <div className="flex flex-col space-y-2">
                    <div className="inline-flex items-center px-3 py-1 bg-neon-green/20 border border-neon-green/30 rounded-full w-fit">
                      <span className="text-neon-green font-rajdhani font-medium text-sm">
                        {testimonial.service}
                      </span>
                    </div>
                    <div className="text-gray-500 font-rajdhani text-sm">
                      {new Date(testimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="p-12 bg-gradient-to-r from-dark-card to-dark-bg border-neon-green/20">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
                Ready to Join Our Happy Customers?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-rajdhani leading-relaxed">
                Experience the same exceptional service that our customers rave about. 
                Contact us today for your tech solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Get Your Free Quote
                </Button>
                <Button variant="outline" size="lg">
                  View Our Services
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;