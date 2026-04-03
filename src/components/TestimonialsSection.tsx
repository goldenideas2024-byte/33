import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "سالم الدوسري",
    location: "حي الصحافة، الرياض",
    text: "فصلت عندهم مطبخين والحمدلله ماندمت ابداً شغلهم ممتاز وتعامل الموظفين راقي واخص بالشكر الاخ ابو حسين شرحه كان واضح ووافي ساعدني في اختيار اشياء كثير وكان اختياره موفق شكراً",
  },
  {
    name: "أمل الخالدي",
    location: "حي العارض، الرياض",
    text: "يعطيكم العافية المطبخ اكثر من جميل وطاقم التركيب شغلهم نظيف ومهتمين بالتفاصيل",
  },
  {
    name: "ناصر العتيبي",
    location: "حي بدر، الرياض",
    text: "الصراحة شغلهم نظيف أفضل ورشة تفصيل مطابخ في الرياض، فصلت عندهم أكثر من مطبخ وتعاملهم جداً راقي.",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-cairo font-semibold mb-2">آراء عملائنا</span>
        <h2 className="text-2xl md:text-3xl font-cairo font-bold text-foreground">ماذا يقول عملاؤنا</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-card rounded-xl p-6 border border-border shadow-sm relative"
          >
            <Quote className="w-8 h-8 text-primary/20 absolute top-4 left-4" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
            <div>
              <p className="font-cairo font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
