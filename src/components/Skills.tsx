import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Database,
  Server,
  Code2,
  Layout,
  GitBranch,
  Settings,
  Layers,
  Terminal,
  Cloud,
  Shield,
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Backend Development',
    icon: Server,
    color: 'primary',
    skills: [
      { name: 'ASP.NET Core MVC', icon: Layers },
      { name: 'C#', icon: Code2 },
      { name: 'RESTful APIs', icon: Server },
      { name: 'Entity Framework Core', icon: Database },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    color: 'accent',
    skills: [
      { name: 'HTML5/CSS3', icon: Layout },
      { name: 'JavaScript', icon: Code2 },
      { name: 'Bootstrap', icon: Layout },
    ],
  },
  {
    title: 'Database & Data',
    icon: Database,
    color: 'primary',
    skills: [
      { name: 'SQL Server', icon: Database },
      { name: 'T-SQL', icon: Terminal },
      { name: 'Database Design', icon: Layers },
    ],
  },
  {
    title: 'Architecture & Patterns',
    icon: Layers,
    color: 'accent',
    skills: [
      { name: 'MVC Architecture', icon: Layers },
      { name: 'Clean Architecture', icon: Layout },
      { name: 'Design Patterns', icon: Settings },
      { name: 'SOLID Principles', icon: Shield },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: GitBranch,
    color: 'primary',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: GitBranch },
      { name: 'Visual Studio', icon: Code2 },
      { name: 'CI/CD', icon: Cloud },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="section relative" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I work with to build modern web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="card card-hover p-6"
            >
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    group.color === 'primary'
                      ? 'bg-primary-500/20 text-primary-400'
                      : 'bg-accent-500/20 text-accent-400'
                  }`}
                >
                  <group.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-100">{group.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <skill.icon
                      size={16}
                      className={`${
                        group.color === 'primary'
                          ? 'text-primary-500/60 group-hover:text-primary-400'
                          : 'text-accent-500/60 group-hover:text-accent-400'
                      } transition-colors`}
                    />
                    <span className="text-dark-300 group-hover:text-gray-100 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-dark-400 mb-4">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Agile Methodology',
              'Unit Testing',
              'Debugging',
              'Performance Optimization',
              'Security Best Practices',
              'Responsive Design',
              'API Integration',
              'Code Review',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-full text-sm text-dark-300 hover:border-primary-500/30 hover:text-primary-400 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
