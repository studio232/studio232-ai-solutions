import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and discover how our custom AI solutions can propel your business forward.
          </p>
          <a
            href="mailto:contact@studio232.com"
            className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Get in Touch</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};