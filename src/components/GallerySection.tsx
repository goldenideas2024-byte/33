import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, label: "مطبخ ألمنيوم مودرن" },
  { src: g2, label: "مطبخ كلاسيك فاخر" },
  { src: g3, label: "مطبخ خشبي عصري" },
  { src: g4, label: "مطبخ أسود فاخر" },
  { src: g5, label: "مطبخ أخضر مودرن" },
  { src: g6, label: "مطبخ أزرق أنيق" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-cairo font-semibold mb-2">معرض أعمالنا</span>
        <h2 className="text-2xl md:text-3xl font-cairo font-bold text-foreground">مشاريع أنجزناها مؤخراً</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="group relative rounded-xl overflow-hidden shadow-md"
          >
            <img src={img.src} alt={img.label} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={600} height={600} />
            <div className="absolute inset-0 bg-hero-overlay/0 group-hover:bg-hero-overlay/60 transition-all duration-300 flex items-end">
              <p className="text-primary-foreground font-cairo font-semibold p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">{img.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
