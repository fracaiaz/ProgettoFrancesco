import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ConfermaPartecipazione = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  return (
    <section className="py-20 px-6 paper-texture">
      <motion.div
        className="max-w-md mx-auto text-center"
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, layout: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }}
      >
        <motion.div
          className="bg-card border border-border rounded-lg p-5 shadow-paper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="border-[3px] border-gold rounded-xl p-6">
            <motion.h2
              className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] text-foreground mb-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              CONFERMA PARTECIPAZIONE
            </motion.h2>

            <div className="mb-6 text-left">
              <Label htmlFor="nome" className="font-sans text-sm text-muted-foreground mb-2 block">
                Il tuo nome
              </Label>
              <Textarea
                id="nome"
                className="resize-none bg-white border-2 border-stone-300 rounded-lg min-h-[40px] py-2"
                rows={1}
              />
            </div>

            <div className="mb-6 text-left">
              <Label className="font-sans text-sm text-muted-foreground mb-2 block">
                Potrai accompagnarci in questo grande giorno?
              </Label>
              <div className="space-y-3">
                <Textarea
                  placeholder="Sì, ci sarò!"
                  readOnly
                  className={`resize-none rounded-lg min-h-[40px] py-2 cursor-pointer bg-white ${selectedOption === 'si' ? 'bg-gold/20' : ''}`}
                  rows={1}
                  onClick={() => setSelectedOption('si')}
                />
                <Textarea
                  placeholder="Non potrò essere presente, ma vi porto nel mio cuore"
                  readOnly
                  className={`resize-none rounded-lg min-h-[60px] py-2 cursor-pointer bg-white ${selectedOption === 'no' ? 'bg-gold/20' : ''}`}
                  rows={2}
                  onClick={() => setSelectedOption('no')}
                />
              </div>
                {selectedOption === 'si' && (
                  <div className="mb-6 mt-4 text-left">
                    <Label className="font-sans text-sm text-muted-foreground mb-2 block">
                      Per quante persone confermi la partecipazione?
                    </Label>
                    <div className="flex gap-4">
                       <div className="flex-1">
                         <Label htmlFor="adulti" className="font-sans text-xs text-muted-foreground mb-1 block">Adulti</Label>
                         <input
                           id="adulti"
                           type="number"
                           min="0"
                           className="bg-white border-2 border-stone-300 rounded-lg min-h-[40px] py-2 px-2 w-full text-base font-sans"
                         />
                       </div>
                       <div className="flex-1">
                         <Label htmlFor="bambini" className="font-sans text-xs text-muted-foreground mb-1 block">Bambini</Label>
                         <input
                           id="bambini"
                           type="number"
                           min="0"
                           className="bg-white border-2 border-stone-300 rounded-lg min-h-[40px] py-2 px-2 w-full text-base font-sans"
                         />
                       </div>
                    </div>
                    <div className="mt-6">
                      <Label htmlFor="transfer" className="font-sans text-sm text-muted-foreground mb-2 block">È necessario un transfer?</Label>
                      <Textarea
                        id="transfer"
                        className="resize-none bg-white border-2 border-stone-300 rounded-lg min-h-[40px] py-2"
                        rows={1}
                      />
                    </div>
                    <div className="mt-6">
                      <Label htmlFor="intolleranze" className="font-sans text-sm text-muted-foreground mb-2 block">Vuoi indicare eventuali intolleranze?</Label>
                      <Textarea
                        id="intolleranze"
                        className="resize-none bg-white border-2 border-stone-300 rounded-lg min-h-[40px] py-2"
                        rows={1}
                      />
                    </div>
                  </div>
                )}
            </div>
            <Button
              size="lg"
              className="bg-sage hover:bg-sage/90 text-white font-sans tracking-wider py-6 text-base w-full max-w-full"
            >
              Invia la tua risposta
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ConfermaPartecipazione;
