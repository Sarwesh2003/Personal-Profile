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
      bgColor: "bg-gold",
      achievements: [
        "Leading full-stack development initiatives with expertise in Java, Spring Boot, ReactJS, AngularJS, Oracle SQL, and Kubernetes",
        "Architected and delivered end-to-end system features for Foreign Exchange operations, driving innovation in financial technology",
        "Engineered database optimization tools and visualization utilities, significantly enhancing system performance and team productivity"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "JPMorgan Chase & Co.",
      period: "Jan 2024 - Jun 2024",
      location: "Mumbai, India",
      icon: GraduationCap,
      bgColor: "bg-navy",
      achievements: [
        "Led cross-functional collaboration to optimize system performance and enhance functionality across multiple teams",
        "Spearheaded development of visualization tools for settlement life-cycle, transforming team understanding and operational efficiency"
      ]
    },
    {
      title: "Summer Internship",
      company: "JPMorgan Chase & Co.",
      period: "Jun 2023 - Jul 2023",
      location: "Bengaluru, India",
      icon: Code,
      bgColor: "bg-charcoal",
      achievements: [
        "Led SoR team collaboration to architect innovative archival solution, dramatically improving system efficiency",
        "Designed and implemented high-performance REST API in Java Spring Boot, solving complex data optimization challenges",
        "Championed quality assurance by developing comprehensive unit tests, ensuring automation script reliability"
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
                <div className={`hidden lg:flex w-16 h-16 ${exp.bgColor} rounded-full items-center justify-center relative z-10 mr-8`}>
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
