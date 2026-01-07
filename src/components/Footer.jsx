import { motion } from 'framer-motion'
import { Heart, ArrowUp, Code2, Mail, Github, Linkedin, FileText } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com", 
      label: "GitHub",
      hoverColor: "hover:bg-gray-800 hover:text-white"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com", 
      label: "LinkedIn",
      hoverColor: "hover:bg-blue-600 hover:text-white"
    },
    { 
      icon: Mail, 
      href: "mailto:faizan@example.com", 
      label: "Email",
      hoverColor: "hover:bg-red-500 hover:text-white"
    },
    { 
      icon: FileText, 
      href: "/resume.pdf", 
      label: "Resume",
      hoverColor: "hover:bg-green-600 hover:text-white"
    }
  ]

  return (
    <footer className="relative py-16 border-t border-gray-800 bg-dark-secondary/40">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content - All Centered */}
        <div className="flex flex-col items-center text-center">
          
          {/* Logo/Name Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col items-center mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-linear-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4"
              >
                <Code2 className="w-8 h-8" />
              </motion.div>
              <h3 className="text-3xl font-bold bg-linear-to-r from-primary via-white to-secondary bg-clip-text text-transparent mb-2">
                Faizan Shaikh
              </h3>
              <p className="text-gray-400 text-lg">Junior MERN Stack Developer</p>
            </div>

            {/* Tagline */}
            <p className="text-gray-400 max-w-md text-lg">
              Building modern web applications with passion and precision
            </p>
          </motion.div>

          {/* Social Links - Centered Circle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h4 className="text-xl font-semibold mb-6 text-gray-300">Connect With Me</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`p-4 bg-dark rounded-full border border-gray-800 ${social.hoverColor} transition-all duration-300 transform`}
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md border-t border-gray-800 mb-12"></div>

          {/* Tech Stack & Copyright - Centered Stack */}
          <div className="flex flex-col items-center space-y-8 w-full max-w-2xl">
            
            {/* Tech Stack Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-6 py-3 bg-dark/50 rounded-full border border-gray-800 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-300">React</span>
                </div>
                <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Vite</span>
                </div>
                <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Tailwind</span>
                </div>
                <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Framer Motion</span>
                </div>
              </div>
            </motion.div>

            {/* Copyright & Made With Love */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="text-gray-500 text-center">
                <p className="text-sm">© {currentYear} Faizan Shaikh • All Rights Reserved</p>
                <div className="flex items-center justify-center mt-2 space-x-1">
                  <span className="text-xs">Made with</span>
                  <Heart className="inline w-3 h-3 text-red-500 mx-1 animate-pulse" />
                  <span className="text-xs">by Faizan</span>
                </div>
              </div>

              {/* Availability Status */}
              <div className="flex items-center space-x-2 px-4 py-2 bg-dark/30 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">Available for opportunities</span>
              </div>
            </motion.div>

            {/* Back to Top Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group p-4 bg-dark rounded-full border border-gray-800 hover:border-primary transition-all duration-300"
                aria-label="Back to top"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUp size={20} className="text-gray-400 group-hover:text-primary" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer