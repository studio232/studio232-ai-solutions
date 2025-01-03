import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-start items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-primary font-semibold"
          >
            <Brain className="h-6 w-6" />
            <span>Studio 232</span>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};