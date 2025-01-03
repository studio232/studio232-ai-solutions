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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <item.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};