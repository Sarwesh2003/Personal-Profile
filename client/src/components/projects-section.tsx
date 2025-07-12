import { motion } from "framer-motion";
import { Smartphone, Leaf, Shield, Users, Percent, TrendingUp, Trophy, Copyright, MapPin, Mouse } from "lucide-react";
import { FaGithub, FaFirefox } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      title: "DISHA",
      subtitle: "Facility Locator for Disabled",
      description: "Android app providing disabled-friendly facility information across India.",
      icon: Smartphone,
      bgColor: "from-blue-50 to-indigo-100",
      iconBg: "bg-navy",
      metric: "2+ Crore",
      metricLabel: "People Impacted",
      metricIcon: Users,
      technologies: ["Android", "Java", "Firebase"],
      techColor: "bg-navy",
      achievement: "SIH'22 Winner",
      achievementIcon: Trophy,
      link: "#",
      linkIcon: FaGithub
    },
    {
      title: "eTaka",
      subtitle: "Soil Fertility Predictor",
      description: "ML-powered system predicting soil nutrients with crop recommendations.",
      icon: Leaf,
      bgColor: "from-green-50 to-emerald-100",
      iconBg: "bg-green-600",
      metric: "97.5%",
      metricLabel: "Accuracy",
      metricIcon: Percent,
      technologies: ["Python", "ML", "Android"],
      techColor: "bg-green-600",
      achievement: "Copyrighted",
      achievementIcon: Copyright,
      link: "#",
      linkIcon: FaGithub
    },
    {
      title: "Phish-Shield",
      subtitle: "Cyber-Security Solution",
      description: "Multi-platform solution protecting users from fraudulent websites.",
      icon: Shield,
      bgColor: "from-red-50 to-orange-100",
      iconBg: "bg-red-600",
      metric: "87%",
      metricLabel: "Detection Rate",
      metricIcon: TrendingUp,
      technologies: ["Python", "Flask", "ML"],
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${project.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 ${project.iconBg} rounded-lg flex items-center justify-center mr-3`}>
                  <project.icon className="text-white" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-navy truncate">{project.title}</h3>
                  <p className="text-xs text-charcoal truncate">{project.subtitle}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <project.metricIcon className="text-gold mr-2" size={16} />
                  <span className="text-xl font-bold text-navy">{project.metric}</span>
                </div>
                <p className="text-xs text-charcoal">{project.metricLabel}</p>
              </div>
              
              <p className="text-charcoal text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className={`px-2 py-1 ${project.techColor} text-white text-xs rounded-full`}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center min-w-0 flex-1">
                  <project.achievementIcon className="text-gold mr-2 flex-shrink-0" size={14} />
                  <span className="text-xs font-medium text-navy truncate">{project.achievement}</span>
                </div>
                <a href={project.link} className="text-gold hover:text-yellow-600 transition-colors ml-2">
                  <project.linkIcon size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
