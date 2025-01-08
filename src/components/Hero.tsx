import { motion } from "framer-motion";

export const Hero = () => {
  const handleGetStarted = () => {
    // Find and click the Chatbase widget button
    const chatButton = document.querySelector('.chatbase-bubble__button') as HTMLButtonElement;
    if (chatButton) {
      chatButton.click();
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-gradient-x" />
        <div className="absolute inset-0 bg-[linear-gradient(109.6deg,rgba(223,234,247,1)_11.2%,rgba(244,248,252,1)_91.1%)] opacity-30" />
      </div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your Business with Custom AI Solutions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-16 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We develop tailored AI technologies that drive growth, optimize processes, and solve your unique business challenges.
          </motion.p>
          <motion.button 
            className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};