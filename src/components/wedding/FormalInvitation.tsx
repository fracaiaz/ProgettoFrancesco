import { motion } from "framer-motion";
import { Paperclip } from "lucide-react";

const FormalInvitation = () => {
  return (
    <section className="pt-20 pb-10 px-6 paper-texture">
      <motion.div
        className="max-w-lg mx-auto relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Invitation card */}
        <div className="bg-card border border-border rounded-sm shadow-card p-6 xs:p-8 md:p-12 text-center">
          {/* Decorative top border */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <span className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <motion.div
            className="my-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-sm tracking-[0.2em] text-sage uppercase mb-3 font-sans text-center">
              Abbiamo l'onore di invitarti al matrimonio di
            </p>
            <div
              className="font-serif text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground px-2 flex justify-center items-center"
              style={{ gap: '0.2em' }}
            >
              <span>Annamaria</span>
              <span className="text-gold text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl italic" style={{ alignSelf: 'flex-end' }}>&</span>
              <span>Agostino</span>
            </div>
          </motion.div>

          <motion.div
            className="space-y-1 text-muted-foreground font-sans text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <p>Lunedì 29 Giugno 2026</p>
            <p>Castellammare di Stabia (NA)</p>
          </motion.div>

          {/* Decorative bottom border */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <span className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FormalInvitation;
