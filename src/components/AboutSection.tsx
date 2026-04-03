import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-kitchen.jpg";

const features = [
  "تصميم واستشارة مجانية",
  "نستخدم أفضل المواد",
  "ضمان شامل",
  "التزام بالوقت",
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={aboutImg} alt="ورشة المطابخ الحديثة" className="rounded-xl shadow-xl w-full" loading="lazy" width={800} height={600} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-cairo font-semibold mb-4">من نحن ؟</span>
          <h2 className="text-2xl md:text-3xl font-cairo font-bold text-foreground mb-4">
            المطابخ الحديثة
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
          مصنع متخصص في تفصيل وتركيب كل أنواع المطابخ الألمنيوم والخشب في الرياض، نسعى دائماً إلى تحقيق رؤية عملائنا، حيث نؤمن بأن المطبخ هو قلب المنزل، لذا نلتزم بتقديم حلول مطابخ مودرن وكلاسيك تجمع بين الجودة والإبداع.
          </p>
          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <Button asChild size="lg" className="text-base cta-phone2">
              <a href="tel:0532751618"><Phone className="w-4 h-4 ml-2" />اتصل بنا</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base cta-whatsapp">
              <a href="https://wa.me/966532751618"><MessageCircle className="w-4 h-4 ml-2" />واتساب</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
