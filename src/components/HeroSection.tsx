import { Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-kitchen.jpg";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="مطبخ المنيوم فاخر"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-hero-overlay/75" />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center max-w-3xl mx-auto px-4"
    >
      <h1 className="text-3xl md:text-5xl font-cairo font-bold text-primary-foreground mb-5">
      المطابخ الحديثة
      </h1>
      <p className="text-2xl md:text-base text-primary-foreground/80 mb-5 font-cairo">
      تفصيل مطابخ المنيوم وخشب ، أفضل تفصيل مطابخ في الرياض
      </p>

      <p className="text-primary-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto">
      اكتشف مجموعة واسعة من خيارات تفصيل مطابخ الالمنيوم والخشب في الرياض، مطابخ مودرن، مطابخ كلاسيك، مطابخ تحول مساحتك إلى نموذج راقٍ وعملي.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Button asChild size="lg" className="text-base cta-phone">
        <a href="tel:0532751618">
          <Phone className="w-5 h-5 ml-2" />اتصل بنا
        </a>
      </Button>
      <Button asChild size="lg" className="text-base cta-whatsapp">
          <a href="https://wa.me/966532751618" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 ml-2" />واتساب
          </a>
        </Button>

      </div>
    </motion.div>
  </section>
);

export default HeroSection;
