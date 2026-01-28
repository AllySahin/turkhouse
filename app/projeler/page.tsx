'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

const projects = [
  {
    id: '1',
    title: 'Modern Villa',
    category: 'Prefabrik Konut',
    location: 'Ankara',
    year: '2024',
    area: '250m²',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    description: 'Modern mimari çizgilere sahip, geniş ve konforlu yaşam alanları sunan lüks prefabrik villa projesi.',
  },
  {
    id: '2',
    title: 'Tiny House',
    category: 'Prefabrik Konut',
    location: 'Bolu',
    year: '2024',
    area: '45m²',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80',
    description: 'Minimalist yaşam tarzını benimseyen, her detayın özenle düşünüldüğü kompakt tiny house.',
  },
  {
    id: '3',
    title: 'Ofis Binası',
    category: 'Ticari Yapı',
    location: 'İstanbul',
    year: '2023',
    area: '500m²',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    description: 'Modern iş dünyasının ihtiyaçlarına cevap veren, fonksiyonel prefabrik ofis binası.',
  },
  {
    id: '4',
    title: 'Şantiye Yatakhanesi',
    category: 'Şantiye Yapısı',
    location: 'Kırıkkale',
    year: '2024',
    area: '150m²',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    description: 'Şantiye çalışanları için konforlu, hijyenik ve güvenli yaşam alanı.',
  },
  {
    id: '5',
    title: 'Bağ Evi',
    category: 'Prefabrik Konut',
    location: 'Çanakkale',
    year: '2023',
    area: '120m²',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80',
    description: 'Doğayla iç içe, sakin ve huzurlu yaşam için tasarlanmış prefabrik bağ evi.',
  },
  {
    id: '6',
    title: 'Showroom',
    category: 'Ticari Yapı',
    location: 'Bursa',
    year: '2024',
    area: '300m²',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    description: 'Ürün sergileme ve satış için özel tasarlanmış modern prefabrik showroom.',
  },
  {
    id: '7',
    title: 'Çelik Villa',
    category: 'Çelik Ev',
    location: 'Antalya',
    year: '2023',
    area: '220m²',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    description: 'Deniz manzaralı, lüks çelik konstrüksiyon villa projesi.',
  },
  {
    id: '8',
    title: 'Konteyner Ofis',
    category: 'Konteyner',
    location: 'İzmir',
    year: '2024',
    area: '50m²',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    description: 'Modern ve fonksiyonel konteyner ofis çözümü.',
  },
  {
    id: '9',
    title: 'Çelik Hangar',
    category: 'Endüstriyel',
    location: 'Konya',
    year: '2023',
    area: '500m²',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80',
    description: 'Geniş ve dayanıklı endüstriyel çelik hangar yapısı.',
  },
];

const categories = ['Tümü', 'Prefabrik Konut', 'Ticari Yapı', 'Şantiye Yapısı', 'Çelik Ev', 'Konteyner', 'Endüstriyel'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const filteredProjects = selectedCategory === 'Tümü' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Tamamlanmış Projeler"
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
                Tamamlanmış Projelerimiz
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg"
              >
                Türkiye'nin dört bir yanında hayata geçirdiğimiz kaliteli projeler
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-white shadow-lg shadow-accent/30'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-accent mb-2">{projects.length}</div>
              <div className="text-gray-600 font-medium">Toplam Proje</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-gray-600 font-medium">Yıl Deneyim</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-gray-600 font-medium">Şehir</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-gray-600 font-medium">Mutlu Müşteri</div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-accent px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                        {project.category}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-gray-600">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {project.location}
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {project.year}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                          <span className="font-semibold">{project.area}</span>
                        </div>
                        <button className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                          Detaylar
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Proje Bulunamadı</h3>
              <p className="text-gray-600">Bu kategoride henüz proje bulunmuyor.</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Sizin Projeniz Sonraki Olabilir</h2>
              <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                Hayalinizdeki projeyi birlikte gerçeğe dönüştürelim
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-block bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300"
                >
                  Ücretsiz Teklif Alın
                </Link>
                <Link
                  href="/hakkimizda"
                  className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-300"
                >
                  Hakkımızda
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
