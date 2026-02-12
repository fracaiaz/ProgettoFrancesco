import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ConfermaPartecipazione = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [adulti, setAdulti] = useState<string>("");
  const [bambini, setBambini] = useState<string>("");
  const [transfer, setTransfer] = useState("");
  const [intolleranze, setIntolleranze] = useState("");
  const [pernottamento, setPernottamento] = useState<string | null>(null);
  const [servizioExtra, setServizioExtra] = useState<string | null>(null);

  // Inserisci qui il numero di telefono in formato internazionale (es: 393331234567)
  const numeroWhatsApp = "393666706480";

  const handleInviaRisposta = () => {
    if (!nome.trim()) {
      alert("Inserisci il tuo nome");
      return;
    }

    if (!selectedOption) {
      alert("Seleziona se potrai partecipare");
      return;
    }

    let messaggio = "CONFERMA PARTECIPAZIONE MATRIMONIO%0A%0A";
    messaggio += `Cari Agostino e Annamaria, sono ${encodeURIComponent(nome)}%0A`;

    if (selectedOption === 'si') {
      messaggio += 'Volevo dirvi che parteciperò al vostro matrimonio!%0A';

      const numAdulti = parseInt(adulti) || 0;
      const numBambini = parseInt(bambini) || 0;

      if (numAdulti > 1 && numBambini > 1) {
        messaggio += `Saremo in totale ${numAdulti} adulti e ${numBambini} bambini.%0A%0A`;
      } else if (numAdulti > 1 && numBambini == 1) {
        messaggio += `Saremo in totale ${numAdulti} adulti e 1 bambino.%0A%0A`;
      } else if (numAdulti == 1 && numBambini > 1) {
        messaggio += `Saremo in totale 1 adulto e ${numBambini} bambini.%0A%0A`;
      } else if (numAdulti > 1) {
        messaggio += `Saremo in totale ${numAdulti} adulti.%0A%0A`;
      } else {
        messaggio += "Per l'occasione sarò da solo.%0A%0A";
      }

      if (intolleranze.trim() || transfer.trim()) {
        messaggio += "Volevo comunicarvi anche le seguenti informazioni:%0A";
        if (transfer.trim()) {
          messaggio += `- per quanto riguarda la necessità di un transfer: ${encodeURIComponent(transfer)}%0A`;
        }
        if (intolleranze.trim()) {
          messaggio += `- per quanto riguarda eventuali intolleranze alimentari: ${encodeURIComponent(intolleranze)}%0A`;
        }
      }


      if (!pernottamento || pernottamento === "no") {
        messaggio += "%0APer quanto riguarda invece il pernottamento, non ne avrò bisogno.%0A";
      } else if (pernottamento === "si") {
        messaggio += "%0APer quanto riguarda invece il pernottamento ti comunico di averne bisogno";
        if (servizioExtra === "estetista") {
          messaggio += ` e di necessitare di una estetista.%0A`;
        } else if (servizioExtra === "parrucchiera") {
          messaggio += ` e di necessitare di una parrucchiera.%0A`;
        } else if (servizioExtra === "entrambe") {
          messaggio += ` e di necessitare sia di una estetista che della parrucchiera.%0A`;
        } else {
          messaggio += "%0A";
        }
      }

    } else {
      messaggio += "Mi dispace informarvi che non potrò essere presente al vostro matrimonio, ma quel giorno vi porterò nel mio cuore. Vi auguro una giornata meravigliosa!";
    }

    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${messaggio}`;
    window.open(urlWhatsApp, '_blank');
  };


  return (
    <section className="pt-8 pb-20 px-6 paper-texture">
      <motion.div
        className="max-w-md mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="bg-card border border-border rounded-lg p-5 shadow-paper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="border-[3px] border-gold rounded-xl p-6">
            <motion.h2
              className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] text-foreground mb-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
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
                value={nome}
                onChange={(e) => setNome(e.target.value)}
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
                        value={adulti}
                        onChange={(e) => setAdulti(e.target.value)}
                        className="bg-white border-2 border-stone-300 rounded-lg min-h-[40px] py-2 px-2 w-full text-base font-sans"
                      />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="bambini" className="font-sans text-xs text-muted-foreground mb-1 block">Bambini</Label>
                      <input
                        id="bambini"
                        type="number"
                        min="0"
                        value={bambini}
                        onChange={(e) => setBambini(e.target.value)}
                        className="bg-white border-2 border-stone-300 rounded-lg min-h-[40px] py-2 px-2 w-full text-base font-sans"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Label htmlFor="transfer" className="font-sans text-sm text-muted-foreground mb-2 block">È necessario un transfer?</Label>
                    <Textarea
                      id="transfer"
                      value={transfer}
                      onChange={(e) => setTransfer(e.target.value)}
                      className="resize-none bg-white border-2 border-stone-300 rounded-lg min-h-[40px] py-2"
                      rows={1}
                    />
                  </div>
                  <div className="mt-6">
                    <Label htmlFor="intolleranze" className="font-sans text-sm text-muted-foreground mb-2 block">Vuoi indicare eventuali intolleranze?</Label>
                    <Textarea
                      id="intolleranze"
                      value={intolleranze}
                      onChange={(e) => setIntolleranze(e.target.value)}
                      className="resize-none bg-white border-2 border-stone-300 rounded-lg min-h-[40px] py-2"
                      rows={1}
                    />
                  </div>
                  <div className="mt-6">
                    <Label htmlFor="pernottamento" className="font-sans text-sm text-muted-foreground mb-2 block">Desideri usufruire del pernottamento il 29 sera?</Label>
                    <select
                      id="pernottamento"
                      value={pernottamento ?? ''}
                      onChange={(e) => {
                        const value = e.target.value || null;
                        setPernottamento(value);
                        if (value !== 'si') setServizioExtra(null);
                      }}
                      className="bg-white border-2 border-stone-300 rounded-lg min-h-[40px] py-2 px-2 w-full text-base font-sans"
                    >
                      <option className="font-sans text-muted-foreground" value=""></option>
                      <option className="font-sans text-muted-foreground" value="si">Sì</option>
                      <option className="font-sans text-muted-foreground" value="no">No</option>
                    </select>
                  </div>
                  {pernottamento === 'si' && (
                    <div className="mt-6">
                      <Label htmlFor="servizio-extra" className="font-sans text-sm text-muted-foreground mb-2 block">Necessiti di una estetista o di una parrucchiera?</Label>
                      <select
                        id="servizio-extra"
                        value={servizioExtra ?? ''}
                        onChange={(e) => setServizioExtra(e.target.value || null)}
                        className="bg-white border-2 border-stone-300 rounded-lg min-h-[40px] py-2 px-2 w-full text-base font-sans"
                      >
                        <option className="font-sans text-muted-foreground" value=""></option>
                        <option className="font-sans text-muted-foreground" value="estetista">Estetista</option>
                        <option className="font-sans text-muted-foreground" value="parrucchiera">Parrucchiera</option>
                        <option className="font-sans text-muted-foreground" value="entrambe">Entrambe</option>
                      </select>
                    </div>
                  )}
                </div>
              )}
            </div>
            <Button
              size="lg"
              onClick={handleInviaRisposta}
              className="bg-gold hover:bg-gold/90 text-white font-sans tracking-wider py-6 text-base w-full max-w-full"
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
