import { useState } from "react";
import { motion } from "framer-motion";
// import couplePolaroid from "@/assets/bikini.webp";
// import logo from "@/assets/logo.webp";

const InteractiveEnvelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-6 flex flex-col items-center justify-center min-h-[80vh]">
      <motion.p
        className="text-sm tracking-[0.2em] text-muted-foreground uppercase mb-8 text-center font-sans"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Tocca la busta per aprirla
      </motion.p>

      <motion.div
        className="relative cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Envelope container */}
        <div className="relative w-56 xs:w-64 sm:w-72 md:w-80 h-36 xs:h-40 sm:h-44 md:h-48">
          {/* Envelope back */}
          <div className="absolute inset-0 bg-ivory rounded-sm shadow-envelope border-2 border-[hsl(45,20%,75%)]" />
          
          {/* Diagonal fold lines for realism */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[hsl(45,15%,65%)] to-transparent opacity-30" style={{ transform: 'translateY(calc(50% - 0.5px))' }} />
              <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
                <line x1="0" y1="0" x2="100%" y2="50%" stroke="hsl(45,15%,65%)" strokeWidth="1" />
                <line x1="100%" y1="0" x2="0" y2="50%" stroke="hsl(45,15%,65%)" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Envelope bottom flap */}
          <div className="absolute bottom-0 left-0 right-0 h-24 xs:h-26 sm:h-28 md:h-32 bg-ivory rounded-b-sm border-t-2 border-[hsl(45,20%,70%)]" />

          {/* Envelope side flaps - left - responsive versions - ivory color */}
          <div className="absolute left-0 top-4 w-0 h-0 xs:hidden" style={{ borderTop: "68px solid transparent", borderBottom: "68px solid transparent", borderLeft: "112px solid hsl(45 30% 94%)", filter: "drop-shadow(0 0 1px rgba(0,0,0,0.2))" }} />
          <div className="absolute left-0 top-6 w-0 h-0 hidden xs:block sm:hidden" style={{ borderTop: "67px solid transparent", borderBottom: "67px solid transparent", borderLeft: "128px solid hsl(45 30% 94%)", filter: "drop-shadow(0 0 1px rgba(0,0,0,0.2))" }} />
          <div className="absolute left-0 top-7 w-0 h-0 hidden sm:block md:hidden" style={{ borderTop: "69px solid transparent", borderBottom: "69px solid transparent", borderLeft: "144px solid hsl(45 30% 94%)", filter: "drop-shadow(0 0 1px rgba(0,0,0,0.2))" }} />
          <div className="absolute left-0 top-8 w-0 h-0 hidden md:block" style={{ borderTop: "72px solid transparent", borderBottom: "72px solid transparent", borderLeft: "160px solid hsl(45 30% 94%)", filter: "drop-shadow(0 0 1px rgba(0,0,0,0.2))" }} />
          
          {/* Envelope side flaps - right - responsive versions - ivory color */}
          <div className="absolute right-0 top-4 w-0 h-0 xs:hidden" style={{ borderTop: "68px solid transparent", borderBottom: "68px solid transparent", borderRight: "112px solid hsl(45 30% 94%)", filter: "drop-shadow(0 0 1px rgba(0,0,0,0.2))" }} />
          <div className="absolute right-0 top-6 w-0 h-0 hidden xs:block sm:hidden" style={{ borderTop: "67px solid transparent", borderBottom: "67px solid transparent", borderRight: "128px solid hsl(45 30% 94%)", filter: "drop-shadow(0 0 1px rgba(0,0,0,0.2))" }} />
          <div className="absolute right-0 top-7 w-0 h-0 hidden sm:block md:hidden" style={{ borderTop: "69px solid transparent", borderBottom: "69px solid transparent", borderRight: "144px solid hsl(45 30% 94%)", filter: "drop-shadow(0 0 1px rgba(0,0,0,0.2))" }} />
          <div className="absolute right-0 top-8 w-0 h-0 hidden md:block" style={{ borderTop: "72px solid transparent", borderBottom: "72px solid transparent", borderRight: "160px solid hsl(45 30% 94%)", filter: "drop-shadow(0 0 1px rgba(0,0,0,0.2))" }} />

          {/* Polaroid - TEMPORANEAMENTE COMMENTATO */}
          {/* <motion.div>...</motion.div> */}

          {/* Inner triangle (lighter) - visible when envelope opens */}
          <div className="absolute -top-1 left-0 right-0 z-5">
            {/* Default (mobile) - w-56 = 224px */}
            <div className="w-0 h-0 mx-auto xs:hidden" style={{ borderLeft: "112px solid transparent", borderRight: "112px solid transparent", borderTop: "80px solid hsl(45 35% 96%)" }} />
            {/* xs breakpoint - w-64 = 256px */}
            <div className="w-0 h-0 mx-auto hidden xs:block sm:hidden" style={{ borderLeft: "128px solid transparent", borderRight: "128px solid transparent", borderTop: "90px solid hsl(45 35% 96%)" }} />
            {/* sm breakpoint - w-72 = 288px */}
            <div className="w-0 h-0 mx-auto hidden sm:block md:hidden" style={{ borderLeft: "144px solid transparent", borderRight: "144px solid transparent", borderTop: "100px solid hsl(45 35% 96%)" }} />
            {/* md breakpoint - w-80 = 320px */}
            <div className="w-0 h-0 mx-auto hidden md:block" style={{ borderLeft: "160px solid transparent", borderRight: "160px solid transparent", borderTop: "110px solid hsl(45 35% 96%)" }} />
          </div>

          {/* Envelope top flap - responsive versions - covers photo when closed */}
          <motion.div
            className="absolute -top-1 left-0 right-0 origin-top z-30"
            animate={{ 
              rotateX: isOpen ? 180 : 0,
            }}
            transition={{ 
              duration: 1, 
              ease: "easeInOut",
              delay: isOpen ? 0 : 0.5
            }}
            style={{ 
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {/* Default (mobile) - w-56 = 224px */}
            <div className="w-0 h-0 mx-auto xs:hidden" style={{ borderLeft: "112px solid transparent", borderRight: "112px solid transparent", borderTop: "80px solid hsl(45 30% 94%)", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15)) drop-shadow(0 0 1px rgba(0,0,0,0.3))" }} />
            {/* xs breakpoint - w-64 = 256px */}
            <div className="w-0 h-0 mx-auto hidden xs:block sm:hidden" style={{ borderLeft: "128px solid transparent", borderRight: "128px solid transparent", borderTop: "90px solid hsl(45 30% 94%)", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15)) drop-shadow(0 0 1px rgba(0,0,0,0.3))" }} />
            {/* sm breakpoint - w-72 = 288px */}
            <div className="w-0 h-0 mx-auto hidden sm:block md:hidden" style={{ borderLeft: "144px solid transparent", borderRight: "144px solid transparent", borderTop: "100px solid hsl(45 30% 94%)", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15)) drop-shadow(0 0 1px rgba(0,0,0,0.3))" }} />
            {/* md breakpoint - w-80 = 320px */}
            <div className="w-0 h-0 mx-auto hidden md:block" style={{ borderLeft: "160px solid transparent", borderRight: "160px solid transparent", borderTop: "110px solid hsl(45 30% 94%)", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15)) drop-shadow(0 0 1px rgba(0,0,0,0.3))" }} />
          </motion.div>

          {/* Wax seal */}
          <motion.div
            className="absolute top-[36px] xs:top-[46px] sm:top-[56px] md:top-[66px] left-0 right-0 mx-auto w-24 z-40"
            animate={{ 
              scale: isOpen ? 0.85 : 1,
              opacity: 1,
            }}
            transition={{ duration: 0.5, delay: isOpen ? 0.2 : 0.5 }}
          >
            <div className="w-24 h-24 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-full">
              <span className="text-gold text-5xl">💍</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.p
        className="text-xs text-muted-foreground mt-8 text-center font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ delay: 0.5 }}
      >
        Tocca di nuovo per chiudere
      </motion.p>
    </section>
  );
};

export default InteractiveEnvelope;
