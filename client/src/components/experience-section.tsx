import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer-I",
      company: "JPMorgan Chase & Co.",
      period: "Jul 2024 - Present",
      location: "Mumbai, India",
      icon: Briefcase,
      color: "gold",
      achievements: [
        "Working as Full Stack Application Developer with expertise in Java, Spring Boot, ReactJS, AngularJS, Oracle SQL, and Kubernetes",
        "Developed end-to-end system features for Foreign Exchange operations, contributing to settlement engine processing 700k+ daily transactions",
        "Engineered database optimization tools and visualization utilities to enhance system performance and team productivity"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "JPMorgan Chase & Co.",
      period: "Jan 2024 - Jun 2024",
      location: "Mumbai, India",
      icon: GraduationCap,
      color: "navy",
      achievements: [
        "Collaborated with cross-functional teams to optimize system performance and enhance functionality",
        "Built utility tools for visualizing settlement life-cycle, improving team understanding and operational efficiency"
      ]
    },
    {
      title: "Summer Internship",
      company: "JPMorgan Chase & Co.",
      period: "Jun 2023 - Jul 2023",
      location: "Bengaluru, India",
      icon: Code,
      color: "charcoal",
      achievements: [
        "Collaborated with SoR team to devise archival solution, reducing unnecessary log data and improving system efficiency",
        "Designed REST API in Java Spring Boot to optimize query performance and address duplicate records",
        "Developed comprehensive unit tests for automation scripts, ensuring reliability and accuracy"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-light-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold hidden lg:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-start"
              >
                <div className={`hidden lg:flex w-16 h-16 bg-${exp.color} rounded-full items-center justify-center relative z-10 mr-8`}>
                  <exp.icon className="text-white" size={24} />
                </div>
                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-navy">{exp.title}</h3>
                      <p className="text-gold font-medium">{exp.company}</p>
                    </div>
                    <div className="text-charcoal">
                      <p className="font-medium">{exp.period}</p>
                      <p className="text-sm">{exp.location}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-charcoal">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                        <p>{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
