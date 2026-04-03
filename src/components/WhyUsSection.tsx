import { Handshake, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Handshake,
    title: "الالتزام",
    desc: "نبني شراكات متينة مع عملائنا لتحقيق طموحاتهم بأعلى المعايير المهنية.",
  },
  {
    icon: Award,
    title: "المهنية",
    desc: "فريق محترف يلتزم بأعلى معايير الكفاءة والمسؤولية مع مهارات متخصصة.",
  },
  {
    icon: Clock,
    title: "الخبرة",
    desc: "خبرة تمتد لأكثر من عقد في تفصيل المطابخ داخل السعودية مع فريق فني متخصص.",
  },
];

const WhyUsSection = () => (
  <section className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-cairo font-semibold mb-4">لماذا نحن ؟</span>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-card rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow border border-border"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <r.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-cairo font-bold text-foreground mb-3">{r.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
