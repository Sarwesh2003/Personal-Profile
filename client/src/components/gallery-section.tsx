import { motion } from "framer-motion";
import { Camera, Award, Trophy, Users } from "lucide-react";
import hackathonWinPhoto from "@assets/20221125_132738_1752313440174.jpg";
import professionalPhoto from "@assets/DSC_1213_1752313440174.jpg";

export default function GallerySection() {
  const galleryItems = [
    {
      id: 1,
      image: hackathonWinPhoto,
      title: "UNESCO India Africa Hackathon Winner",
      description: "Winning the UNESCO India Africa Hackathon 2022 with Team SOIL HEALTH, securing Rs. 3,00,000 prize money",
      category: "Achievement",
      icon: Trophy,
      date: "November 2022"
    },
    {
      id: 2,
      image: professionalPhoto,
      title: "Professional Achievement",
      description: "Celebrating achievements in technology and innovation with recognition medals and awards",
      category: "Professional",
      icon: Award,
      date: "2023"
    }
  ];

  const categories = ["All", "Achievement", "Professional"];

  return (
    <section id="gallery" className="py-20 bg-light-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Moments that define the journey - from hackathon victories to professional milestones
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-4 bg-white rounded-full p-2 shadow-md">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-navy text-white hover:bg-gold"
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="text-white" size={48} />
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center bg-white bg-opacity-90 rounded-full px-3 py-1">
                    <item.icon className="text-navy mr-2" size={16} />
                    <span className="text-sm font-medium text-navy">{item.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-charcoal mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gold font-medium">{item.date}</span>
                  <div className="flex items-center text-charcoal">
                    <Users className="mr-1" size={14} />
                    <span className="text-sm">Achievement</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}