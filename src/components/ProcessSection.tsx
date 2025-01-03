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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <step.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};