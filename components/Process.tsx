'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'İlk Görüşme & Keşif',
    description: 'İhtiyaçlarınızı dinliyor, proje detaylarını belirliyoruz. Alan ölçümü ve ön fizibilite çalışması yapıyoruz.',
  },
  {
    number: '02',
    title: 'Tasarım & Planlama',
    description: 'Uzman mimarlarımız size özel 3D tasarım ve teknik çizimler hazırlıyor. Malzeme seçimi ve fiyat teklifi sunuyoruz.',
  },
  {
    number: '03',
    title: 'Üretim & Kalite Kontrol',
    description: 'Modern fabrikamızda A+ sınıf malzemelerle üretim başlıyor. Her aşamada kalite kontrol yapılıyor.',
  },
  {
    number: '04',
    title: 'Montaj & Teslim',
    description: 'Deneyimli ekibimiz projenizi hızla monte ediyor. Kusursuz teslim ve garanti ile hizmete başlıyoruz.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nasıl <span className="text-accent">Çalışıyoruz?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hayalinizdeki projeyi 4 adımda hayata geçiriyoruz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent -translate-y-1/2 z-0" />
              )}

              <div className="relative bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-accent/50 transition-all duration-300 hover:shadow-xl group">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent/80 text-white rounded-xl font-bold text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300"
          >
            Projenizi Başlatalım
          </a>
        </motion.div>
      </div>
    </section>
  );
}
