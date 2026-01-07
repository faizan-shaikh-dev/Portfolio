import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@example.com',
      link: 'mailto:hello@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (123) 456-7890',
      link: 'tel:+11234567890'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    }
  ]

  return (
    <section className="py-20 bg-dark-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            CONTACT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center p-6 bg-dark rounded-xl border border-gray-800 hover:border-primary/30 transition-all group"
              >
                <div className="p-4 bg-primary/10 rounded-lg mr-6 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">{info.title}</div>
                  <div className="text-lg font-semibold">{info.value}</div>
                </div>
              </motion.a>
            ))}
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-dark rounded-xl border border-gray-800"
            >
              <h3 className="text-xl font-bold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 bg-dark-secondary rounded-lg hover:bg-primary transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-gray-800 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-gray-800 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark border border-gray-800 rounded-lg focus:border-primary focus:outline-none transition-colors"
                placeholder="Project discussion"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-dark border border-gray-800 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-linear-to-r from-primary to-secondary rounded-lg font-semibold text-lg flex items-center justify-center disabled:opacity-50"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send className="ml-2" size={20} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact