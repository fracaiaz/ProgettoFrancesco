import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section
            className="relative flex flex-col items-center justify-center overflow-hidden"
            style={{
                width: "100vw",
                height: "100dvh",
            }}
        >
            {/* Video di sfondo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            >
                <source src="/mare.mp4" type="video/mp4" />
            </video>

            {/* Overlay scuro per leggibilità */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Main content */}
            <motion.div
                className="text-center z-10 w-full max-w-4xl mx-auto flex flex-col items-center px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <motion.p
                    className="text-sm tracking-[0.3em] text-white uppercase mb-6 font-sans drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                >
                    Sei invitato al matrimonio di
                </motion.p>
                <motion.h1
                    className="font-serif text-6xl md:text-8xl lg:text-9xl text-white tracking-wide leading-tight drop-shadow-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1.8, ease: "easeOut" }}
                >
                    <span style={{ fontFamily: 'Silenter, serif', fontSize: '5rem', fontWeight: '350' }}>A</span>
                    <span style={{ fontFamily: 'Silenter, serif', fontSize: '4rem', fontWeight: '350' }}>nnamaria</span><br />
                    <span className="text-gold" style={{ fontFamily: 'Silenter, serif', fontSize: '3rem', fontWeight: '350' }}>&</span><br />
                    <span style={{ fontFamily: 'Silenter, serif', fontSize: '5rem', fontWeight: '350' }}>A</span>
                    <span style={{ fontFamily: 'Silenter, serif', fontSize: '4rem', fontWeight: '350' }}>gostino</span>
                </motion.h1>

                <motion.div
                    className="mb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.0, duration: 1.5, ease: "easeOut" }}
                >
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-px w-12 bg-white/70"></span>
                        <p className="font-serif text-xl md:text-2xl text-white tracking-widest drop-shadow-lg">
                            29.06.2026
                        </p>
                        <span className="h-px w-12 bg-white/70"></span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
