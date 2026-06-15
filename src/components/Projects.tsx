import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ShoppingCart, BookOpen } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Web Application',
    description:
      'A full-stack e-commerce platform built with ASP.NET Core MVC featuring authentication, product management, shopping cart functionality, and SQL Server integration.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800', // Laptop with shopping
    technologies: ['ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Bootstrap', 'C#'],
    features: [
      'User authentication & authorization',
      'Product and category management',
      'Shopping cart system',
      'Database integration',
      'Responsive UI',
    ],
    githubUrl: 'https://github.com/mahmoudkhattab-ui',
    liveUrl: '#',
    icon: ShoppingCart,
    gradient: 'from-primary-500/20 to-accent-500/20',
  },
  {
    title: 'Book Shopping Cart MVC Project',
    description:
      'A modern online bookstore application built using MVC architecture with clean structure, responsive design, and complete shopping cart functionality.',
    image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=800', // Books on shelf
    technologies: ['ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'HTML/CSS', 'JavaScript'],
    features: [
      'Book catalog browsing',
      'Shopping cart functionality',
      'Clean architecture structure',
      'Responsive modern interface',
      'Database-driven content',
    ],
    githubUrl: 'https://github.com/mahmoudkhattab-ui',
    liveUrl: '#',
    icon: BookOpen,
    gradient: 'from-accent-500/20 to-primary-500/20',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section gradient-bg relative" ref={ref}>
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
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real-world applications built with modern .NET technologies
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card card-hover overflow-hidden"
            >
              <div className={`grid lg:grid-cols-2 gap-0`}>
                {/* Image Section */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative overflow-hidden ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-dark-900/60" />

                  {/* Project Icon Overlay */}
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} backdrop-blur-sm flex items-center justify-center border border-white/10`}
                  >
                    <project.icon className="text-white" size={24} />
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-100 mb-3">{project.title}</h3>

                  <p className="text-dark-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-800/80 text-sm text-primary-400 rounded-md border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-dark-300 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary flex items-center gap-2 text-sm"
                    >
                      <Github size={18} />
                      View Code
                    </motion.a>
                    {project.liveUrl !== '#' && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center gap-2 text-sm"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
