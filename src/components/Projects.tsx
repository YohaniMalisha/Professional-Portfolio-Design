import { motion } from 'motion/react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Hyperdim Innovation Official Website',
      description: 'Modern corporate website featuring AI-powered chatbot integration, responsive design, and dynamic content management for enhanced user engagement.',
      image: 'https://images.unsplash.com/photo-1669062897193-f8a4215c2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MTQ3NzE5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'TypeScript', 'AI Integration', 'Tailwind CSS'],
      featured: true,
      github: '#',
      demo: '#'
    },
    {
      title: 'My SLT Web Portal',
      description: 'Customer self-service portal for Sri Lanka Telecom with account management, bill payments, and service requests functionality.',
      image: 'https://images.unsplash.com/photo-1658825473738-a56b08976bbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwb3J0YWx8ZW58MXx8fHwxNzYxNTQ5MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'TypeScript', 'REST API', 'Responsive Design'],
      featured: true,
      github: '#',
      demo: '#'
    },
    {
      title: 'e-Kitchen E-commerce Platform',
      description: 'Full-featured online food ordering and kitchen equipment marketplace with shopping cart, secure checkout, and order tracking.',
      image: 'https://images.unsplash.com/photo-1708915965975-2a950db0e215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBmb29kJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NjE1NDkwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'E-commerce'],
      featured: true,
      github: '#',
      demo: '#'
    },
    {
      title: 'Tourist Management System',
      description: 'Comprehensive travel booking platform with destination browsing, itinerary planning, and booking management capabilities.',
      image: 'https://images.unsplash.com/photo-1652645512260-8d427382f5f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB0b3VyaXNtJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjE1NDkwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Python', 'Django', 'MySQL'],
      featured: false,
      github: '#',
      demo: '#'
    }
  ];

  const mobileDesigns = [
    'Food Delivery App UI',
    'Banking App Interface',
    'E-learning Platform',
    'Fitness Tracker App',
    'Social Media Dashboard'
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
            <p className="text-gray-300 max-w-2xl mx-auto">
              A showcase of recent work demonstrating technical expertise and creative problem-solving
            </p>
          </div>
          
          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={project.featured ? 'lg:col-span-1' : 'lg:col-span-1'}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col group hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    {project.featured && (
                      <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                        <Star size={12} fill="currentColor" />
                        Featured
                      </div>
                    )}
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 transition-all">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="bg-gray-700 text-blue-400 border border-gray-600 hover:bg-blue-500/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-blue-500"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2" size={16} />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2" size={16} />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile App Designs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-2xl p-8 border border-gray-700"
          >
            <h3 className="text-white mb-6 text-center">Mobile App Designs (Figma)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {mobileDesigns.map((design, index) => (
                <motion.div
                  key={design}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center group cursor-pointer"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">📱</span>
                  </div>
                  <p className="text-gray-300 text-sm group-hover:text-purple-400 transition-colors">
                    {design}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
