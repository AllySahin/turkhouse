'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const advantages = [
  {
    title: 'Hızlı Teslimat',
    description: 'Geleneksel inşaata göre %70 daha hızlı. Fabrika üretimi ile hava koşullarından etkilenmeden 30-90 günde teslim.',
  },
  {
    title: 'Ekonomik Çözüm',
    description: 'Klasik yapıya göre %40 daha uygun fiyat. İşçilik ve malzeme maliyetlerinde büyük tasarruf sağlıyoruz.',
  },
  {
    title: 'A+ Kalite',
    description: 'Uluslararası standartlarda, depreme dayanıklı çelik yapı. 50 yıl garanti ve ömür boyu destek.',
  },
  {
    title: 'Enerji Verimliliği',
    description: 'A+ sınıfı yalıtım ile %60 enerji tasarrufu. Çevre dostu malzemeler ve sürdürülebilir üretim.',
  },
  {
    title: 'Özel Tasarım',
    description: 'Size özel mimari projeler ve iç mekan tasarımı. İstediğiniz her detayı birlikte şekillendiriyoruz.',
  },
  {
    title: 'Anahtar Teslim',
    description: 'Projeden montaja, elektrikten tesisata kadar her şey dahil. Anahtarını teslim alın, hemen kullanın.',
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-accent">Turkhouse</span> Kalitesi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prefabrik yapıların avantajlarını en üst seviyede sunuyoruz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-l-4 border-accent h-full">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-lg font-bold text-xl mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Daha Fazla Bilgi Almak İster Misiniz?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Projelerimizi inceleyebilir veya ücretsiz keşif görüşmesi talep edebilirsiniz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projeler"
                className="inline-block bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-300"
              >
                Projeleri İncele
              </a>
              <a
                href="#contact"
                className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-300"
              >
                Ücretsiz Keşif
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
