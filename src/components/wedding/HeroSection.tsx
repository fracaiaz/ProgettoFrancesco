import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section
            className="relative flex flex-col items-center justify-center px-6 overflow-hidden"
            style={{
                height: '100dvh',
                minHeight: '100dvh'
            }}
        >
            {/* Video di sfondo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute w-full h-full object-cover"
                style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }}
            >
                <source src="/mare.mp4" type="video/mp4" />
            </video>

            {/* Overlay scuro per leggibilità */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Dissolvenza verso il basso */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-[hsl(38_28%_94%/0.5)] to-[hsl(38_28%_94%)] pointer-events-none z-5"></div>

            {/* Main content */}
            <motion.div
                className="text-center z-10 w-full max-w-4xl mx-auto flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <motion.h1
                    className="font-serif text-6xl md:text-8xl lg:text-9xl text-white tracking-wide leading-tight drop-shadow-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1.8, ease: "easeOut" }}
                >
                    {/* <span style={{ fontFamily: 'Silenter', fontSize: '6rem', textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>A</span>
                    <span style={{ fontFamily: 'Silenter', fontSize: '5rem', textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', letterSpacing: '0.005em' }}>nnamaria</span><br /> */}
                    <span style={{
                        fontFamily: 'Silenter',
                        fontSize: '5.7rem',
                        fontWeight: 400,
                        WebkitTextStroke: '0.5px #FFFFFF',
                        paintOrder: 'stroke fill',
                        display: 'inline-block',
                        textRendering: 'optimizeLegibility',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                    }}>
                        A
                    </span>
                    <span style={{
                        fontFamily: 'Silenter',
                        fontSize: '4.8rem',
                        fontWeight: 400,
                        WebkitTextStroke: '0.5px #FFFFFF',
                        paintOrder: 'stroke fill',
                        display: 'inline-block',
                        textRendering: 'optimizeLegibility',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                        letterSpacing: '0.005em'
                    }}>
                        nnamaria
                    </span><br/>
                    <span className="text-gold" style={{
                        fontFamily: 'Silenter',
                        fontSize: '4rem',
                        fontWeight: 400,
                        WebkitTextStroke: '0.5px hsl(var(--gold))',
                        paintOrder: 'stroke fill',
                        display: 'inline-block',
                        textRendering: 'optimizeLegibility',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                    }}>
                        &
                    </span><br/>
                    <span style={{
                        fontFamily: 'Silenter',
                        fontSize: '5.7rem',
                        fontWeight: 400,
                        WebkitTextStroke: '0.5px #FFFFFF',
                        paintOrder: 'stroke fill',
                        display: 'inline-block',
                        textRendering: 'optimizeLegibility',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                    }}>
                        A
                    </span>
                    <span style={{
                        fontFamily: 'Silenter',
                        fontSize: '4.8rem',
                        fontWeight: 400,
                        WebkitTextStroke: '0.5px #FFFFFF',
                        paintOrder: 'stroke fill',
                        display: 'inline-block',
                        textRendering: 'optimizeLegibility',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                    }}>
                        gostino
                    </span>

                </motion.h1>
            </motion.div>
        </section>
    );
};

export default HeroSection;
