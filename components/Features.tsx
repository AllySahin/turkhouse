'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCheckCircle } from 'react-icons/hi';

const features = [
  'Depreme dayanıklı sağlam yapı',
  'Enerji verimli yalıtım',
  'Hızlı montaj süreci',
  'Ekonomik fiyatlandırma',
  'Özel tasarım seçenekleri',
  'Uzun ömürlü malzeme',
  '10 yıl garanti',
  'Anahtar teslim hizmet',
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-primary via-secondary to-accent h-96 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🏗️</div>
                  <p className="text-xl font-semibold">Kaliteli Prefabrik Yapılar</p>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Yıllık Tecrübe</div>
            </motion.div>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-dark mb-4">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-lg text-dark/70 mb-8">
              Modern teknoloji ve kaliteli malzemelerle ürettiğimiz prefabrik yapılar,
              uzun ömürlü ve güvenli yaşam alanları sunuyor.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <HiCheckCircle className="text-2xl text-primary flex-shrink-0" />
                  <span className="text-dark/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary transition-colors shadow-lg"
            >
              Detaylı Bilgi Al
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
