import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';

export function Experience() {
  const timeline = [
    {
      type: 'work',
      title: 'Junior Full-Stack Developer',
      organization: 'Hyperdim Innovation (Pte) Ltd',
      location: 'Singapore (Remote)',
      period: 'Aug 2025 – Present',
      description: 'Building and maintaining multiple production-grade full-stack platforms for a Singapore-based tech company.',
      achievements: [
        'Developed InvoiceX — a full-stack invoice management platform (React, Node.js, Express, Firebase, SQLite, Docker) deployed on Google Cloud Run',
        'Built e-Kitchen E-commerce connecting 60+ local farmers to customers (React, TypeScript, FastAPI, MSSQL, Google OAuth)',
        'Designed and developed the Velora Elders-care Website with accessibility-first approach (React, TypeScript, CSS)',
        'Contributed to Ceylon My Dream tourist management system (React, TypeScript, Python)',
        'Led development of the official Hyperdim-Innovations website with AI Agent integration, deployed on Google Cloud'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'FastAPI', 'Docker', 'Firebase', 'Google Cloud', 'AI Integration']
    },
    {
      type: 'work',
      title: 'Intern Software Engineer',
      organization: 'SLT Mobitel',
      location: 'Colombo, Sri Lanka',
      period: 'Feb 2025 – Aug 2025',
      description: 'Developed the official MySLT Web Portal to improve customer experience and engagement for Sri Lanka\'s national telecom provider.',
      achievements: [
        'Developed the official MySLT Web Portal for improved user experience and customer engagement',
        'Utilized React and TypeScript for frontend development with modern component architecture',
        'Collaborated with backend teams for seamless API integration',
        'Learned industry-grade coding standards and enterprise workflows'
      ],
      technologies: ['React', 'TypeScript', 'REST APIs', 'Responsive Design']
    },
    {
      type: 'education',
      title: 'MSc in Artificial Intelligence',
      organization: 'Kingston University',
      location: 'London, United Kingdom',
      period: '2026 (Reading)',
      description: 'Currently reading for a Master\'s degree in Artificial Intelligence, deepening expertise in ML, deep learning, and AI-powered application development.',
      achievements: [
        'Focus on machine learning, neural networks, and AI system design',
        'Applying AI knowledge to real-world projects (Google Gemini integration in MentorXync)',
        'Bridging AI theory with full-stack engineering practice'
      ],
      technologies: ['Machine Learning', 'Deep Learning', 'Python', 'Data Science', 'AI Systems']
    },
    {
      type: 'education',
      title: 'Bachelor of Information Technology (Hons)',
      organization: 'ESOFT Metro Campus',
      location: 'Bambalapitiya, Sri Lanka',
      period: '2021 – 2026',
      description: 'Specializing in Software Engineering. Completed all coursework; awaiting graduation.',
      achievements: [
        'Relevant coursework: OOP, System Analysis & Design, Web Application Development',
        'Cloud Application Development, Database Systems, Agile Software Development',
        'Data Structures & Algorithms, Advanced Web Technologies, AI, Data Science',
        'Hands-on projects in web, mobile, and cloud development'
      ],
      technologies: ['Software Engineering', 'Web Development', 'Cloud Computing', 'Data Science']
    },
    {
      type: 'education',
      title: 'Diploma in Information Technology',
      organization: 'ESOFT Metro Campus',
      location: 'Bambalapitiya, Sri Lanka',
      period: '2020',
      description: 'Foundation diploma covering core IT disciplines and programming fundamentals.',
      achievements: [
        'Fundamentals of Programming, Computer Systems, OOP, Database Systems',
        'Web Application Development, Cloud Application Development',
        'IT Infrastructure and Agile Software Development'
      ],
      technologies: ['Programming Fundamentals', 'Databases', 'Web Development', 'IT Infrastructure']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Experience & Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
            <p className="text-gray-300 max-w-2xl mx-auto">
              My professional journey — from Sri Lanka to Singapore and the UK
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-purple-600" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 md:left-8 w-5 h-5 rounded-full transform -translate-x-1/2 z-10 ring-4 ring-gray-800 flex items-center justify-center ${
                    item.type === 'work' ? 'bg-blue-500' : 'bg-purple-500'
                  }`}>
                    {item.type === 'work' ? (
                      <Briefcase size={10} className="text-white" />
                    ) : (
                      <GraduationCap size={10} className="text-white" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="glass-effect rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-white text-lg mb-0.5">{item.title}</h3>
                        <p className="text-blue-400">{item.organization}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs border ${
                        item.type === 'work'
                          ? 'bg-blue-500/10 border-blue-500/30 text-blue-300'
                          : 'bg-purple-500/10 border-purple-500/30 text-purple-300'
                      }`}>
                        {item.type === 'work' ? 'Work' : 'Education'}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm mb-4">{item.description}</p>

                    <ul className="space-y-1.5 mb-4">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                          <ArrowRight className="text-blue-400 flex-shrink-0 mt-0.5" size={14} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gray-700 text-blue-400 text-xs hover:bg-blue-500/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
