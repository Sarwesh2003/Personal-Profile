import { motion } from "framer-motion";
import { Code, Settings, Users, Lightbulb, MessageSquare, Handshake, Crown, Brain } from "lucide-react";
import { FaLeaf, FaReact, FaAndroid, FaDatabase, FaGitAlt, FaDocker } from "react-icons/fa";

export default function SkillsSection() {
  const programmingSkills = [
    { name: "Java", level: 85, proficiency: "Proficient" },
    { name: "Python", level: 75, proficiency: "Intermediate" },
    { name: "SQL", level: 70, proficiency: "Intermediate" },
    { name: "JavaScript", level: 60, proficiency: "Beginner" }
  ];

  const frameworks = [
    { name: "Spring Boot", icon: FaLeaf, color: "text-green-600" },
    { name: "React JS", icon: FaReact, color: "text-blue-600" },
    { name: "Android SDK", icon: FaAndroid, color: "text-green-600" },
    { name: "Firebase", icon: FaDatabase, color: "text-blue-600" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    { name: "Docker", icon: FaDocker, color: "text-blue-600" }
  ];

  const softSkills = [
    { name: "Innovative Thinking", icon: Lightbulb },
    { name: "Communication", icon: MessageSquare },
    { name: "Collaboration", icon: Handshake },
    { name: "Leadership", icon: Crown },
    { name: "Learning Agility", icon: Brain }
  ];

  return (
    <section id="skills" className="py-20 bg-light-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-navy mb-6 flex items-center">
              <Code className="text-gold mr-3" size={24} />
              Programming Languages
            </h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-charcoal">{skill.name}</span>
                    <span className="text-sm text-charcoal">{skill.proficiency}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-navy h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Frameworks & Tools */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-navy mb-6 flex items-center">
              <Settings className="text-gold mr-3" size={24} />
              Frameworks & Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {frameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <framework.icon className={`${framework.color} text-2xl mb-2 mx-auto`} />
                  <p className="font-medium text-charcoal">{framework.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-navy mb-6 flex items-center">
            <Users className="text-gold mr-3" size={24} />
            Soft Skills & Leadership
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gradient-to-br from-navy to-blue-900 text-white rounded-lg min-w-0"
              >
                <skill.icon className="text-gold text-2xl mb-2 mx-auto" size={24} />
                <p className="font-medium text-sm break-words">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
