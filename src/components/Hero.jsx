import { motion } from 'framer-motion'
import { ArrowDown, Code, Database, Server, Globe } from 'lucide-react'

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const mernStack = [
    { icon: Code, label: "React.js", color: "text-blue-400" },
    { icon: Server, label: "Node.js", color: "text-green-400" },
    { icon: Database, label: "MongoDB", color: "text-green-500" },
    { icon: Globe, label: "Express.js", color: "text-gray-400" }
  ]

  const nameAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Animated Text */}
        <div className="overflow-hidden mb-4">
          <motion.h1 
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm{' '}
            <motion.span
              variants={nameAnimation}
              initial="hidden"
              animate="visible"
              className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent relative inline-block"
            >
              FAIZAN SHAIKH
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
            </motion.span>
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.h2
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl md:text-3xl text-gray-400 mb-8"
          >
            Junior <span className="text-primary">MERN Stack</span> Developer
          </motion.h2>
        </div>

        <div className="overflow-hidden mb-12">
          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Passionate about building modern web applications with MongoDB, Express.js, React, and Node.js.
            Currently enhancing my skills through hands-on projects and continuous learning.
          </motion.p>
        </div>

        {/* MERN Stack Icons */}
        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center space-x-8 mb-12"
        >
          {mernStack.map((tech, index) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.2, y: -5 }}
              className="flex flex-col items-center"
            >
              <div className="p-3 bg-dark-secondary rounded-full mb-2">
                <tech.icon className={`w-6 h-6 ${tech.color}`} />
              </div>
              <span className="text-sm text-gray-300">{tech.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-linear-to-r from-primary to-secondary rounded-lg font-semibold text-lg shadow-lg shadow-primary/25"
          >
            View My Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-gray-700 rounded-lg font-semibold text-lg hover:border-primary transition-colors"
          >
            Hire Me
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={floatingAnimation}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Explore More</span>
            <ArrowDown className="text-primary" size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero