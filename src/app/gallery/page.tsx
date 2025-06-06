'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Image as ImageIcon, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Laptop,
  Monitor,
  Printer,
  Camera,
  Cpu,
  Settings
} from 'lucide-react';
import Card from '@/components/ui/Card';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: ImageIcon },
    { id: 'laptop', name: 'Laptop Repairs', icon: Laptop },
    { id: 'desktop', name: 'Desktop Builds', icon: Monitor },
    { id: 'printer', name: 'Printer Service', icon: Printer },
    { id: 'cctv', name: 'CCTV Systems', icon: Camera },
    { id: 'custom', name: 'Custom Builds', icon: Cpu },
    { id: 'optimization', name: 'Optimization', icon: Settings }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Gaming PC Build - RTX 4080',
      category: 'custom',
      description: 'High-performance gaming rig with RGB lighting and liquid cooling',
      image: '/gallery/gaming-pc-1.jpg',
      beforeAfter: false
    },
    {
      id: 2,
      title: 'MacBook Pro Screen Replacement',
      category: 'laptop',
      description: 'Professional screen replacement with original Apple parts',
      image: '/gallery/macbook-repair.jpg',
      beforeAfter: true
    },
    {
      id: 3,
      title: 'Office CCTV Installation',
      category: 'cctv',
      description: '16-camera security system with remote monitoring',
      image: '/gallery/cctv-office.jpg',
      beforeAfter: false
    },
    {
      id: 4,
      title: 'Workstation Build - Video Editing',
      category: 'custom',
      description: 'Professional workstation for 4K video editing and rendering',
      image: '/gallery/workstation-build.jpg',
      beforeAfter: false
    },
    {
      id: 5,
      title: 'Printer Network Setup',
      category: 'printer',
      description: 'Multi-function printer setup with wireless configuration',
      image: '/gallery/printer-setup.jpg',
      beforeAfter: false
    },
    {
      id: 6,
      title: 'Desktop Motherboard Repair',
      category: 'desktop',
      description: 'Complex motherboard repair and component replacement',
      image: '/gallery/motherboard-repair.jpg',
      beforeAfter: true
    },
    {
      id: 7,
      title: 'System Performance Optimization',
      category: 'optimization',
      description: 'Complete system cleanup and performance enhancement',
      image: '/gallery/optimization.jpg',
      beforeAfter: true
    },
    {
      id: 8,
      title: 'Home Security System',
      category: 'cctv',
      description: 'Residential CCTV system with mobile app integration',
      image: '/gallery/home-cctv.jpg',
      beforeAfter: false
    },
    {
      id: 9,
      title: 'Laptop Keyboard Replacement',
      category: 'laptop',
      description: 'Professional keyboard replacement with backlight repair',
      image: '/gallery/keyboard-repair.jpg',
      beforeAfter: true
    },
    {
      id: 10,
      title: 'RGB Gaming Setup',
      category: 'custom',
      description: 'Complete gaming setup with synchronized RGB lighting',
      image: '/gallery/rgb-setup.jpg',
      beforeAfter: false
    },
    {
      id: 11,
      title: 'Business Printer Maintenance',
      category: 'printer',
      description: 'Regular maintenance and calibration service',
      image: '/gallery/printer-maintenance.jpg',
      beforeAfter: false
    },
    {
      id: 12,
      title: 'Server Build & Configuration',
      category: 'desktop',
      description: 'Custom server build for small business',
      image: '/gallery/server-build.jpg',
      beforeAfter: false
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setSelectedImage(filteredItems[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedImage(filteredItems[prevIndex].id);
    }
  };

  const selectedImageData = galleryItems.find(item => item.id === selectedImage);

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
              <ImageIcon className="h-8 w-8 text-neon-green mr-3" />
              <span className="text-neon-green font-rajdhani font-semibold text-lg">
                OUR GALLERY
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
              Our Work Showcase
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani leading-relaxed">
              Explore our portfolio of successful projects, from simple repairs to 
              complex custom builds and installations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-rajdhani font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-neon-green to-cyber-blue text-dark-bg'
                    : 'bg-dark-card border border-gray-700 text-gray-300 hover:border-neon-green hover:text-neon-green'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(item.id)}
                  className="cursor-pointer"
                >
                  <Card hover className="overflow-hidden group">
                    {/* Image Placeholder */}
                    <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ImageIcon className="h-16 w-16 text-gray-600" />
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Before/After Badge */}
                      {item.beforeAfter && (
                        <div className="absolute top-3 right-3 bg-neon-green text-dark-bg px-2 py-1 rounded text-xs font-rajdhani font-semibold">
                          Before/After
                        </div>
                      )}
                      
                      {/* Hover Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-orbitron font-bold text-sm mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 font-rajdhani text-xs">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <ImageIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-orbitron font-bold text-gray-400 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500 font-rajdhani">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon className="h-24 w-24 text-gray-600" />
                </div>
              </div>

              {/* Image Info */}
              <div className="bg-dark-card rounded-lg p-6">
                <h2 className="text-2xl font-orbitron font-bold text-white mb-2">
                  {selectedImageData.title}
                </h2>
                <p className="text-gray-400 font-rajdhani text-lg">
                  {selectedImageData.description}
                </p>
                {selectedImageData.beforeAfter && (
                  <div className="mt-4 inline-flex items-center px-3 py-1 bg-neon-green/20 border border-neon-green/30 rounded-full">
                    <span className="text-neon-green font-rajdhani font-semibold text-sm">
                      Before/After Comparison
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;