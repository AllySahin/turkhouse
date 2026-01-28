'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const stats = [
    { value: '15+', label: 'Yıllık Deneyim' },
    { value: '500+', label: 'Mutlu Müşteri' },
    { value: '750+', label: 'Tamamlanan Proje' },
    { value: '%100', label: 'Müşteri Memnuniyeti' },
  ];

  const values = [
    {
      title: 'Kalite Güvencesi',
      description: 'A+ sınıf malzemeler ve uluslararası standartlara uygun üretim süreçleriyle her projede en üst düzey kaliteyi garanti ediyoruz.'
    },
    {
      title: 'İnovasyon',
      description: 'Sürekli araştırma ve geliştirme faaliyetleriyle sektörde yenilikçi çözümler sunuyor, teknolojik gelişmeleri yakından takip ediyoruz.'
    },
    {
      title: 'Müşteri Odaklılık',
      description: 'Her müşterimizin ihtiyaçlarını özenle dinliyor, özel çözümler üreterek beklentilerin ötesinde hizmet sunuyoruz.'
    },
    {
      title: 'Zamanında Teslimat',
      description: 'Proje yönetim sistemimiz sayesinde belirlenen sürelerde eksiksiz teslimat yapıyor, zaman kaybı yaşatmıyoruz.'
    },
  ];

  const team = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Genel Müdür',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      description: '15 yıllık inşaat ve prefabrik sektörü deneyimi'
    },
    {
      name: 'Ayşe Demir',
      role: 'Proje Müdürü',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      description: 'Mimarlık alanında 12 yıllık profesyonel tecrübe'
    },
    {
      name: 'Mehmet Kaya',
      role: 'Üretim Müdürü',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      description: 'Çelik yapı sistemlerinde 10 yıllık uzmanlık'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Turkhouse Hakkında"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
              >
                Turkhouse
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-white/90 mb-4 drop-shadow-lg"
              >
                Kırıkkale'nin Prefabrik Yapı Lideri
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto drop-shadow-lg"
              >
                15 yılı aşkın deneyimimizle hayalinizdeki yaşam alanlarını, modern teknoloji ve kaliteli malzemelerle hayata geçiriyoruz
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent mb-3">{stat.value}</div>
                <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* About Story Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Turkhouse, 2010 yılında Kırıkkale'de kurulmuş, prefabrik yapı sektöründe öncü bir firmadır. 
                  Kuruluşumuzdan bu yana kalite, güven ve müşteri memnuniyeti ilkelerimizden ödün vermeden 
                  yolumuza devam ediyoruz.
                </p>
                <p>
                  Modern üretim tesisimizde, çelik ev, konteyner yapı, tinyhouse, prefabrik ofis ve hangar 
                  projelerini A+ sınıf malzemelerle üretiyor, Türkiye'nin dört bir yanına hizmet veriyoruz.
                </p>
                <p>
                  Deneyimli mühendis ve mimar kadromuzla her projeyi özenle tasarlıyor, üretiyor ve 
                  monte ediyoruz. Müşterilerimizin hayallerini gerçeğe dönüştürmenin mutluluğunu yaşıyoruz.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Turkhouse Fabrika"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Başarımızın temelinde yatan değerler ve çalışma prensipleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-accent"
              >
                <div className="text-2xl font-bold text-accent mb-2">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ekibimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alanında uzman, deneyimli ve tutkulu profesyonellerden oluşan ekibimiz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-accent font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Hayalinizdeki Projeyi Birlikte Yapalım</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                15 yıllık deneyimimiz ve uzman kadromuzla size en iyi çözümü sunmak için hazırız
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-block bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300"
                >
                  İletişime Geçin
                </Link>
                <Link
                  href="/kategoriler/prefabrik"
                  className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-300"
                >
                  Projelerimizi İnceleyin
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
