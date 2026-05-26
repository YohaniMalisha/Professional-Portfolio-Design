import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from './ui/badge';
import { 
  Code2, 
  Database, 
  Wrench, 
  Palette, 
  Users,
  Award,
  CheckCircle2
} from 'lucide-react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'tools', label: 'Tools & Others', icon: Wrench },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'professional', label: 'Professional', icon: Users }
  ];

  const skillsData = {
    frontend: [
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 88 }
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Python/Django', level: 75 },
      { name: 'C#', level: 70 },
      { name: 'Java', level: 75 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 82 }
    ],
    tools: [
      { name: 'Git', level: 88 },
      { name: 'VS Code', level: 95 },
      { name: 'Google Cloud', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'Agile Methodology', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'GraphQL', level: 72 }
    ],
    design: [
      { name: 'Figma', level: 90 },
      { name: 'UI/UX Design', level: 85 },
      { name: 'Prototyping', level: 88 },
      { name: 'Wireframing', level: 85 },
      { name: 'Responsive Design', level: 92 }
    ],
    professional: [
      { name: 'Project Management', level: 82 },
      { name: 'Leadership', level: 80 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Team Collaboration', level: 88 },
      { name: 'Communication', level: 85 }
    ]
  };

  const certifications = [
    { name: 'React Basics', provider: 'Meta (Coursera)' },
    { name: 'Foundations of UX Design', provider: 'Google (Coursera)' },
    { name: 'Front-end Development', provider: 'Meta (Coursera)' },
    { name: 'Java Programming', provider: 'Great Learning Academy' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
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
              A comprehensive toolkit of modern technologies and frameworks
            </p>
          </div>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                <category.icon size={18} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Skills Display */}
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
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
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
            className="mt-16"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Award className="text-blue-400" size={28} />
              <h3 className="text-white">Professional Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 flex items-start gap-4 group"
                >
                  <CheckCircle2 className="text-blue-400 flex-shrink-0 mt-1 group-hover:text-purple-400 transition-colors" size={20} />
                  <div>
                    <h4 className="text-white mb-1">{cert.name}</h4>
                    <p className="text-gray-400">{cert.provider}</p>
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
