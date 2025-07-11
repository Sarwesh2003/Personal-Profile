import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Education</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-navy to-blue-900 p-8 rounded-xl text-white shadow-lg"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="text-gold text-3xl mr-4" size={32} />
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
                <p className="text-blue-200">Vishwakarma Institute of Technology</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-blue-200">Major:</span>
                <span className="font-semibold">AI & Data Science</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">CGPA:</span>
                <span className="font-semibold text-gold">9.14</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">Duration:</span>
                <span className="font-semibold">Dec 2021 - May 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-200">Location:</span>
                <span className="font-semibold">Pune, India</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-700">
              <p className="text-sm text-blue-200">
                <strong>Key Coursework:</strong> Data Structures, Algorithms, Database Management, OOP, Computer Networks
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl text-white shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Award className="text-gold text-3xl mr-4" size={32} />
              <div>
                <h3 className="text-xl font-semibold">Diploma in Computer Technology</h3>
                <p className="text-gray-300">K. K. Wagh Polytechnic</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Specialization:</span>
                <span className="font-semibold">Computer Technology</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Percentage:</span>
                <span className="font-semibold text-gold">95.37%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Duration:</span>
                <span className="font-semibold">Jun 2018 - Aug 2021</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Location:</span>
                <span className="font-semibold">Nashik, India</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-300">
                <strong>Key Coursework:</strong> Data Structures, Software Development, Computer Networks, Mobile Development
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
