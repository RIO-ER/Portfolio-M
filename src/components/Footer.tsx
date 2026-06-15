import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const SOCIAL_LINKS = [
  { icon: Github, href: 'https://github.com/mahmoudkhattab-ui', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mahmoud-khattab-851886389', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:imahmoudkhattab@gmail.com', label: 'Email' },
];

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'GitHub', href: '#github' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-dark-800">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-dark-900" />

      <div className="container-custom relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold gradient-text"
          >
            MK
          </motion.button>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-dark-400 hover:text-primary-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-dark-800/50 flex items-center justify-center text-dark-400 hover:text-primary-400 hover:bg-dark-800 transition-all"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-dark-800 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-dark-400">
          <p className="flex items-center gap-2">
            &copy; {new Date().getFullYear()} Mahmoud Khattab. Built with
            <Heart className="text-red-500" size={14} fill="currentColor" />
            using React & Tailwind CSS
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors"
          >
            <ArrowUp size={16} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
