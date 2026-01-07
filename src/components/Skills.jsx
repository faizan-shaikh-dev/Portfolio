import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Server, 
  Palette,
  GitBranch,
  Zap,
  Layers,
  Cpu
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Redux', level: 70 }
      ]
    },
    {
      icon: Server,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'REST APIs', level: 85 },
        { name: 'Authentication', level: 70 },
        { name: 'JWT', level: 65 }
      ]
    },
    {
      icon: Database,
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'Mongoose ODM', level: 70 },
        { name: 'Database Design', level: 65 },
        { name: 'CRUD Operations', level: 85 },
        { name: 'Data Modeling', level: 60 }
      ]
    },
    {
      icon: Layers,
      title: 'MERN Stack',
      skills: [
        { name: 'Full-Stack Apps', level: 70 },
        { name: 'State Management', level: 75 },
        { name: 'API Integration', level: 80 },
        { name: 'Project Structure', level: 65 },
        { name: 'Deployment', level: 60 }
      ]
    },
    {
      icon: Palette,
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 80 },
        { name: 'Figma Basics', level: 65 },
        { name: 'Responsive Design', level: 85 }
      ]
    },
    {
      icon: Zap,
      title: 'Learning',
      skills: [
        { name: 'TypeScript', level: 50 },
        { name: 'Next.js', level: 40 },
        { name: 'GraphQL', level: 30 },
        { name: 'Docker', level: 20 },
        { name: 'AWS Basics', level: 25 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="py-20 bg-dark-secondary/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            SKILLS & TECHNOLOGIES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-primary">Technical</span> Arsenal
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto px-4">
            As a passionate MERN stack developer, I'm continuously expanding my skill set.
            Here's what I've mastered and what I'm currently learning.
          </p>
        </motion.div>

        {/* Skills Grid - Properly Centered and Sized */}
        <div className="flex justify-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-dark rounded-xl p-5 md:p-6 border border-gray-800 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group flex flex-col h-full"
              >
                {/* Category Header */}
                <div className="flex items-center mb-5">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors shrink-0">
                    <category.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold truncate">{category.title}</h3>
                    <div className="text-xs md:text-sm text-gray-400">
                      {category.title === 'Learning' ? 'Currently Exploring' : 'Proficient'}
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3 flex-1">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors truncate">
                          {skill.name}
                        </span>
                        <span className={`text-sm font-semibold ml-2 shrink-0 ${
                          category.title === 'Learning' ? 'text-yellow-400' : 'text-primary'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.05,
                            ease: "easeOut"
                          }}
                          className={`h-full rounded-full ${
                            category.title === 'Learning' 
                              ? 'bg-linear-to-r from-yellow-500 to-yellow-300'
                              : 'bg-linear-to-r from-primary to-secondary'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Learning Badge */}
                {category.title === 'Learning' && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-300 rounded-full">
                      Learning
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Summary - Centered */}
        <div className="flex justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-linear-to-r from-dark to-dark-secondary rounded-2xl p-6 md:p-8 border border-gray-800 w-full max-w-4xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">MERN</div>
                <div className="text-gray-400 text-sm md:text-base">Specialization</div>
                <p className="text-xs md:text-sm text-gray-500 mt-2 px-2">
                  Focused on mastering the complete MERN stack ecosystem
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">10+</div>
                <div className="text-gray-400 text-sm md:text-base">Projects Built</div>
                <p className="text-xs md:text-sm text-gray-500 mt-2 px-2">
                  Hands-on experience with real-world applications
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Growing</div>
                <div className="text-gray-400 text-sm md:text-base">Daily Progress</div>
                <p className="text-xs md:text-sm text-gray-500 mt-2 px-2">
                  Continuously learning and improving skills
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Learning Focus - Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
            <Cpu className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm text-gray-300">
              Currently focusing on: <span className="text-primary font-semibold">TypeScript & Next.js</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills