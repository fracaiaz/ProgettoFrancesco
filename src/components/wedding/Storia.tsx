import { motion } from "framer-motion";
import { AlignCenter } from "lucide-react";
import sfondoStoria from "@/assets/sfondo_storia.jpeg";

const Storia = () => {
    return (
        <section className="py-20 px-6 paper-texture relative overflow-hidden -mt-2">
            {/* Immagine di sfondo con dissolvenza */}
            <div className="absolute inset-0 pointer-events-none">
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${sfondoStoria})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                {/* Dissolvenza superiore */}
                <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[hsl(38_28%_94%)] via-[hsl(38_28%_94%/0.5)] to-transparent z-10"></div>
                {/* Dissolvenza inferiore */}
                <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[hsl(38_28%_94%)] via-[hsl(38_28%_94%/0.5)] to-transparent z-10"></div>
            </div>

            <motion.div
                className="max-w-3xl mx-auto relative z-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                transition={{ duration: 0.7 }}
            >
                {/* Contenuto storia */}
                <div>
                    <motion.div
                        className="bg-card border border-border rounded-sm shadow-card md:p-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <div className='p-8' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '-3.5em' }}>
                            <span className="text-6xl md:text-7xl text-foreground" style={{ fontFamily: 'Silenter, serif' }}>
                                La nostra
                            </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className="text-3xl md:text-4xl text-gold font-serif mb-4">STORIA</span>
                        </div>

                        <div className="space-y-6 text-foreground/80 font-serif" style={{ alignItems: 'center', justifyContent: 'center', padding: '1.5em' }}>
                            <p className="text-center">Ci siamo fidanzati il <b>15 gennaio 2013</b>.<br/>                         
                            Eravamo due ragazzi: 15 e 18 anni, due cuori giovani e un po' incoscienti, come si è solo a quell'età.</p>
                            <p className="text-center">È stato un <b>colpo di fulmine</b>: l'incontro di due anime che, senza saperlo, si stavano già cercando.</p>
                            <p className="text-center">Non avevamo ancora la patente, eppure ci sembrava di avere il mondo in tasca. Camminavamo ovunque, perdendoci e ritrovandoci tra le strade di Brescia. Cinema su cinema, risate leggere, felicità fatta di piccole cose. Ed è stato bellissimo scoprire la vita insieme, un'esperienza nuova alla volta.</p>
                            <p className="text-center">Poi sono arrivati i cambiamenti: città diverse, nuove abitudini, nuovi inizi. Fino a quando la parola "<b>noi</b>" è diventata casa.</p>
                            <p className="text-center">La nostra prima convivenza è stata a <b>Reggio Emilia</b>. È successo tutto con una naturalezza sorprendente: abbiamo incontrato persone meravigliose e siamo cresciuti tanto, come coppia e come individui.</p>
                            <p className="text-center">E il nostro tour d'Italia è continuato — e forse continuerà ancora: <b>Cosenza, Ancona, Vercelli, Foggia, Potenza</b>… In ogni luogo abbiamo lasciato un pezzettino di cuore, e raccolto amicizie vere. Amicizie che oggi siamo felici di avere accanto nel giorno più importante: <b>il nostro matrimonio</b>.</p>
                            <p className="text-center">La proposta è arrivata a <b>San Valentino 2025</b>.<br/> Il cielo era uggioso, di quelli che sembrano fatti apposta per custodire un segreto. Dopo cena a <b>Sorrento</b>, siamo andati a passeggiare sul lungomare di <b>Castellammare</b>. Tra una chiacchiera e l'altra, Agostino sussurra:<br/> "<b>Ma tu sei sicura di voler trascorrere tutta la tua vita con me?</b>"</p>
                            <p className="text-center">Poi si inginocchia. Tira fuori l'anello. E in un istante il tempo si ferma: il cuore esplode, gli occhi si riempiono, la realtà sembra incredibile.</p>
                            <p className="text-center">La risposta, ovviamente, è stata: Sììììì! Tra lacrime, stupore e felicità pura.</p>
                            <p className="text-center">In questo cammino non sempre la strada è stata semplice. Ma non ci siamo mai lasciati la mano. Ci siamo sostenuti, scelti, rialzati. Perché con l'amore si supera tutto e in due la vita si affronta meglio: si divide il peso e si raddoppia la gioia.</p>
                            <p className="text-center">Auguriamo a tutti un amore come il nostro: puro e intenso. E a noi auguriamo di costruire una famiglia felice, circondata dal bene… e di esserci sempre, nonostante tutti i nonostante.</p>
                            <p className="text-center">GRAZIE</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div >
        </section >
    );
};

export default Storia;
