import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import callaLilies from "@/assets/calla-lilies.png";
import couplePolaroid from "@/assets/bikini.webp";
import logo from "@/assets/logo.webp";
import AudioPlayer from "@/components/wedding/AudioPlayer";

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <section className="relative min-h-screen flex flex-col items-center justify-start px-6 pt-16 md:pt-40 pb-20 overflow-hidden paper-texture">
            {/* Decorative floral accents */}
            {/* <motion.img
        src={callaLilies}
        alt=""
        className="absolute top-0 right-0 w-32 md:w-48 opacity-30 -rotate-12 pointer-events-none"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      /> */}

            {/* Main content */}
            <motion.div
                className="text-center z-10 w-full max-w-4xl mx-auto flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-6 font-sans" style={{opacity: 1}}>Sei invitato al matrimonio di</p>
                <motion.h1
                    className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground tracking-wide leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <span style={{ fontFamily: 'Silenter, serif', fontSize: '5rem' }}>A</span>
                    <span style={{ fontFamily: 'Silenter, serif', fontSize: '4rem' }}>nnamaria</span><br />
                    <span className="text-gold" style={{ fontFamily: 'Silenter, serif', fontSize: '3rem'}}>&</span><br />
                    <span style={{ fontFamily: 'Silenter, serif', fontSize: '5rem' }}>A</span>
                    <span style={{ fontFamily: 'Silenter, serif', fontSize: '4rem' }}>gostino</span>
                </motion.h1>

                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-px w-12 bg-border"></span>
                        <p className="font-serif text-xl md:text-2xl text-muted-foreground tracking-widest">
                            29.06.2026
                        </p>
                        <span className="h-px w-12 bg-border"></span>
                    </div>
                </motion.div>

                {/* Envelope Section */}
                <div id="busta" className="relative z-20 mt-8 mb-20 cursor-pointer" style={{ paddingTop: '3vh' }} onClick={() => setIsOpen((prev) => !prev)}>
                    <motion.div
                        className="relative mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        {/* Envelope container */}
                        <div className="relative w-72 xs:w-80 sm:w-96 md:w-[28rem] h-48 xs:h-52 sm:h-60 md:h-64 mx-auto">
                            {/* Rettangolo base */}
                            <div
                                id="envelope-rectangle"
                                className="absolute inset-0 rounded-sm shadow-envelope"
                                style={{ backgroundColor: "hsl(45 30% 93%)" }}
                            />

                            {/* Triangolo sinistro - base sul lato sinistro, punta verso destra */}
                            <div
                                id="triangle-left"
                                className="absolute left-0 top-0 w-0 h-0 xs:hidden"
                                style={{
                                    borderTop: "96px solid transparent",
                                    borderBottom: "96px solid transparent",
                                    borderLeft: "144px solid hsl(45 30% 90%)",
                                    filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))",
                                    zIndex: 15
                                }}
                            />
                            <div
                                id="triangle-left-xs"
                                className="absolute left-0 top-0 w-0 h-0 hidden xs:block sm:hidden"
                                style={{
                                    borderTop: "104px solid transparent",
                                    borderBottom: "104px solid transparent",
                                    borderLeft: "160px solid hsl(45 30% 90%)",
                                    filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))",
                                    zIndex: 15
                                }}
                            />
                            <div
                                id="triangle-left-sm"
                                className="absolute left-0 top-0 w-0 h-0 hidden sm:block md:hidden"
                                style={{
                                    borderTop: "120px solid transparent",
                                    borderBottom: "120px solid transparent",
                                    borderLeft: "192px solid hsl(45 30% 90%)",
                                    filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))",
                                    zIndex: 15
                                }}
                            />
                            <div
                                id="triangle-left-md"
                                className="absolute left-0 top-0 w-0 h-0 hidden md:block"
                                style={{
                                    borderTop: "128px solid transparent",
                                    borderBottom: "128px solid transparent",
                                    borderLeft: "224px solid hsl(45 30% 90%)",
                                    filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))",
                                    zIndex: 15
                                }}
                            />

                            {/* Triangolo destro - base sul lato destro, punta verso sinistra */}
                            <div
                                id="triangle-right"
                                className="absolute right-0 top-0 w-0 h-0 xs:hidden"
                                style={{
                                    borderTop: "96px solid transparent",
                                    borderBottom: "96px solid transparent",
                                    borderRight: "144px solid hsl(45 30% 90%)",
                                    filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))",
                                    zIndex: 15
                                }}
                            />
                            <div
                                id="triangle-right-xs"
                                className="absolute right-0 top-0 w-0 h-0 hidden xs:block sm:hidden"
                                style={{
                                    borderTop: "104px solid transparent",
                                    borderBottom: "104px solid transparent",
                                    borderRight: "160px solid hsl(45 30% 90%)",
                                    filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))",
                                    zIndex: 15
                                }}
                            />
                            <div
                                id="triangle-right-sm"
                                className="absolute right-0 top-0 w-0 h-0 hidden sm:block md:hidden"
                                style={{
                                    borderTop: "120px solid transparent",
                                    borderBottom: "120px solid transparent",
                                    borderRight: "192px solid hsl(45 30% 90%)",
                                    filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))",
                                    zIndex: 15
                                }}
                            />
                            <div
                                id="triangle-right-md"
                                className="absolute right-0 top-0 w-0 h-0 hidden md:block"
                                style={{
                                    borderTop: "128px solid transparent",
                                    borderBottom: "128px solid transparent",
                                    borderRight: "224px solid hsl(45 30% 90%)",
                                    filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))",
                                    zIndex: 15
                                }}
                            />

                            {/* Triangolo inferiore - base sul lato inferiore, punta verso l'alto */}
                            <div
                                id="triangle-bottom"
                                className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0 xs:hidden"
                                style={{
                                    borderLeft: "144px solid transparent",
                                    borderRight: "144px solid transparent",
                                    borderBottom: "96px solid hsl(45 30% 90%)",
                                    filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))",
                                    zIndex: 15
                                }}
                            />
                            <div
                                id="triangle-bottom-xs"
                                className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0 hidden xs:block sm:hidden"
                                style={{
                                    borderLeft: "160px solid transparent",
                                    borderRight: "160px solid transparent",
                                    borderBottom: "104px solid hsl(45 30% 90%)",
                                    filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))",
                                    zIndex: 15
                                }}
                            />
                            <div
                                id="triangle-bottom-sm"
                                className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0 hidden sm:block md:hidden"
                                style={{
                                    borderLeft: "192px solid transparent",
                                    borderRight: "192px solid transparent",
                                    borderBottom: "120px solid hsl(45 30% 90%)",
                                    filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))",
                                    zIndex: 15
                                }}
                            />
                            <div
                                id="triangle-bottom-md"
                                className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0 hidden md:block"
                                style={{
                                    borderLeft: "224px solid transparent",
                                    borderRight: "224px solid transparent",
                                    borderBottom: "128px solid hsl(45 30% 90%)",
                                    filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))",
                                    zIndex: 15
                                }}
                            />

                            {/* Foto polaroid che esce dalla busta */}
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        className="absolute left-0 right-0 mx-auto"
                                        style={{ bottom: "-2rem", width: "fit-content", zIndex: 10 }}
                                        initial={{ y: -50, opacity: 0, rotate: 10 }}
                                        animate={{ y: -100, opacity: 1, rotate: 10 }}
                                        exit={{ y: -50, opacity: 0, rotate: 10 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 40,
                                            damping: 25,
                                            duration: isOpen ? 0.5 : 0.5,
                                            delay: isOpen ? 0.5 : 0  // 1 secondo quando si apre, 0 quando si chiude
                                        }}
                                    >
                                        <div className="bg-card p-3 sm:p-4 pb-3 sm:pb-4 shadow-card rounded-sm">
                                            <img
                                                src={couplePolaroid}
                                                alt="La nostra foto"
                                                loading="lazy"
                                                decoding="async"
                                                className="w-52 sm:w-64 md:w-80 h-auto object-contain"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Triangolo superiore - base sul lato superiore, punta verso il basso */}
                            <motion.div
                                className="absolute top-0 left-0 right-0 origin-top"
                                animate={{
                                    rotateX: isOpen ? 180 : 0,
                                }}
                                transition={{
                                    duration: isOpen ? 1.1 : 1.7,
                                    ease: "easeInOut",
                                    delay: isOpen ? 0 : 1.3  // 1.5 secondi quando si apre, 1 secondo quando si chiude
                                }}
                                style={{
                                    transformStyle: "preserve-3d",
                                    perspective: "1000px",
                                }}
                            >
                                <div
                                    id="triangle-top"
                                    className="mx-auto w-0 h-0 xs:hidden"
                                    style={{
                                        borderLeft: "144px solid transparent",
                                        borderRight: "144px solid transparent",
                                        borderTop: "96px solid hsl(45 30% 90%)",
                                        filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))"
                                    }}
                                />
                                <div
                                    id="triangle-top-xs"
                                    className="mx-auto w-0 h-0 hidden xs:block sm:hidden"
                                    style={{
                                        borderLeft: "160px solid transparent",
                                        borderRight: "160px solid transparent",
                                        borderTop: "104px solid hsl(45 30% 90%)",
                                        filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))"
                                    }}
                                />
                                <div
                                    id="triangle-top-sm"
                                    className="mx-auto w-0 h-0 hidden sm:block md:hidden"
                                    style={{
                                        borderLeft: "192px solid transparent",
                                        borderRight: "192px solid transparent",
                                        borderTop: "120px solid hsl(45 30% 90%)",
                                        filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))"
                                    }}
                                />
                                <div
                                    id="triangle-top-md"
                                    className="mx-auto w-0 h-0 hidden md:block"
                                    style={{
                                        borderLeft: "224px solid transparent",
                                        borderRight: "224px solid transparent",
                                        borderTop: "128px solid hsl(45 30% 90%)",
                                        filter: "drop-shadow(0 0 1px rgba(0,0,0,0.4))"
                                    }}
                                />
                            </motion.div>

                            {/* Logo/Wax seal - centrato sul rettangolo, sopra tutti i triangoli */}
                            <div
                                className="absolute w-32 h-32"
                                style={{
                                    top: '60%',
                                    left: '50%',
                                    marginTop: '-64px',  // metà dell'altezza (128px / 2)
                                    marginLeft: '-64px',  // metà della larghezza (128px / 2)
                                    zIndex: 30
                                }}
                            >
                                <motion.div
                                    animate={{
                                        scale: isOpen ? 1.1 : 1.3,
                                        opacity: 1,
                                    }}
                                    transition={{ duration: 0.5, delay: isOpen ? 0.2 : 0.5 }}
                                >
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        className="w-full h-full object-contain drop-shadow-lg"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <AudioPlayer className="w-full px-0 py-6 mt-8" />

            </motion.div>
        </section>
    );
};

export default HeroSection;
