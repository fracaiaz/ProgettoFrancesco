import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <motion.div
        className="max-w-md mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="h-px w-8 bg-border" />
          <Heart className="w-4 h-4 text-gold" />
          <span className="h-px w-8 bg-border" />
        </div>

        <p className="font-serif text-2xl text-foreground mb-2">
          Annamaria 
          <span className="text-gold"> & </span>Agostino
        </p>
        <p className="font-sans text-sm text-muted-foreground">
          29 Giugno 2026
        </p>

        <p className="mt-3 text-xs text-muted-foreground/60 font-sans">
          Made with love
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
