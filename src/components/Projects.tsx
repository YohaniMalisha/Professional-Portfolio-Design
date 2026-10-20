import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  year: number;
  featured: boolean;
  github: string;
  demo: string;
};

const allProjects: Project[] = [
  {
    title: 'HyperInspect Pro — Field Inspection Platform',
    description: 'Multi-tenant enterprise field inspection platform with mission-based inspector coordination, role-based access, JWT auth, billing, map-based missions, and GitHub Actions CI/CD. FastAPI backend with React 19 frontend deployed via Docker.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWVsZCUyMGluc3BlY3Rpb258ZW58MXx8fHwxNzYxNTQ5MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'JWT', 'Docker', 'GitHub Actions'],
    category: 'Full-Stack',
    year: 2026,
    featured: true,
    github: '#',
    demo: '#'
  },
  {
    title: 'HyperGeo-AGS — Geotechnical Data Viewer',
    description: 'Offline Windows desktop app for geotechnical engineers to view, print, and export AGS3/AGS4 ground-investigation data. Includes a custom AGS parser, SQLite cache, AGS4 builder with validation, and AI-powered suggestions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjE1NDkwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'FastAPI', 'pywebview', 'SQLite', 'Jinja2', 'Vanilla JS', 'PyInstaller', 'pytest'],
    category: 'Desktop',
    year: 2026,
    featured: true,
    github: '#',
    demo: '#'
  },
  {
    title: 'MentorXync — AI Coaching Platform',
    description: 'AI-powered coaching platform for mentors and students with course creation, enrollment, session-based learning, Google Gemini AI suggestions, JWT auth, and Stripe/HitPay payments. Deployed on Google Cloud Run via Docker.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNvYWNoaW5nJTIwcGxhdGZvcm18ZW58MXx8fHwxNzYxNTQ5MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Google Gemini', 'Stripe', 'Docker', 'Google Cloud Run'],
    category: 'AI / Full-Stack',
    year: 2026,
    featured: true,
    github: '#',
    demo: '#'
  },
  {
    title: 'InvoiceX — Invoice Management Platform',
    description: 'Full-stack invoice management platform with real-time data sync, Firebase authentication, and containerized deployment on Google Cloud Run.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZvaWNlJTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NjE1NDkwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'Express', 'Firebase', 'SQLite', 'Docker', 'Google Cloud Run'],
    category: 'Full-Stack',
    year: 2026,
    featured: true,
    github: '#',
    demo: '#'
  },
  {
    title: 'e-Kitchen E-commerce Platform',
    description: 'E-commerce marketplace connecting local farmers with customers. Integrated 60+ stores nationwide, dynamic product categories, Google OAuth, FastAPI backend, and MSSQL database.',
    image: 'https://images.unsplash.com/photo-1708915965975-2a950db0e215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBmb29kJTIwa2l0Y2hlbnxlbnwxfHx8fDE3NjE1NDkwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'Node.js', 'FastAPI', 'MSSQL', 'Google OAuth', 'Tailwind CSS'],
    category: 'E-commerce',
    year: 2025,
    featured: true,
    github: '#',
    demo: '#'
  },
  {
    title: 'Online Travel Booking System',
    description: 'All-in-one travel platform for booking bus, train, and flight tickets plus hotels and houses. Firebase real-time sync and Python backend for smooth booking management.',
    image: 'https://images.unsplash.com/photo-1652645512260-8d427382f5f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB0b3VyaXNtJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjE1NDkwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'Python', 'Firebase', 'CSS'],
    category: 'Full-Stack',
    year: 2025,
    featured: true,
    github: '#',
    demo: '#'
  },
  {
    title: 'Official Website — Hyperdim Innovations',
    description: 'Official corporate website for Hyperdim Innovations Pte. Ltd. with AI Agent chatbot integration, deployed on Google Cloud for global reach.',
    image: 'https://images.unsplash.com/photo-1669062897193-f8a4215c2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MTQ3NzE5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'AI Agent', 'Tailwind CSS', 'Google Cloud'],
    category: 'Frontend',
    year: 2025,
    featured: true,
    github: '#',
    demo: '#'
  },
  {
    title: 'MySLT Web Portal',
    description: 'Official web portal for SLT Mobitel — Sri Lanka\'s national telecom provider. Enables customers to manage services, view bills, and handle account details seamlessly.',
    image: 'https://images.unsplash.com/photo-1658825473738-a56b08976bbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwb3J0YWx8ZW58MXx8fHwxNzYxNTQ5MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'REST API'],
    category: 'Frontend',
    year: 2025,
    featured: true,
    github: '#',
    demo: '#'
  },
  {
    title: 'Official Website — BISD International',
    description: 'Corporate website for BISD International Pte. Ltd., Singapore, featuring complex UI components and advanced Recharts data visualizations for business analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjE1NDkwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'Recharts', 'Radix UI', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    category: 'Frontend',
    year: 2025,
    featured: false,
    github: '#',
    demo: '#'
  },
  {
    title: 'AstraleonTech Official Website',
    description: 'Modern tech startup website with clean design — React frontend paired with Node.js backend services for a professional online presence.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cHxlbnwxfHx8fDE3NjE1NDkwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    category: 'Full-Stack',
    year: 2025,
    featured: false,
    github: '#',
    demo: '#'
  },
  {
    title: 'Tourist Management System — Ceylon My Dream',
    description: 'Scalable system for managing tourist bookings, events, and tours. Python backend with React frontend for seamless travel experience management.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXNtJTIwU3JpJTIwTGFua2F8ZW58MXx8fHwxNzYxNTQ5MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'Python', 'CSS'],
    category: 'Full-Stack',
    year: 2025,
    featured: false,
    github: '#',
    demo: '#'
  },
  {
    title: 'Velora Elders-care Website',
    description: 'Interactive, accessibility-first website for elder-care services with a focus on user-friendly navigation and inclusive design principles.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcnNjYXJlJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjE1NDkwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'CSS'],
    category: 'Frontend',
    year: 2025,
    featured: false,
    github: '#',
    demo: '#'
  },
  {
    title: 'Lakmal Products — Jaggery Company Website',
    description: 'Product showcase website for a local Sri Lankan jaggery company with smooth UX, product catalog, and customer engagement features.',
    image: 'https://images.unsplash.com/photo-1556742400-b5b7c512d18e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMHByb2R1Y3RzJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjE1NDkwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'Frontend',
    year: 2025,
    featured: false,
    github: '#',
    demo: '#'
  },
  {
    title: 'Online Nursery Plant Shopping — Final Year Project',
    description: 'Final year project: an online plant shop with real-time updates, order management, and a seamless shopping flow built across multiple technologies.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMHNob3B8ZW58MXx8fHwxNzYxNTQ5MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Next.js', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    category: 'E-commerce',
    year: 2024,
    featured: false,
    github: '#',
    demo: '#'
  },
  {
    title: 'Blog Platform',
    description: 'Personal blog platform with user management, commenting system, and dynamic content generation using Django REST framework and React.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NjE1NDkwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React.js', 'Python / Django', 'SQL'],
    category: 'Full-Stack',
    year: 2024,
    featured: false,
    github: '#',
    demo: '#'
  },
  {
    title: 'Hotel Management System',
    description: 'Desktop hotel management system covering reservations, room management, and billing — designed in Figma and built in C# with SQL.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzYxNTQ5MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['C#', 'SQL', 'Figma'],
    category: 'Desktop',
    year: 2024,
    featured: false,
    github: '#',
    demo: '#'
  },
  {
    title: 'Blood Donation Website',
    description: 'Web application connecting blood donors with recipients, with donor registration and request management built in C#.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9vZCUyMGRvbmF0aW9ufGVufDF8fHx8MTc2MTU0OTA3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['C#'],
    category: 'Desktop',
    year: 2024,
    featured: false,
    github: '#',
    demo: '#'
  },
  {
    title: 'Online Movie Ticket Booking System',
    description: 'Web-based cinema ticket booking system with seat selection, show listings, and booking confirmation.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRpY2tldHxlbnwxfHx8fDE3NjE1NDkwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    year: 2022,
    featured: false,
    github: '#',
    demo: '#'
  }
];

const filterCategories = ['All', 'AI / Full-Stack', 'Full-Stack', 'E-commerce', 'Frontend', 'Desktop'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
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
              {allProjects.length}+ projects spanning AI platforms, e-commerce, corporate websites, and more
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveFilter(cat); setShowAll(false); }}
                className={`h-10 px-4 rounded-full inline-flex items-center justify-center whitespace-nowrap leading-none text-sm font-medium transition-all duration-300 border focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-md shadow-blue-500/20'
                    : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 hover:border-gray-600'
                }`}
              >
                {cat}
                <span className="ml-1.5 text-xs opacity-70">
                  ({cat === 'All' ? allProjects.length : allProjects.filter(p => p.category === cat).length})
                </span>
              </button>
            ))}
          </div>

          {/* Project grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
            >
              {visible.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <Card className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col group hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="relative h-44 overflow-hidden rounded-t-lg">
                      {project.featured && (
                        <div className="absolute top-3 right-3 z-10 h-7 px-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-medium leading-none inline-flex items-center gap-1.5 shadow-md ring-1 ring-white/20">
                          <Star size={12} fill="currentColor" className="shrink-0" />
                          Featured
                        </div>
                      )}
                      <span className="absolute top-3 left-3 z-10 h-7 px-3 rounded-full bg-gray-900/80 backdrop-blur-sm text-gray-200 text-xs font-medium leading-none inline-flex items-center ring-1 ring-white/10">
                        {project.year}
                      </span>
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-white text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 transition-all">
                          {project.title}
                        </CardTitle>
                      </div>
                      <span className="text-xs text-purple-400">{project.category}</span>
                      <CardDescription className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pt-0">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 5).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-gray-700 text-blue-400 text-xs border border-gray-600 hover:bg-blue-500/20 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 5 && (
                          <Badge variant="secondary" className="bg-gray-700 text-gray-400 text-xs border border-gray-600">
                            +{project.tags.length - 5}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2 pt-0">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1" size={14} />
                          Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Show more / less */}
          {filtered.length > 6 && (
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-blue-500 gap-2"
              >
                {showAll ? (
                  <>
                    <ChevronUp size={18} />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={18} />
                    Show All {filtered.length} Projects
                  </>
                )}
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
