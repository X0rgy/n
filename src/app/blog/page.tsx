'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Calendar, 
  User, 
  ArrowRight,
  Clock,
  Tag,
  TrendingUp,
  Zap,
  Shield,
  Cpu
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of Gaming PCs: What to Expect in 2025',
    excerpt: 'Discover the latest trends in gaming hardware, from next-gen GPUs to revolutionary cooling systems that will define the gaming experience.',
    content: 'As we move into 2025, the gaming industry continues to push the boundaries of what\'s possible...',
    author: 'Alex Chen',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Gaming',
    tags: ['Gaming', 'Hardware', 'Future Tech'],
    image: '/blog/gaming-future.jpg',
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Essential Laptop Maintenance Tips for 2025',
      excerpt: 'Keep your laptop running smoothly with these professional maintenance tips from our expert technicians.',
      author: 'Sarah Johnson',
      date: '2024-12-10',
      readTime: '5 min read',
      category: 'Maintenance',
      tags: ['Laptop', 'Maintenance', 'Tips'],
      image: '/blog/laptop-maintenance.jpg'
    },
    {
      id: 3,
      title: 'CCTV Security Systems: A Complete Buyer\'s Guide',
      excerpt: 'Everything you need to know about choosing the right CCTV system for your home or business.',
      author: 'Mike Rodriguez',
      date: '2024-12-05',
      readTime: '12 min read',
      category: 'Security',
      tags: ['CCTV', 'Security', 'Guide'],
      image: '/blog/cctv-guide.jpg'
    },
    {
      id: 4,
      title: 'Custom PC Build vs Pre-Built: Which is Right for You?',
      excerpt: 'Weighing the pros and cons of custom builds versus pre-built systems to help you make the best choice.',
      author: 'David Thompson',
      date: '2024-11-28',
      readTime: '7 min read',
      category: 'PC Building',
      tags: ['Custom PC', 'Pre-Built', 'Comparison'],
      image: '/blog/custom-vs-prebuilt.jpg'
    },
    {
      id: 5,
      title: 'Printer Troubleshooting: Common Issues and Solutions',
      excerpt: 'Solve the most common printer problems with our step-by-step troubleshooting guide.',
      author: 'Lisa Park',
      date: '2024-11-20',
      readTime: '6 min read',
      category: 'Troubleshooting',
      tags: ['Printer', 'Troubleshooting', 'Solutions'],
      image: '/blog/printer-troubleshooting.jpg'
    },
    {
      id: 6,
      title: 'System Optimization: Boost Your PC Performance',
      excerpt: 'Learn professional techniques to optimize your computer\'s performance and extend its lifespan.',
      author: 'Alex Chen',
      date: '2024-11-15',
      readTime: '10 min read',
      category: 'Optimization',
      tags: ['Performance', 'Optimization', 'Speed'],
      image: '/blog/system-optimization.jpg'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 6, icon: BookOpen },
    { name: 'Gaming', count: 1, icon: Zap },
    { name: 'Maintenance', count: 1, icon: Shield },
    { name: 'Security', count: 1, icon: Shield },
    { name: 'PC Building', count: 1, icon: Cpu },
    { name: 'Troubleshooting', count: 1, icon: TrendingUp },
    { name: 'Optimization', count: 1, icon: TrendingUp }
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
              <BookOpen className="h-8 w-8 text-neon-green mr-3" />
              <span className="text-neon-green font-rajdhani font-semibold text-lg">
                TECH BLOG
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
              Tech Insights & Tips
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-rajdhani leading-relaxed">
              Stay updated with the latest tech trends, expert tips, and industry insights 
              from our team of professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-orbitron font-bold text-white mb-8 text-center">
              Featured Article
            </h2>
            
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="aspect-video lg:aspect-square bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-24 w-24 text-gray-600" />
                  </div>
                  <div className="absolute top-4 left-4 bg-neon-green text-dark-bg px-3 py-1 rounded-full">
                    <span className="font-rajdhani font-semibold text-sm">Featured</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-neon-green">
                      <Tag className="h-4 w-4 mr-1" />
                      <span className="font-rajdhani font-medium text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="font-rajdhani text-sm">
                        {new Date(featuredPost.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-4">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-400 font-rajdhani text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-400">
                        <User className="h-4 w-4 mr-1" />
                        <span className="font-rajdhani text-sm">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="font-rajdhani text-sm">{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button>
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Categories & Recent Posts */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-6">
                    Categories
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <motion.button
                        key={category.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="w-full flex items-center justify-between p-3 rounded-lg bg-dark-bg border border-gray-700 hover:border-neon-green hover:bg-neon-green/5 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className="h-5 w-5 text-gray-400 group-hover:text-neon-green transition-colors" />
                          <span className="font-rajdhani font-medium text-gray-300 group-hover:text-white transition-colors">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-gray-500 font-rajdhani text-sm">
                          {category.count}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2 className="text-3xl font-orbitron font-bold text-white mb-8">
                  Recent Articles
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card hover className="overflow-hidden h-full">
                      {/* Image */}
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BookOpen className="h-16 w-16 text-gray-600" />
                        </div>
                        <div className="absolute top-3 left-3 bg-neon-green/20 border border-neon-green/30 text-neon-green px-2 py-1 rounded">
                          <span className="font-rajdhani font-medium text-xs">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="font-rajdhani">
                              {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span className="font-rajdhani">{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-orbitron font-bold text-white mb-3 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-400 font-rajdhani leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-400">
                            <User className="h-4 w-4 mr-1" />
                            <span className="font-rajdhani text-sm">{post.author}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mt-12"
              >
                <Button size="lg">
                  Load More Articles
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
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
                Stay Updated
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-rajdhani leading-relaxed">
                Subscribe to our newsletter and get the latest tech insights, tips, 
                and exclusive content delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-green transition-colors font-rajdhani"
                />
                <Button>
                  Subscribe
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;