import { motion } from "framer-motion";
import { Users, Search, Code, Cog, GraduationCap, HeartHandshake } from "lucide-react";

const processSteps = [
  {
    icon: Users,
    title: "Consultation",
    description: "We begin by understanding your business goals, challenges, and opportunities for AI integration.",
  },
  {
    icon: Search,
    title: "Needs Assessment & ROI Analysis",
    description: "Identify and prioritize challenges based on potential impact and return on investment.",
  },
  {
    icon: Code,
    title: "Solution Development",
    description: "Design and develop custom AI solutions tailored to your unique requirements.",
  },
  {
    icon: Cog,
    title: "Implementation",
    description: "Seamlessly integrate AI technologies into your existing systems and workflows.",
  },
  {
    icon: GraduationCap,
    title: "Training & Onboarding",
    description: "Provide comprehensive training to ensure your team can effectively utilize new AI tools.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support & Optimization",
    description: "Offer continuous support and refine solutions to adapt to your evolving business needs.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
        >
          Our Process
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};