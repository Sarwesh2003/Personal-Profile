import { motion } from "framer-motion";
import { ChevronDown, User } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-navy to-blue-900">
      <div className="absolute inset-0 bg-gradient-to-r from-navy/50 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Professional headshot placeholder */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 bg-gray-300 rounded-full flex items-center justify-center shadow-xl">
            <User size={60} className="text-gray-600" />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          Sarwesh Khairnar
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-blue-100 mb-6 font-medium"
        >
          Software Engineer-I @JPMorgan Chase & Co.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-blue-200 mb-8 max-w-3xl mx-auto"
        >
          UNESCO Hackathon Winner | Smart India Hackathon Champion | 
          Building Solutions that Impact 2+ Crore Lives
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-gold hover:bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            View My Work
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex justify-center space-x-6"
        >
          <a
            href="https://linkedin.com/in/sarweshkhairnar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gold transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sarwesh2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gold transition-colors text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:sarweshkhairnar@gmail.com"
            className="text-white hover:text-gold transition-colors text-2xl"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={32} className="text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
