import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';

export function Experience() {
  const timeline = [
    {
      type: 'work',
      title: 'Associate Full-Stack Developer',
      organization: 'Hyperdim Innovation (Pvt) Ltd',
      location: 'Colombo, Sri Lanka',
      period: '2024 - Present',
      description: 'Leading full-stack development projects using modern technologies and frameworks.',
      achievements: [
        'Developed and maintained enterprise web applications using React and TypeScript',
        'Integrated AI-powered features to enhance user experience',
        'Collaborated with cross-functional teams in Agile environment',
        'Implemented responsive designs and optimized application performance'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'AI Integration', 'Tailwind CSS']
    },
    {
      type: 'work',
      title: 'MERN Stack Intern',
      organization: 'SLT Mobitel',
      location: 'Sri Lanka',
      period: '2023 - 2024 (6 months)',
      description: 'Gained hands-on experience in full-stack web development with MERN stack.',
      achievements: [
        'Contributed to the development of My SLT web portal',
        'Worked with React and TypeScript for frontend development',
        'Collaborated with senior developers on feature implementation',
        'Learned industry best practices and coding standards'
      ],
      technologies: ['React', 'TypeScript', 'MongoDB', 'Express.js', 'Node.js']
    },
    {
      type: 'education',
      title: 'Bachelor of Information Technology (Hons)',
      organization: 'ESOFT Metro Campus',
      location: 'Colombo, Sri Lanka',
      period: '2021 - Present',
      description: 'Specializing in Software Engineering',
      achievements: [
        'Focus on modern software development practices',
        'Hands-on projects in web and mobile development',
        'Study of algorithms, data structures, and system design',
        'Active participation in academic projects and presentations'
      ],
      technologies: ['Software Engineering', 'Web Development', 'Database Management', 'System Design']
    }
  ];

  const goals = [
    'Master advanced React patterns and architecture',
    'Contribute to open-source projects',
    'Build scalable cloud-native applications',
    'Mentor junior developers and share knowledge'
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Experience & Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
            <p className="text-gray-300 max-w-2xl mx-auto">
              My professional journey and continuous learning path
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform -translate-x-1/2 z-10 ring-4 ring-gray-800" />

                  {/* Content card */}
                  <div className="w-full md:w-5/12 ml-16 md:ml-0">
                    <div className="glass-effect rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          item.type === 'work' 
                            ? 'bg-blue-500/20' 
                            : 'bg-purple-500/20'
                        }`}>
                          {item.type === 'work' ? (
                            <Briefcase className="text-blue-400" size={24} />
                          ) : (
                            <GraduationCap className="text-purple-400" size={24} />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white mb-1">{item.title}</h3>
                          <p className="text-blue-400 mb-2">{item.organization}</p>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {item.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {item.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4">{item.description}</p>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <ArrowRight className="text-blue-400 flex-shrink-0 mt-0.5" size={16} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-gray-700 text-blue-400 hover:bg-blue-500/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 glass-effect rounded-2xl p-8 border border-gray-700"
          >
            <h3 className="text-white mb-6 text-center">Career Goals</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-lg"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">{index + 1}</span>
                  </div>
                  <p className="text-gray-300">{goal}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
