import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import mainLogo from "@/assets/main_logo.webp";

const Footer = () => {
  return (
    <footer className="pt-3 pb-12 px-6 border-t border-border">
      <motion.div
        className="max-w-md mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-2">
          <img
            src={mainLogo}
            alt="Annamaria & Agostino"
            className="w-64 h-auto mx-auto object-contain"
          />
        </div>

        {/* <p className="font-serif text-2xl text-foreground mb-2">
          Annamaria
          <span className="text-gold"> & </span>Agostino
        </p> */}
        <p className="font-sans text-sm text-muted-foreground -mt-4">
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
