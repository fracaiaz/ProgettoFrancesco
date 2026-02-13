import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Check } from "lucide-react";
import tastoRegalo from "@/assets/tasto_regalo.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const GiftsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      // La spunta resta finché non si chiude la modale o si copia altro
    } catch (err) {
      // fallback o errore
    }
  };

  return (
    <section className="pt-12 pb-6 px-6 paper-texture">
      <motion.div
        className="max-w-md mx-auto text-center"
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 0.6, layout: { duration: 0.5, ease: "easeInOut" } }}
      >
        <motion.div
          role="button"
          tabIndex={0}
          aria-expanded={showDetails}
          className="inline-block mb-6 cursor-pointer"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
          onClick={() => setShowDetails((v) => !v)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setShowDetails((v) => !v);
            }
          }}
        >
          <div className="w-48 h-48 rounded-full overflow-hidden relative">
            <img src={tastoRegalo} alt="Regalo" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <AnimatePresence>
            {!showDetails && (
              <motion.p
                className="text-muted-foreground font-sans mb-3 -mt-4"
                style={{ fontSize: '0.9rem' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.7, duration: 0.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                Clicca qui
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>


        <motion.div
          layout
          initial={false}
          animate={showDetails ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          style={{ overflow: 'hidden' }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], layout: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }}
        >
          <AnimatePresence initial={false} mode="wait">
            {showDetails && (
              <motion.div
                key="gifts-inner"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2
                  className="font-serif text-3xl md:text-4xl text-foreground mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Regali
                </motion.h2>

                <motion.div
                  className="bg-card border border-border rounded-lg p-8 shadow-paper mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Heart className="w-6 h-6 text-gold mx-auto mb-4" />
                  <p className="font-serif text-lg text-foreground mb-4 leading-relaxed">
                    La tua presenza è il regalo più grande che potremmo ricevere
                  </p>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    Tuttavia se desideri farci un regalo di seguito i dettagli
                  </p>
                  <motion.button
                    id="iban"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-3 px-8 py-4 mt-6 bg-foreground text-background font-sans text-sm tracking-wide rounded-sm shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Vedi il nostro IBAN</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <Dialog open={isModalOpen} onOpenChange={(open) => {
          setIsModalOpen(open);
          if (!open) setCopied(null);
        }}>
          <DialogContent className="sm:max-w-md w-[calc(100%-3rem)] mx-auto transition-all duration-1000 ease-out rounded-xl">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">I nostri dati bancari</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Puoi utilizzare questi dati per il bonifico
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">Intestatario</p>
                <button
                  className="text-base font-sans group flex items-center gap-2 hover:text-gold transition-colors"
                  style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  onClick={() => handleCopy('Agostino Camigliano', 'intestatario')}
                  title="Copia Intestatario"
                >
                  Agostino Camigliano
                  {copied === 'intestatario' ? <Check className="w-4 h-4 text-green-600" /> : null}
                </button>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">IBAN</p>
                <button
                  className="text-base font-mono break-all group flex items-center gap-2 hover:text-gold transition-colors"
                  style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  onClick={() => handleCopy('IT64F0306901765100000002823', 'iban')}
                  title="Copia IBAN"
                >
                  IT64F0306901765100000002823
                  {copied === 'iban' ? <Check className="w-4 h-4 text-green-600" /> : null}
                </button>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">Causale</p>
                <button
                  className="text-base font-sans group flex items-center gap-2 hover:text-gold transition-colors"
                  style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
                  onClick={() => handleCopy('Regalo matrimonio A&A', 'causale')}
                  title="Copia Causale"
                >
                  Regalo matrimonio A&A
                  {copied === 'causale' ? <Check className="w-4 h-4 text-green-600" /> : null}
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </section>
  );
};

export default GiftsSection;
