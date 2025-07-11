import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Sarwesh Khairnar</h3>
          <p className="text-blue-200 mb-6">Building innovative solutions for a better tomorrow</p>
          <div className="flex justify-center space-x-6 mb-8">
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
          </div>
          <div className="border-t border-blue-800 pt-8">
            <p className="text-blue-200 text-sm">
              © 2024 Sarwesh Khairnar. All rights reserved. | Designed & Developed with ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
