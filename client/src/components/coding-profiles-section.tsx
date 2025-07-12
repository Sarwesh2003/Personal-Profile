import { motion } from "framer-motion";
import { Code, Trophy, Target, TrendingUp, Star, Award } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";

export default function CodingProfilesSection() {
  const profiles = [
    {
      platform: "LeetCode",
      username: "int32",
      url: "https://leetcode.com/u/int32/",
      icon: SiLeetcode,
      iconColor: "text-orange-500",
      bgColor: "from-orange-50 to-orange-100",
      stats: [
        { label: "Problems Solved", value: "544/3611", icon: Target },
        { label: "Contest Rating", value: "1,603", icon: Trophy },
        { label: "Global Ranking", value: "160,345", icon: TrendingUp },
        { label: "Acceptance Rate", value: "56.77%", icon: Star }
      ]
    },
    {
      platform: "GeeksforGeeks",
      username: "sarweshkhairnar",
      url: "https://www.geeksforgeeks.org/user/sarweshkhairnar/",
      icon: SiGeeksforgeeks,
      iconColor: "text-green-600",
      bgColor: "from-green-50 to-green-100",
      stats: [
        { label: "Articles", value: "Multiple", icon: Code },
        { label: "Problems Solved", value: "Active", icon: Target },
        { label: "Community", value: "Contributor", icon: Award },
        { label: "Languages", value: "Java, Python", icon: Star }
      ]
    },
    {
      platform: "Code360",
      username: "int32",
      url: "https://www.naukri.com/code360/profile/int32",
      icon: Code,
      iconColor: "text-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      stats: [
        { label: "Profile", value: "Active", icon: Target },
        { label: "Practice", value: "Regular", icon: Trophy },
        { label: "Skills", value: "DSA Focus", icon: Star },
        { label: "Progress", value: "Growing", icon: TrendingUp }
      ]
    },
    {
      platform: "CodeChef",
      username: "sarwesh2003",
      url: "https://www.codechef.com/users/sarwesh2003",
      icon: SiCodechef,
      iconColor: "text-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100",
      stats: [
        { label: "Contests", value: "Participated", icon: Trophy },
        { label: "Rating", value: "Competitive", icon: TrendingUp },
        { label: "Problems", value: "Solved", icon: Target },
        { label: "Community", value: "Active", icon: Award }
      ]
    }
  ];

  return (
    <section id="coding-profiles" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Coding Profiles</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Track my coding journey across different platforms - from competitive programming to problem solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${profile.bgColor} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
                <div className="flex items-center min-w-0 flex-1">
                  <profile.icon className={`${profile.iconColor} mr-3 flex-shrink-0`} size={32} />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold text-navy truncate">{profile.platform}</h3>
                    <p className="text-charcoal text-sm truncate">@{profile.username}</p>
                  </div>
                </div>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-navy px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg text-center sm:text-left flex-shrink-0 w-full sm:w-auto"
                >
                  View Profile
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {profile.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="text-gold mr-1" size={16} />
                      <span className="text-sm font-medium text-navy">{stat.value}</span>
                    </div>
                    <p className="text-xs text-charcoal">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}