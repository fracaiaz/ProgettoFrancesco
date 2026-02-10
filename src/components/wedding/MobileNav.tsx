import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Calendar, MapPin, Gift, Shirt, Music } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Auto-hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { label: "Invito", icon: Heart, href: "#invitation" },
    { label: "Data", icon: Calendar, href: "#countdown" },
    { label: "Programma", icon: MapPin, href: "#itinerary" },
    { label: "Dress Code", icon: Shirt, href: "#dresscode" },
    { label: "Regali", icon: Gift, href: "#gifts" },
    { label: "Musica", icon: Music, href: "#music" },
  ];

  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Mobile Navigation Bar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-gold" />
              <span className="font-serif text-base text-foreground">A & A</span>
            </div>
            
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-muted/50 transition-colors touch-manipulation"
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="fixed top-[57px] left-0 right-0 bg-card border-b border-border shadow-lg z-40 md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 px-4 max-h-[calc(100vh-57px)] overflow-y-auto">
                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      onClick={() => handleMenuClick(item.href)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors text-left touch-manipulation"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <item.icon className="w-5 h-5 text-sage" />
                      <span className="font-sans text-sm text-foreground">
                        {item.label}
                      </span>
                    </motion.button>
                  ))}
                </nav>

                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center font-sans">
                    29 Giugno 2026
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed nav on mobile */}
      <div className="h-[57px] md:hidden" />
    </>
  );
};

export default MobileNav;
