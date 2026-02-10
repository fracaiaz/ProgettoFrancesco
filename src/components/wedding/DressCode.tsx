import { motion } from "framer-motion";
// import abitoUomo from "@/assets/abito_uomo.png";
// import abitoDonna from "@/assets/abito_donna.png";

const DressCode = () => {
  return (
    <section className="py-12 px-6 paper-texture">
      <motion.div
        className="max-w-md mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-3 font-sans"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Dress code
        </motion.p>

        <motion.h2
          className="font-serif text-3xl md:text-4xl text-foreground mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Sea <span className="text-gold italic">&</span> Sand
        </motion.h2>

        {/* Dress code illustrations */}
        <motion.div
          id="div_dresscode"
          className="bg-card border border-border rounded-lg p-8 shadow-paper relative"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground font-sans">
            Lasciati ispirare dal mare e dalla sabbia
          </p>
          <div className="relative" style={{ minHeight: '200px' }}>
            {/* Suit icon */}
            <motion.div
              className="absolute flex flex-col items-center"
              style={{ left: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-36 h-44 mb-4 relative flex items-center justify-center bg-gray-100 border border-gray-300">
                <span className="text-gold text-6xl">👔</span>
              </div>
              <p className="text-sm font-sans text-muted-foreground">Uomini</p>
            </motion.div>

            {/* Divider */}
            <div 
              className="absolute h-32 w-[1px] bg-muted-foreground/30 top-1/2" 
              style={{ left: '50%', transform: 'translate(-50%, -50%)', minWidth: '1px' }} 
            />

            {/* Dress icon */}
            <motion.div
              className="text-center absolute"
              style={{ left: '55%'}}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="w-36 h-44 mb-4 relative flex items-center justify-center bg-gray-100 border border-gray-300">
                  <span className="text-gold text-6xl">👗</span>
                </div>
              <p className="text-sm font-sans text-muted-foreground">Donne</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DressCode;
