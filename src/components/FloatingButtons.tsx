import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
    <a
      href="tel:0532751618"
      className="w-12 h-12 rounded-full text-base cta-phone2 text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="اتصل بنا"
    >
      <Phone className="w-5 h-5" />
    </a>
    <a
      href="https://wa.me/966532751618"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-[#25D366] text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="واتساب"
    >
      <MessageCircle className="w-5 h-5" />
    </a>
  </div>
);

export default FloatingButtons;
