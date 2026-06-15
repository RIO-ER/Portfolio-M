import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Rocket, Target, Users, Download, ExternalLink } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Clean Code Advocate',
    description: 'Writing maintainable, scalable, and well-documented code following best practices and design patterns.',
  },
  {
    icon: Rocket,
    title: 'Performance Focused',
    description: 'Optimizing applications for speed, efficiency, and seamless user experiences across all devices.',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Translating complex business requirements into elegant technical solutions that deliver real value.',
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    description: 'Building interfaces that are intuitive, accessible, and delightful to use for end users.',
  },
];

// Configurable resume URL - update this when you have the actual link
const RESUME_URL = 'https://drive.google.com/file/d/1pNa5Zk7g6HaKKOjy049vq5m9oNH1LxVl/view?usp=drive_link';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section gradient-bg relative" ref={ref}>
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Passionate about building impactful digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card p-8">
              <div className="space-y-6 text-dark-300 leading-relaxed">
                <p className="text-lg">
                  I'm a <span className="text-primary-400 font-medium">Full-Stack .NET Developer</span> with a passion for creating modern, scalable web applications that solve real-world problems.
                </p>

                <p>
                  My journey in software development has been driven by curiosity and a desire to build meaningful solutions. I specialize in ASP.NET Core MVC, Entity Framework Core, and SQL Server, crafting full-stack applications that prioritize both performance and user experience.
                </p>

                <p>
                  What excites me most about development is the process of transforming ideas into functional, polished products. I believe in writing clean, maintainable code and following best practices that make applications not just work, but work well.
                </p>

                <p>
                  Beyond coding, I'm constantly learning and staying updated with the latest technologies and development patterns. I'm passionate about continuous improvement – both in my codebase and in my skills as a developer.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <motion.a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center gap-2"
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary flex items-center gap-2"
                >
                  View Projects
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card card-hover p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-4">
                  <item.icon className="text-primary-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">{item.title}</h3>
                <p className="text-dark-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
