import { motion } from "framer-motion";

const steps = [
  { day: "اليوم 1", title: "تواصل العميل", desc: "يتواصل العميل معنا ونحدد موعداً لزيارة المنزل وأخذ القياسات." },
  { day: "اليوم 2", title: "قياس وتحديد المتطلبات", desc: "نقوم بقياس دقيق ونناقش مواصفات الخزانات والألوان والإكسسوارات." },
  { day: "اليوم 3", title: "توقيع العقد", desc: "كتابة المواصفات في عقد رسمي وتحديد التكلفة وقبض الدفعة الأولى." },
  { day: "1-8 أيام", title: "أعمال التفصيل", desc: "البدء بالتفصيل بإشراف المختصين في مصنعنا." },
  { day: "اليوم الأخير", title: "التركيب والتسليم", desc: "نقل المطبخ وتركيبه في منزل العميل مع العزل والتشطيب النهائي." },
];

const ProcessSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-cairo font-semibold mb-2">كيف نعمل</span>
        <h2 className="text-2xl md:text-3xl font-cairo font-bold text-foreground">مراحل تفصيل المطبخ</h2>
      </div>
      <div className="max-w-3xl mx-auto relative">
        <div className="absolute top-0 bottom-0 right-6 w-0.5 bg-primary/20" />
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="relative pr-16 pb-10 last:pb-0"
          >
            <div className="absolute right-0 top-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-cairo font-bold text-sm z-10">
              {i + 1}
            </div>
            <div className="bg-card rounded-xl p-5 border border-border shadow-sm">
              <span className="text-xs text-primary font-cairo font-semibold">{s.day}</span>
              <h3 className="font-cairo font-bold text-foreground mt-1 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
