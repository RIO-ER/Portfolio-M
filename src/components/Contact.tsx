import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Send,
  Copy,
  Check,
  Download,
} from 'lucide-react';

// Configurable contact information
const CONTACT_CONFIG = {
  email: 'imahmoudkhattab@gmail.com',
  github: 'https://github.com/mahmoudkhattab-ui',
  linkedin: 'https://www.linkedin.com/in/mahmoud-khattab-851886389',
  resumeUrl: 'https://drive.google.com/file/d/1pNa5Zk7g6HaKKOjy049vq5m9oNH1LxVl/view?usp=drive_link',
  location: 'Cairo, Egypt',
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_CONFIG.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = CONTACT_CONFIG.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production, you would send this to a backend or email service
    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="section relative" ref={ref}>
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
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Intro Card */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Get in Touch</h3>
              <p className="text-dark-300 mb-6">
                I'm currently available for freelance projects and open to discussing new opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                {/* Email */}
                <motion.button
                  onClick={handleCopyEmail}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700 hover:border-primary-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-primary-400" size={24} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm text-dark-400">Email</p>
                    <p className="text-gray-100 font-medium">{CONTACT_CONFIG.email}</p>
                  </div>
                  {copied ? (
                    <Check className="text-accent-400" size={20} />
                  ) : (
                    <Copy className="text-dark-400 group-hover:text-primary-400 transition-colors" size={20} />
                  )}
                </motion.button>

                {/* GitHub */}
                <motion.a
                  href={CONTACT_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700 hover:border-primary-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="text-primary-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-dark-400">GitHub</p>
                    <p className="text-gray-100 font-medium">@mahmoudkhattab-ui</p>
                  </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href={CONTACT_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700 hover:border-primary-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="text-primary-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-dark-400">LinkedIn</p>
                    <p className="text-gray-100 font-medium">Mahmoud Khattab</p>
                  </div>
                </motion.a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                    <MapPin className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-dark-400">Location</p>
                    <p className="text-gray-100 font-medium">{CONTACT_CONFIG.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <motion.a
              href={CONTACT_CONFIG.resumeUrl}
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="card block text-center p-6 cursor-pointer hover:border-primary-500/30 transition-all"
            >
              <Download className="mx-auto text-primary-400 mb-2" size={32} />
              <p className="text-gray-100 font-medium">Download Resume</p>
              <p className="text-sm text-dark-400">PDF Format</p>
            </motion.a>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-field resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full btn-primary flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <Check size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent-400 text-center text-sm"
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
