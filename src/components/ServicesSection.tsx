import { ChefHat, Wrench, Paintbrush, Package } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: ChefHat, title: "تفصيل مطابخ ألألمنيوم والخشب", desc: "تصميم وتفصيل المطابخ بأحدث الموديلات والألوان." },
  { icon: Package, title: "تفصيل خزائن الملابس", desc: "خزائن عملية وأنيقة تستغل كل مساحة بذكاء." },
  { icon: Wrench, title: "فك وتركيب المطابخ", desc: "خدمات فك وتركيب احترافية مع ضمان على العمل." },
  { icon: Paintbrush, title: "تغيير ألوان المطابخ", desc: "تجديد مطبخك بألوان عصرية تعطيه حياة جديدة." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-cairo font-semibold mb-2">ماذا نقدم؟</span>
        <h2 className="text-2xl md:text-3xl font-cairo font-bold text-foreground">خدماتنا</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mx-auto mb-4 transition-colors">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-cairo font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
