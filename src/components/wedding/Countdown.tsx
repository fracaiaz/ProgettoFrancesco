import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import callaLilies from "@/assets/calla-lilies.png";
import calle from "@/assets/calle.webp";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = targetDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
  };
};

const Countdown = () => {
  const targetDate = new Date("2026-06-29T17:00:00");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: "Giorni" },
    { value: timeLeft.hours, label: "Ore" },
    { value: timeLeft.minutes, label: "Minuti" },
  ];

  return (
    <section id="countdown" className="relative py-24 px-6 paper-texture overflow-hidden">
      {/* Background image */}
      <div className="absolute -top-20 left-0 right-0 flex justify-center pointer-events-none">
        <img
          src={calle}
          alt=""
          className="w-auto max-w-full opacity-50 mix-blend-darken"
        />
      </div>

      {/* Decorative florals */}
      {/* <motion.img
        src={callaLilies}
        alt=""
        className="absolute top-0 left-0 w-24 md:w-32 opacity-20 -rotate-45 -translate-x-1/4 -translate-y-1/4 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src={callaLilies}
        alt=""
        className="absolute bottom-0 right-0 w-24 md:w-32 opacity-20 rotate-135 translate-x-1/4 translate-y-1/4 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1 }}
      /> */}

      <motion.div
        className="max-w-lg mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-foreground mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Mancano
        </motion.h2>

        <motion.div
          className="flex items-center justify-center gap-1 xs:gap-2 sm:gap-4 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {timeBlocks.map((block, index) => (
            <div key={block.label} className="flex items-center gap-1 xs:gap-2 sm:gap-4 md:gap-8">
              <div className="text-center">
                <motion.div
                  className="bg-card border border-border rounded-lg w-14 xs:w-16 sm:w-20 md:w-28 h-18 xs:h-20 sm:h-24 md:h-32 flex items-center justify-center shadow-paper mb-2 sm:mb-3"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-foreground">
                    {String(block.value).padStart(2, "0")}
                  </span>
                </motion.div>
                <p className="text-xs md:text-sm font-sans text-muted-foreground uppercase tracking-wider">
                  {block.label}
                </p>
              </div>
              {index < timeBlocks.length - 1 && (
                <div className="flex flex-col gap-2 -mt-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                </div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          className="mt-10 font-serif text-xl text-muted-foreground italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Vi aspettiamo!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Countdown;
