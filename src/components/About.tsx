import { motion } from 'motion/react';
import { Code2, Palette, Zap, Users, Target, Award } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expertise in MERN stack and modern web technologies for end-to-end solutions.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive, visually appealing interfaces with Figma and modern design principles.'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Optimizing applications for speed, efficiency, and exceptional user experience.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong communication and leadership skills in Agile development environments.'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Analytical approach to complex challenges with innovative, scalable solutions.'
    },
    {
      icon: Award,
      title: 'Continuous Learning',
      description: 'Committed to staying current with industry trends and best practices.'
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 md:p-12 mb-12 border border-gray-700"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Associate Full-Stack Developer at <span className="text-blue-400">Hyperdim Innovation (Pvt) Ltd</span> with hands-on experience in modern web technologies. Currently pursuing a Bachelor of Information Technology (Hons) specializing in Software Engineering at ESOFT Metro Campus.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in creating responsive, user-friendly web applications using React, TypeScript, and modern development practices. My passion lies in transforming complex requirements into elegant, efficient solutions that deliver exceptional user experiences.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="text-blue-400 group-hover:text-purple-400 transition-colors" size={28} />
                </div>
                <h3 className="text-white mb-3">{highlight.title}</h3>
                <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
