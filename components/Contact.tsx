'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Projeniz için hemen teklif alın. Uzman ekibimiz size yardımcı olmak için hazır!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {[
            { icon: HiPhone, title: 'Telefon', info: '+90 XXX XXX XX XX', color: 'from-primary to-secondary' },
            { icon: HiMail, title: 'E-posta', info: 'info@turkhouse.com', color: 'from-secondary to-accent' },
            { icon: HiLocationMarker, title: 'Adres', info: 'İstanbul, Türkiye', color: 'from-accent to-cyan-400' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-md hover:shadow-xl transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className="text-3xl text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.info}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl p-8 border border-gray-100 shadow-lg"
        >
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Adınız Soyadınız"
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
              <input
                type="tel"
                placeholder="Telefon"
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>
            <input
              type="email"
              placeholder="E-posta Adresiniz"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <textarea
              rows={4}
              placeholder="Mesajınız"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-accent text-white font-semibold py-4 rounded-lg hover:bg-accent/90 transition-colors shadow-md"
            >
              Gönder
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
