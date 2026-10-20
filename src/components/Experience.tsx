import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';

const timeline = [
  {
    type: 'work',
    title: 'Junior Full-Stack Developer',
    organization: 'Hyperdim Innovation (Pte) Ltd',
    location: 'Singapore (Remote)',
    period: 'Aug 2025 – Present',
    description: 'Building and maintaining multiple production-grade full-stack platforms for a Singapore-based tech company.',
    achievements: [
      'HyperGeo-AGS (2026) — Offline Windows app for geotechnical engineers to view, print & export AGS3/AGS4 data; custom AGS parser, SQLite cache, and AI suggestions (Python, FastAPI, pywebview, SQLite, Jinja2, PyInstaller, pytest)',
      'HyperInspect Pro (2026) — Multi-tenant field inspection platform with JWT auth, map-based missions, billing, and GitHub Actions CI/CD (React 19, TypeScript, Vite, FastAPI, PostgreSQL, Docker)',
      'MentorXync (2026) — AI-powered coaching platform with Gemini-assisted mentor replies, Stripe/HitPay payments, and Docker deployment on Google Cloud Run (Next.js, TypeScript, FastAPI, PostgreSQL)',
      'InvoiceX (2026) — Full-stack invoice management platform with real-time sync, Firebase auth, deployed on Google Cloud Run (React, Node.js, Express, SQLite, Docker)',
      'Official Hyperdim website (2025) — Company website with AI customer-service agent, deployed on Google Cloud (React, TypeScript, Tailwind CSS)',
      'e-Kitchen (2025) — E-commerce platform linking 60+ local farmers to customers with Google OAuth (React, TypeScript, FastAPI, MSSQL)',
      'Ceylon My Dream (2025) — Tourist management system for bookings and tours (React, TypeScript, Python)',
      'Velora Elders-care Website (2025) — Accessible, easy-to-navigate elder-care website (React, TypeScript, CSS)'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'Firebase', 'Google Cloud', 'AI Integration', 'pytest']
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
    period: '2021 – 2026 (Graduated)',
    description: 'Specialized in Software Engineering. Graduated with a Bachelor of Information Technology (Hons).',
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

type Entry = (typeof timeline)[number];

const workItems = timeline.filter((t) => t.type === 'work');
const eduItems = timeline.filter((t) => t.type === 'education');

function TimelineSection({
  id,
  bg,
  title,
  subtitle,
  items,
}: {
  id: string;
  bg: string;
  title: string;
  subtitle: string;
  items: Entry[];
}) {
  return (
    <section id={id} className={`py-20 ${bg} relative`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">{title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
            <p className="text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-purple-600" />

            <div className="space-y-10">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="timeline-entry"
                >
                  {/* Timeline dot */}
                  <div className={`timeline-dot ${item.type === 'work' ? 'timeline-dot-work' : 'timeline-dot-edu'}`}>
                    {item.type === 'work' ? (
                      <Briefcase size={14} className="text-white" />
                    ) : (
                      <GraduationCap size={14} className="text-white" />
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

export function Experience() {
  return (
    <>
      <TimelineSection
        id="experience"
        bg="bg-gray-800"
        title="Experience"
        subtitle="Where I've worked — from Sri Lanka to Singapore"
        items={workItems}
      />
      <TimelineSection
        id="education"
        bg="bg-gray-900"
        title="Education"
        subtitle="Where I've studied — from Colombo to the UK"
        items={eduItems}
      />
    </>
  );
}
