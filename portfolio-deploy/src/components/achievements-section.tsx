import { motion } from "framer-motion";
import { Medal, Globe, Trophy, GraduationCap, FileText, Code } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Gold Medal",
      subtitle: "Vice President & Education Minister of India",
      description: "Honored for exceptional win in UNESCO India-Africa International Hackathon",
      icon: Medal,
      bgColor: "from-gold to-yellow-600",
      iconBg: "bg-white",
      iconColor: "text-gold"
    },
    {
      title: "UNESCO Hackathon",
      subtitle: "International Winner",
      description: "Led team to victory representing India against 22 countries",
      icon: Globe,
      bgColor: "from-purple-600 to-purple-800",
      iconBg: "bg-white",
      iconColor: "text-purple-600"
    },
    {
      title: "Smart India Hackathon",
      subtitle: "National Winner",
      description: "Selected from 100+ submissions, outperformed 50+ national finalists",
      icon: Trophy,
      bgColor: "from-green-600 to-green-800",
      iconBg: "bg-white",
      iconColor: "text-green-600"
    },
    {
      title: "Best Outgoing Student",
      subtitle: "VIT AI & DS Department",
      description: "Recognized among 200+ peers for academic and leadership excellence",
      icon: GraduationCap,
      bgColor: "from-indigo-600 to-indigo-800",
      iconBg: "bg-white",
      iconColor: "text-indigo-600"
    },
    {
      title: "Research Publications",
      subtitle: "3 Scopus Journals",
      description: "Published impactful research in esteemed international journals",
      icon: FileText,
      bgColor: "from-teal-600 to-teal-800",
      iconBg: "bg-white",
      iconColor: "text-teal-600"
    },
    {
      title: "Code for Good",
      subtitle: "J.P. Morgan Selection",
      description: "Selected among 200+ applicants for prestigious coding competition",
      icon: Code,
      bgColor: "from-orange-600 to-orange-800",
      iconBg: "bg-white",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-navy to-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Achievements & Recognition</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Recognized globally for innovation, leadership, and technical excellence
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${achievement.bgColor} p-8 rounded-xl shadow-lg text-center`}
            >
              <div className={`w-16 h-16 ${achievement.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <achievement.icon className={achievement.iconColor} size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-yellow-100 text-sm mb-4">{achievement.subtitle}</p>
              <p className="text-white text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
