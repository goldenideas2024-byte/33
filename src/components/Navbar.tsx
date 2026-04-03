import { useState } from "react";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "أعمالنا", href: "#gallery" },
  { label: "آراء العملاء", href: "#testimonials" },
  { label: "اتصل بنا", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero" className="text-xl font-cairo font-bold text-base">
          المطابخ الحديثة
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-cairo text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <a href="tel:0532751618"><Phone className="w-4 h-4 ml-1" />اتصل بنا</a>
          </Button>
          <Button asChild size="sm" className="text-base cta-whatsapp">
            <a href="https://wa.me/966532751618" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 ml-1" />واتساب
            </a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 mt-3">
            <Button asChild variant="outline" size="sm" className="flex-1">
              <a href="tel:0532751618"><Phone className="w-4 h-4 ml-1" />اتصل</a>
            </Button>
            <Button asChild size="sm" className="flex-1">
              <a href="https://wa.me/966532751618"><MessageCircle className="w-4 h-4 ml-1" />واتساب</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
