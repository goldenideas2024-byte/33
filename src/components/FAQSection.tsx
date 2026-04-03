import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    q: "ما هي أسعار تفصيل المطابخ في الرياض؟",
    a: "تختلف الأسعار حسب نوع الألمنيوم والإكسسوارات. متوسط سعر المتر لمطابخ كلادينج 650-800 ريال، ولمطابخ الصاج 850-1100 ريال.",
  },
  {
    q: "كم يستغرق تفصيل المطبخ؟",
    a: "تتراوح المدة بين 10 إلى 20 يوم حسب حجم المطبخ وتعقيد التصميم وعدد الأجزاء.",
  },
  {
    q: "هل التصميم مجاني؟",
    a: "نعم، نقدم تصميم إحترافي ثلاثي الأبعاد مجاني لمطبخك.",
  },
  {
    q: "ما أنواع المطابخ المتوفرة؟",
    a: "نوفر مطابخ ألمنيوم وخشب مودرن، كلاسيك، كلادينج، صاج، خشب ايطالي والماني، وصاج خشابي، ومطابخ قطاع خاص وعام.",
  },
  {
    q: "هل يوجد ضمان؟",
    a: "نعم، نقدم ضمان شامل على جميع أعمالنا مع خدمة ما بعد البيع.",
  },
];

const FAQSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-12">
        <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-cairo font-semibold mb-2">أسئلة شائعة</span>
        <h2 className="text-2xl md:text-3xl font-cairo font-bold text-foreground">الأسئلة المتداولة</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 bg-card">
            <AccordionTrigger className="font-cairo font-semibold text-foreground text-right hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
