'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const stats = [
  { value: '15+', label: 'Yıllık Deneyim', suffix: '' },
  { value: '750', label: 'Tamamlanan Proje', suffix: '+' },
  { value: '500', label: 'Mutlu Müşteri', suffix: '+' },
  { value: '25', label: 'Şehir', suffix: '+' },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10"
        initial={{ x: '-100%', opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 0.1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Image
          src="/bg1.png"
          alt="Background"
          fill
          className="object-contain object-right brightness-200"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Rakamlarla <span className="text-accent">Turkhouse</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Yılların deneyimi ve binlerce mutlu müşterinin güveniyle
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
                <div className="relative text-5xl md:text-6xl font-bold text-white mb-3">
                  {stat.value}
                  <span className="text-accent">{stat.suffix}</span>
                </div>
              </div>
              <p className="text-gray-300 font-medium text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
