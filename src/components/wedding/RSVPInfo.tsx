import { motion } from "framer-motion";
import { User, Users, Baby } from "lucide-react";

interface RSVPInfoProps {
  guestName?: string;
  adultSpots?: number;
  childSpots?: number;
}

const RSVPInfo = ({ 
  guestName = "Filippo Fattoruso", 
  adultSpots = 2, 
  childSpots = 2 
}: RSVPInfoProps) => {
  return (
    <section className="py-16 px-6">
      <motion.div
        className="max-w-md mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-block mb-6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center">
            <User className="w-8 h-8 text-secondary-foreground" />
          </div>
        </motion.div>

        <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-3 font-sans">
          Invito personalizzato per
        </p>

        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
          {guestName}
        </h2>

        <motion.div
          className="bg-card border border-border rounded-lg p-6 shadow-paper"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="font-sans text-foreground leading-relaxed">
            Abbiamo riservato
          </p>
          
          <div className="flex items-center justify-center gap-8 my-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-sage" />
                <span className="font-serif text-3xl text-gold">{adultSpots}</span>
              </div>
              <p className="text-sm text-muted-foreground font-sans">
                post{adultSpots !== 1 ? 'i' : 'o'} per adulti
              </p>
            </div>

            <div className="h-12 w-px bg-border" />

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Baby className="w-5 h-5 text-sage" />
                <span className="font-serif text-3xl text-gold">{childSpots}</span>
              </div>
              <p className="text-sm text-muted-foreground font-sans">
                post{childSpots !== 1 ? 'i' : 'o'} per bambini
              </p>
            </div>
          </div>

          <p className="font-sans text-muted-foreground text-sm">
            specialmente per te
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RSVPInfo;
