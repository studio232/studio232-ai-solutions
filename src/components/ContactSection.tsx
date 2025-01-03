import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(60deg,#abecd6_0%,#fbed96_100%)] opacity-10" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-12 opacity-90">
            Contact us today for a free consultation and discover how our custom AI solutions can propel your business forward.
          </p>
          <motion.a
            href="mailto:contact@studio232.com"
            className="inline-flex items-center space-x-3 bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6" />
            <span>Get in Touch</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};