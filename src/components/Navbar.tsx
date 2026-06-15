import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'GitHub', href: '#github' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <motion.a
          href="#"
          className="text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          MK
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-gray-300 hover:text-primary-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="https://github.com/mahmoudkhattab-ui"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: '#60a5fa' }}
            className="text-gray-400 hover:text-primary-400 transition-colors"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mahmoud-khattab-851886389"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-primary-400 transition-colors"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="mailto:imahmoudkhattab@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-primary-400 transition-colors"
          >
            <Mail size={20} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-primary-400 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glass"
      >
        <div className="container-custom py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-primary-400 transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 pt-4 border-t border-dark-700">
            <a href="https://github.com/mahmoudkhattab-ui" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="text-gray-400" />
            </a>
            <a href="https://www.linkedin.com/in/mahmoud-khattab-851886389" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} className="text-gray-400" />
            </a>
            <a href="mailto:imahmoudkhattab@gmail.com">
              <Mail size={20} className="text-gray-400" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
