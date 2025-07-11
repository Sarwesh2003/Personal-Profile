import { motion } from "framer-motion";
import { Lightbulb, Trophy, MapPin, GraduationCap, Briefcase, Medal, FileText } from "lucide-react";

export default function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-navy">
              Passionate Software Engineer | Tech Enthusiast | Innovating for Positive Change
            </h3>
            
            <p className="text-lg text-charcoal leading-relaxed">
              I'm driven by technology's potential to transform lives. With a focus on innovative problem-solving, 
              I create solutions that make a positive impact on society. From building apps that serve millions to 
              leading international hackathon victories, I believe in the power of code to create meaningful change.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                {...fadeInUp}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <Lightbulb className="text-gold text-2xl mr-3" size={24} />
                  <h4 className="font-semibold text-navy">Innovative Solutions</h4>
                </div>
                <p className="text-charcoal">Creating impactful applications that serve millions of users worldwide</p>
              </motion.div>
              
              <motion.div
                {...fadeInUp}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <Trophy className="text-gold text-2xl mr-3" size={24} />
                  <h4 className="font-semibold text-navy">Proven Leadership</h4>
                </div>
                <p className="text-charcoal">Leading teams to victory in prestigious international competitions</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h4 className="text-xl font-semibold text-navy mb-6">Quick Facts</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-gold mr-3" size={20} />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="text-gold mr-3" size={20} />
                <span>B.Tech in AI & Data Science (CGPA: 9.14)</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="text-gold mr-3" size={20} />
                <span>Software Engineer-I at JPMorgan Chase</span>
              </div>
              <div className="flex items-center">
                <Medal className="text-gold mr-3" size={20} />
                <span>Gold Medal from Vice President of India</span>
              </div>
              <div className="flex items-center">
                <FileText className="text-gold mr-3" size={20} />
                <span>3 Published Research Papers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
