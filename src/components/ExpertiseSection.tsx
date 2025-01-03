import { motion } from "framer-motion";
import { Brain, TrendingUp, Zap, MessageSquare, FileText, Camera, Target } from "lucide-react";

const expertiseItems = [
  {
    icon: Brain,
    title: "Custom AI Development",
    description: "Designing AI solutions tailored to your specific business needs across various domains.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Leveraging data to forecast trends, optimize operations, and inform strategic decisions.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Implementing AI to automate routine tasks, increasing efficiency, and reducing operational costs.",
  },
  {
    icon: MessageSquare,
    title: "Intelligent Communication Tools",
    description: "Enhancing customer engagement through AI-powered voice agents and multichannel chatbots.",
  },
  {
    icon: FileText,
    title: "Natural Language Processing",
    description: "Extracting insights from text data to improve understanding and customer interactions.",
  },
  {
    icon: Camera,
    title: "Computer Vision",
    description: "Utilizing image and video analysis for quality control, security, and data extraction.",
  },
  {
    icon: Target,
    title: "AI in Marketing",
    description: "Personalizing marketing efforts through AI-driven customer segmentation and targeting.",
  },
];

export const ExpertiseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
        >
          Our Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};