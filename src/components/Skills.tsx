import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Database,
  Wrench,
  Palette,
  Users,
  Award,
  CheckCircle2,
  Clock
} from 'lucide-react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'devops', label: 'DevOps & Cloud', icon: Wrench },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'professional', label: 'Professional', icon: Users }
  ];

  const skillsData = {
    frontend: [
      { name: 'React.js', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Next.js', level: 82 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Vite', level: 84 },
      { name: 'React Router', level: 86 }
    ],
    backend: [
      { name: 'Node.js & Express', level: 86 },
      { name: 'Python / FastAPI', level: 82 },
      { name: 'Python / Django', level: 75 },
      { name: 'PHP', level: 68 },
      { name: 'C# (.NET)', level: 72 },
      { name: 'Java', level: 74 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL & MSSQL', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'Firebase', level: 82 },
      { name: 'SQLite', level: 78 },
      { name: 'Jinja2 & pywebview', level: 74 }
    ],
    devops: [
      { name: 'Docker', level: 80 },
      { name: 'Google Cloud (Cloud Run)', level: 78 },
      { name: 'AWS', level: 65 },
      { name: 'GitHub Actions (CI/CD)', level: 78 },
      { name: 'Jenkins', level: 68 },
      { name: 'Git / GitHub / Bitbucket', level: 90 },
      { name: 'REST APIs', level: 92 },
      { name: 'PyInstaller & pytest', level: 76 }
    ],
    design: [
      { name: 'Figma', level: 90 },
      { name: 'UI/UX Design', level: 86 },
      { name: 'Prototyping', level: 88 },
      { name: 'Wireframing', level: 85 },
      { name: 'Responsive Design', level: 93 },
      { name: 'Accessibility (a11y)', level: 78 }
    ],
    professional: [
      { name: 'Agile / Scrum', level: 85 },
      { name: 'Problem Solving', level: 92 },
      { name: 'Team Collaboration', level: 90 },
      { name: 'Communication', level: 88 },
      { name: 'Leadership', level: 80 },
      { name: 'Project Management', level: 82 }
    ]
  };

  const techBadges = {
    languages: ['JavaScript', 'TypeScript', 'Python', 'C#', 'Java', 'PHP', 'SQL', 'HTML', 'CSS'],
    frameworks: ['React.js', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'Django', 'Vite', 'React Router', 'Jinja2', 'pywebview'],
    databases: ['MongoDB', 'MySQL', 'MSSQL', 'Firebase', 'SQLite', 'PostgreSQL'],
    tools: ['Docker', 'Git', 'GitHub Actions', 'Jenkins', 'Google Cloud', 'AWS', 'Figma', 'PyInstaller', 'pytest', 'phpMyAdmin']
  };

  const certifications = [
    { name: 'React Basics', provider: 'Meta (Coursera)', done: true },
    { name: 'Introduction to Front-end Development', provider: 'Meta (Coursera)', done: true },
    { name: 'Introduction to Software Engineering', provider: 'Meta (Coursera)', done: true },
    { name: 'Java Programming', provider: 'Great Learning Academy', done: true },
    { name: 'Google AI Professional Certificate', provider: 'Google (Coursera)', done: false }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
            <p className="text-gray-300 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies — from UI to cloud deployment
            </p>
          </div>

          {/* Tech badge quick view */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-2xl p-6 border border-gray-700 mb-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(techBadges).map(([category, items]) => (
                <div key={category}>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 capitalize">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2 py-1 rounded-md bg-gray-800 border border-gray-700 text-blue-300 hover:border-blue-500/60 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`pill-tab ${activeCategory === category.id ? 'pill-tab-active' : ''}`}
              >
                <category.icon size={16} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Skill bars */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-effect rounded-2xl p-8 border border-gray-700 mb-12"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white text-sm">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Award className="text-blue-400" size={28} />
              <h3 className="text-white">Licenses & Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 p-5 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 flex items-start gap-4 group"
                >
                  {cert.done ? (
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5 group-hover:text-blue-400 transition-colors" size={20} />
                  ) : (
                    <Clock className="text-yellow-400 flex-shrink-0 mt-0.5" size={20} />
                  )}
                  <div>
                    <h4 className="text-white text-sm mb-1">{cert.name}</h4>
                    <p className="text-gray-400 text-xs">{cert.provider}</p>
                    {!cert.done && (
                      <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                        In Progress
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
