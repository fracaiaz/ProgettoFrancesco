import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import chiesaIcon from "@/assets/chiesa.webp";
import coppiaIcon from "@/assets/coppia.png";
import logo from "@/assets/logo.webp";
import hotelIcon from "@/assets/hotel.png";

const events = [
  {
    title: "Cerimonia",
    time: "17:00",
    location: "Santuario Madonna della Libera",
    address: "Madonna della Libera n°2 | C.mare di Stabia (NA)",
    mapsLink: "https://maps.app.goo.gl/DR7fF6fvaN1DESpm8",
    icon: (
      <div className="bg-inherit p-1 rounded-sm">
        <img
          src={chiesaIcon}
          alt="Chiesa"
          className="w-20 h-20 object-contain"
          style={{ opacity: 0.8 }}
        />
      </div>
    ),
  },
  {
    title: "Ricevimento",
    time: "19:00",
    location: "Il Bikini",
    address: "Strada statale sorrentina n°145 | C.mare di Stabia (NA)",
    mapsLink: "https://maps.app.goo.gl/26vpqCCW3tRsKDSM8",
    icon: <img src={coppiaIcon} alt="Ricevimento" className="w-36 h-36 object-contain" style={{ mixBlendMode: 'multiply' }} />,
  },
  {
    title: "Pernottamento",
    time: "24:00",
    address: "Gli sposi sono lieti di ospitare gli invitati per la notte del 29 giugno",
    customAction: {
      text: "Facci sapere se ci sei",
      link: "#conferma"
    },
    icon: (
      <div className="bg-inherit p-1 rounded-sm" style={{ marginTop: '-40px' }}>
        <img
          src={hotelIcon}
          alt="Hotel"
          className="w-36 h-36 object-contain mix-blend-darken"
          style={{ filter: 'contrast(1.1) brightness(1.05)', opacity: 0.8 }}
        />
      </div>
    ),
  },
];

const Itinerary = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden paper-texture">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Paper Card Container */}
        <motion.div
          className="relative bg-[#FDFBF7] rounded-[2px] pl-6 pr-8 py-8 pb-16 sm:pl-10 sm:pr-12 sm:py-12 sm:pb-20 md:pl-12 md:pr-16 md:py-16 md:pb-24 border border-stone-200/60"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px, inset 0 0 40px rgba(0,0,0,0.02)"
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {/* Header */}
          <div className="text-center mb-8 pb-8 border-b border-gold/20">
            <motion.h2
              className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] text-foreground mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              IL PROGRAMMA
            </motion.h2>
            <motion.p
              className="text-xs tracking-[0.2em] text-muted-foreground uppercase font-sans"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              29 Giugno 2026
            </motion.p>
          </div>

          {/* Events List */}
          <div className="space-y-10">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                className="flex gap-3 items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-24 flex items-center justify-center text-gold/70 self-start pt-1">
                  {event.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-serif text-xl sm:text-2xl text-foreground">
                      {event.title}
                    </h3>
                    <span className="text-base font-sans text-gold font-medium whitespace-nowrap ml-auto">
                      {event.time}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-foreground/90 font-sans mb-1">
                    {event.location}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-sans mb-3">
                    {event.address}
                  </p>

                  {event.mapsLink && (
                    <motion.a
                      href={event.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans text-gold border border-gold/30 hover:border-gold hover:bg-gold/5 transition-all px-4 py-2 rounded-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Vedi luogo</span>
                    </motion.a>
                  )}
                  {event.customAction && (
                    <motion.a
                      href={event.customAction.link}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans text-gold border border-gold/30 hover:border-gold hover:bg-gold/5 transition-all px-4 py-2 rounded-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{event.customAction.text}</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Logo */}
          <motion.div
            className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 pointer-events-none"
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 0.8, rotate: -15 }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-32 h-32 sm:w-40 sm:h-40 object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Itinerary;
