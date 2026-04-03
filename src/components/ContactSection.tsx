import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-cairo font-bold mb-4">تواصل معنا</h2>
        <p className="text-primary-foreground/80 mb-8">
          سعداء بزيارتكم لموقعنا ونأمل أن تتواصلوا مع أفضل خبراء تفصيل مطابخ ألالمنيوم والخشب في الرياض.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button asChild size="lg" variant="secondary" className="text-base">
            <a href="tel:0532751618">
              <Phone className="w-5 h-5 ml-2" />جوال: 0532751618
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="text-base">
            <a href="https://wa.me/966532751618" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 ml-2" />واتساب: 0532751618
            </a>
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
          <MapPin className="w-5 h-5" />
          <span>الرياض، المملكة العربية السعودية</span>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
