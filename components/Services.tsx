'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiHome, HiOfficeBuilding, HiTruck, HiLightningBolt } from 'react-icons/hi';

const services = [
  {
    icon: HiHome,
    title: 'Prefabrik Konut',
    description: 'Modern, konforlu ve enerji verimli yaşam alanları. Villa, bağ evi, tiny house çözümleri.',
    color: 'from-primary to-secondary',
  },
  {
    icon: HiOfficeBuilding,
    title: 'Ticari Yapılar',
    description: 'Ofis, showroom, mağaza ve tesis binaları. İşletmeniz için özel tasarımlar.',
    color: 'from-secondary to-accent',
  },
  {
    icon: HiTruck,
    title: 'Şantiye Yapıları',
    description: 'Geçici ofis, yatakhane, yemekhane ve sosyal alanlar. Hızlı kurulum garantisi.',
    color: 'from-accent to-cyan-400',
  },
  {
    icon: HiLightningBolt,
    title: 'Hızlı Teslimat',
    description: 'Projenizden 45-60 gün içinde teslim. Anahtar teslim çözümler.',
    color: 'from-blue-600 to-primary',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Her türlü prefabrik yapı ihtiyacınız için profesyonel çözümler sunuyoruz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 h-full">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg`}
                  >
                    <Icon className="text-3xl text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-dark/70 leading-relaxed">
                    {service.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className={`h-1 bg-gradient-to-r ${service.color} mt-6 rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
