import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with cart, payments, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'bg-linear-to-br from-primary/20 to-secondary/20',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and drag & drop.',
      tags: ['Next.js', 'TypeScript', 'Socket.io', 'Tailwind'],
      image: 'bg-linear-to-br from-secondary/20 to-accent/20',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with maps and forecasting features.',
      tags: ['Vue.js', 'Chart.js', 'API', 'PWA'],
      image: 'bg-linear-to-br from-accent/20 to-primary/20',
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness app with workout plans and progress tracking.',
      tags: ['React Native', 'Firebase', 'Redux', 'GraphQL'],
      image: 'bg-linear-to-br from-primary/20 to-accent/20',
      liveLink: '#',
      githubLink: '#'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              className="group bg-dark rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/30 transition-all"
            >
              {/* Project Image */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl opacity-30">
                    {['🛒', '📋', '☀️', '💪'][index]}
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-dark via-transparent to-transparent opacity-60" />
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.liveLink}
                    className="p-2 bg-dark rounded-lg hover:bg-primary transition-colors"
                    aria-label="View live demo"
                  >
                    <Eye size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubLink}
                    className="p-2 bg-dark rounded-lg hover:bg-primary transition-colors"
                    aria-label="View source code"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dark-secondary text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.liveLink}
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors"
                >
                  View Project
                  <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects