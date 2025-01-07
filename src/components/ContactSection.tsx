import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

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
            Fill out the form below and discover how our custom AI solutions can propel your business forward.
          </p>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};