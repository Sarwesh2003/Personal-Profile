import { motion } from "framer-motion";
import { Smartphone, Leaf, Shield, Users, Percent, TrendingUp, Trophy, Copyright } from "lucide-react";
import { FaGithub, FaFirefox } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      title: "DISHA",
      subtitle: "Facility Locator for Disabled",
      description: "Android mobile app providing comprehensive disabled-friendly facility information, making accessibility easier for millions of individuals across India.",
      icon: Smartphone,
      bgColor: "from-blue-50 to-indigo-100",
      iconBg: "bg-navy",
      metric: "2+ Crore",
      metricLabel: "People Impacted",
      metricIcon: Users,
      technologies: ["Android", "Java", "Firebase", "Maps API"],
      techColor: "bg-navy",
      achievement: "SIH'22 Winner",
      achievementIcon: Trophy,
      link: "#",
      linkIcon: FaGithub
    },
    {
      title: "eTaka",
      subtitle: "Soil Fertility Predictor",
      description: "ML-powered system that predicts soil nutrients and fertility, providing crop recommendations to benefit India's agricultural community.",
      icon: Leaf,
      bgColor: "from-green-50 to-emerald-100",
      iconBg: "bg-green-600",
      metric: "97.5%",
      metricLabel: "Prediction Accuracy",
      metricIcon: Percent,
      technologies: ["Python", "Machine Learning", "Android", "Computer Vision"],
      techColor: "bg-green-600",
      achievement: "Copyrighted",
      achievementIcon: Copyright,
      link: "#",
      linkIcon: FaGithub
    },
    {
      title: "Phish-Shield",
      subtitle: "Cyber-Security Solution",
      description: "Multi-platform solution protecting users from fraudulent websites, featuring both mobile app and browser extension deployed on Mozilla Add-ons.",
      icon: Shield,
      bgColor: "from-red-50 to-orange-100",
      iconBg: "bg-red-600",
      metric: "87%",
      metricLabel: "Detection Accuracy",
      metricIcon: TrendingUp,
      technologies: ["Python", "Flask", "Web Scraping", "ML"],
      techColor: "bg-red-600",
      achievement: "Firefox Extension",
      achievementIcon: FaFirefox,
      link: "#",
      linkIcon: FaGithub
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Solutions that make a difference - from serving millions of users to advancing agricultural technology
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${project.bgColor} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${project.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                  <project.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy">{project.title}</h3>
                  <p className="text-sm text-charcoal">{project.subtitle}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <project.metricIcon className="text-gold mr-2" size={20} />
                  <span className="text-2xl font-bold text-navy">{project.metric}</span>
                </div>
                <p className="text-sm text-charcoal">{project.metricLabel}</p>
              </div>
              
              <p className="text-charcoal mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className={`px-3 py-1 ${project.techColor} text-white text-xs rounded-full`}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <project.achievementIcon className="text-gold mr-2" size={16} />
                  <span className="text-sm font-medium text-navy">{project.achievement}</span>
                </div>
                <a href={project.link} className="text-gold hover:text-yellow-600 transition-colors">
                  <project.linkIcon size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
