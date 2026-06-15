import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Full-Stack .NET Developer',
    company: 'Personal Projects',
    period: '2025 – Present',
    description: 'Developed multiple web applications and APIs using ASP.NET Core MVC and Entity Framework Core, focusing on clean architecture, database design, authentication systems, and responsive user interfaces.',
    responsibilities: [
      'Built full-stack web applications using ASP.NET Core MVC',
      'Designed and implemented RESTful APIs with proper architecture',
      'Implemented secure authentication and authorization systems',
      'Created responsive and user-friendly interfaces with modern design principles',
    ],
    technologies: ['ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'C#', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'Independent Web Developer',
    company: 'Self-Directed Learning & Projects',
    period: '2024 – Present',
    description: 'Building personal projects and practice applications while continuously improving development skills and learning modern technologies.',
    responsibilities: [
      'Developed practice projects to strengthen .NET skills',
      'Translated learning concepts into functional applications',
      'Explored modern development patterns and best practices',
      'Built portfolio projects demonstrating full-stack capabilities',
    ],
    technologies: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'HTML/CSS', 'JavaScript'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section relative" ref={ref}>
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
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A practical development path focused on building real-world applications
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500/50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'
              } pl-20 md:pl-0`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 border-4 border-dark-950"
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className={`card card-hover p-6 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
              >
                {/* Header */}
                <div className={`flex items-start gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="text-primary-400" size={24} />
                  </div>
                  <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                    <h3 className="text-xl font-bold text-gray-100">{exp.title}</h3>
                    <p className="text-primary-400 font-medium">{exp.company}</p>
                  </div>
                </div>

                {/* Meta Info */}
                <div className={`flex gap-4 mb-4 text-sm text-dark-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className={`text-dark-300 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    Key Responsibilities
                  </h4>
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className={`text-dark-400 text-sm flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-dark-800/80 text-xs text-gray-400 rounded border border-dark-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Timeline End Dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="absolute left-8 md:left-1/2 bottom-0 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-500 border-4 border-dark-950"
          />
        </div>
      </div>
    </section>
  );
}
