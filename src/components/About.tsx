import { motion } from 'motion/react';
import { Code2, Palette, Zap, Users, Target, Award, Brain, Globe } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'End-to-end solutions with React, Node.js, Express, FastAPI, and cloud deployment on Google Cloud & AWS.'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Integrating AI agents and LLMs (Google Gemini) into production platforms for smarter user experiences.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive, accessible interfaces with Figma and bringing them to life with Tailwind CSS.'
    },
    {
      icon: Zap,
      title: 'Performance & DevOps',
      description: 'Containerizing apps with Docker, automating CI/CD with GitHub Actions and Jenkins, and deploying on Google Cloud Run.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong communication and leadership across cross-functional teams in Agile environments.'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Analytical approach to complex challenges — from microservices architecture to real-time data sync.'
    },
    {
      icon: Globe,
      title: 'International Experience',
      description: 'Working remotely for Hyperdim Innovation Pte. Ltd., Singapore, delivering production-grade global platforms.'
    },
    {
      icon: Award,
      title: 'Continuous Learning',
      description: 'Currently pursuing MSc in Artificial Intelligence at Kingston University, UK, while staying hands-on.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
          </div>

          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 md:p-12 mb-12 border border-gray-700"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I'm a <span className="text-blue-400">Junior Full-Stack Developer</span> at{' '}
                  <span className="text-purple-400">Hyperdim Innovation Pte. Ltd., Singapore</span>, building
                  full-stack platforms that scale — from invoice management systems and e-commerce marketplaces
                  to AI-powered coaching platforms and elder-care websites.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I hold a <span className="text-blue-400">Bachelor of Information Technology (Hons)</span> from
                  ESOFT Metro Campus (coursework completed, awaiting graduation) and am currently reading for
                  an <span className="text-purple-400">MSc in Artificial Intelligence</span> at Kingston
                  University, UK. My work bridges modern frontend (React, TypeScript, Next.js) with robust
                  backends (Node.js, FastAPI, Express) and cloud infrastructure (Docker, Google Cloud, AWS).
                </p>
              </div>
              {/* Quick facts */}
              <div className="space-y-3">
                {[
                  { label: 'Role', value: 'Junior Full-Stack Developer' },
                  { label: 'Company', value: 'Hyperdim Innovation, Singapore' },
                  { label: 'Location', value: 'Bandaragama, Sri Lanka' },
                  { label: 'Email', value: 'wmalishawimalasena@gmail.com' },
                  { label: 'Phone', value: '+94 764 582 878' },
                  { label: 'Education', value: 'MSc AI — Kingston University, UK' },
                  { label: 'Status', value: 'Open to Opportunities' }
                ].map((fact) => (
                  <div key={fact.label} className="flex gap-3 items-start">
                    <span className="text-blue-400 min-w-[90px] text-sm">{fact.label}:</span>
                    <span className="text-gray-300 text-sm">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="text-blue-400 group-hover:text-purple-400 transition-colors" size={24} />
                </div>
                <h3 className="text-white text-base mb-2">{highlight.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
