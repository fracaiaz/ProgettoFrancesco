import HeroSection from "@/components/wedding/HeroSection";
import InteractiveEnvelope from "@/components/wedding/InteractiveEnvelope";
import RSVPInfo from "@/components/wedding/RSVPInfo";
import FormalInvitation from "@/components/wedding/FormalInvitation";
import EnvelopeSection from "@/components/wedding/EnvelopeSection";
import Storia from "@/components/wedding/Storia";
import Itinerary from "@/components/wedding/Itinerary";
import DressCode from "@/components/wedding/DressCode";
import GiftsSection from "@/components/wedding/GiftsSection";
import ConfermaPartecipazione from "@/components/wedding/ConfermaPartecipazione";
import Countdown from "@/components/wedding/Countdown";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <main className="min-h-screen page-paper overflow-x-hidden">
      <HeroSection />

      <section id="envelope">
        <EnvelopeSection />
      </section>
      <section id="storia">
        <Storia />
      </section>
      <section id="invitation">
        <FormalInvitation />
      </section>
      <section id="itinerary">
        <Itinerary />
      </section>
      <section id="dresscode">
        <DressCode />
      </section>
      <section id="gifts">
        <GiftsSection />
      </section>
      <section id="conferma">
        <ConfermaPartecipazione />
      </section>
      <section id="countdown">
        <Countdown />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
