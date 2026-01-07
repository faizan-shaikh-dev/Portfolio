import { motion } from "framer-motion";
import { BookOpen, Target, Rocket, GraduationCap } from "lucide-react";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stats = [
    { icon: BookOpen, value: "10+", label: "Projects Built" },
    { icon: Target, value: "100%", label: "Learning Focus" },
    { icon: GraduationCap, value: "Fresh", label: "Recent Graduate" },
    { icon: Rocket, value: "Growing", label: "Daily Progress" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="relative mb-12">
              <div className="w-full h-80 md:h-96 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <img className="" src="/about.img.jpeg" alt="profile" />
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-accent to-primary rounded-2xl border-4 border-dark"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl font-bold">💻</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-dark-secondary rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                ABOUT ME
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Fresh & <span className="text-primary">Passionate</span>{" "}
                Developer
              </h2>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-lg mb-8"
            >
              As a recent graduate, I'm diving deep into the MERN stack with
              enthusiasm and dedication. I believe in learning through building,
              which is why I spend most of my time creating real-world projects
              and solving practical problems.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-lg mb-8"
            >
              I'm currently focused on mastering React, Node.js, Express, and
              MongoDB to build full-stack applications. Every day brings new
              learning opportunities, and I'm excited to grow my skills in this
              dynamic field.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4 mb-8">
              {[
                "Strong foundation in JavaScript & React.js",
                "Experience with Node.js and Express.js",
                "Proficient in MongoDB database design",
                "Building RESTful APIs and full-stack applications",
                "Continuous learner with passion for new technologies",
                "Focusing on clean code and best practices",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-linear-to-r from-primary to-secondary rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Let's Build Together
                <span className="ml-2">→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
