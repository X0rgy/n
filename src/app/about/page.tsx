'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Clock, 
  Shield, 
  MapPin, 
  Phone, 
  Mail,
  Zap,
  Target,
  Eye,
  Heart
} from 'lucide-react';
import Card from '@/components/ui/Card';

const AboutPage = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients', color: 'text-neon-green' },
    { icon: Award, value: '5+', label: 'Years Experience', color: 'text-cyber-blue' },
    { icon: Clock, value: '24/7', label: 'Support Available', color: 'text-neon-purple' },
    { icon: Shield, value: '99%', label: 'Success Rate', color: 'text-neon-pink' }
  ];

  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'Lead Technician',
      speciality: 'Hardware Specialist',
      experience: '8+ years',
      image: '/team/alex.jpg'
    },
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      speciality: 'System Optimization',
      experience: '6+ years',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Mike Johnson',
      role: 'CCTV Specialist',
      speciality: 'Security Systems',
      experience: '7+ years',
      image: '/team/mike.jpg'
    },
    {
      name: 'Lisa Park',
      role: 'Customer Success',
      speciality: 'Client Relations',
      experience: '4+ years',
      image: '/team/lisa.jpg'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every repair and build is executed with meticulous attention to detail and technical precision.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions for our clients.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Our commitment to quality ensures long-lasting solutions you can depend on.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love technology and are passionate about helping others harness its power.'
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
              <Eye className="h-8 w-8 text-neon-green mr-3" />
              <span className="text-neon-green font-rajdhani font-semibold text-lg">
                ABOUT US
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
              Elite Tech Experts
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani leading-relaxed">
              We are a team of passionate technology professionals dedicated to providing 
              exceptional computer services and innovative solutions.
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
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
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

      {/* Our Story */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-400 font-rajdhani text-lg leading-relaxed">
                <p>
                  Founded in 2019, Nextgen Computers emerged from a simple vision: to bridge 
                  the gap between complex technology and everyday users. What started as a 
                  small repair shop has evolved into a comprehensive tech solutions provider.
                </p>
                <p>
                  Our journey began when our founder, frustrated with the lack of reliable 
                  and honest computer repair services, decided to create something different. 
                  We built our reputation on transparency, expertise, and genuine care for 
                  our clients' technology needs.
                </p>
                <p>
                  Today, we serve hundreds of satisfied customers, from individual users to 
                  small businesses, providing everything from simple repairs to complex 
                  custom builds and security installations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-neon-green/20 to-cyber-blue/20 rounded-2xl border border-neon-green/30 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="h-24 w-24 text-neon-green mx-auto mb-4" />
                  <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                    Innovation Driven
                  </h3>
                  <p className="text-gray-400 font-rajdhani">
                    Constantly evolving with technology
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani leading-relaxed">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover glow className="p-6 h-full text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-neon-green/20 to-cyber-blue/20 border border-neon-green/30">
                      <value.icon className="h-8 w-8 text-neon-green" />
                    </div>
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 font-rajdhani leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani leading-relaxed">
              Experienced professionals passionate about technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover glow className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-neon-green/20 to-cyber-blue/20 rounded-full border border-neon-green/30 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-neon-green" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-neon-green font-rajdhani font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-400 font-rajdhani text-sm mb-2">
                    {member.speciality}
                  </p>
                  <p className="text-gray-500 font-rajdhani text-sm">
                    {member.experience}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
              Visit Our Location
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani leading-relaxed">
              Come see us at our state-of-the-art facility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-neon-green mx-auto mb-4" />
                  <h3 className="text-xl font-orbitron font-bold text-white mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-gray-400 font-rajdhani">
                    Map integration coming soon
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-neon-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-orbitron font-bold text-white mb-2">Address</h3>
                    <p className="text-gray-400 font-rajdhani">
                      123 Tech Street<br />
                      Digital City, DC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-neon-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-orbitron font-bold text-white mb-2">Phone</h3>
                    <p className="text-gray-400 font-rajdhani">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-neon-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-orbitron font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-400 font-rajdhani">
                      info@nextgencomputers.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-neon-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-orbitron font-bold text-white mb-2">Hours</h3>
                    <div className="text-gray-400 font-rajdhani space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
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

export default AboutPage;