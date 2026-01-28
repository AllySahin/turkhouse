'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Kategoriye göre kapak görselleri
const categoryHeroImages: { [key: string]: string } = {
  'prefabrik': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
  'celik-ev': 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&q=80',
  'konteyner': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80',
  'tinyhouse': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80',
  'celik-hangar-depo': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80'
};

// Kategoriye göre örnek ürünler
const categoryProducts: { [key: string]: any[] } = {
  'prefabrik': [
    {
      id: '1',
      name: 'Prefabrik Şantiye Yapısı',
      category: 'Şantiye',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
      price: '450.000 TL',
      specs: { size: '120m²', rooms: '4+1', duration: '45 gün' }
    },
    {
      id: '4',
      name: 'Şantiye Yatakhanesi',
      category: 'Şantiye',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop',
      price: '650.000 TL',
      specs: { size: '150m²', rooms: '20 Kişilik', duration: '20 gün' }
    },
    {
      id: '1',
      name: 'Modern Villa - Tek Katlı',
      category: 'Tek Katlı',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
      price: '1.200.000 TL',
      specs: { size: '180m²', rooms: '3+1', duration: '60 gün' }
    },
    {
      id: '1',
      name: 'Modern Villa - Çift Katlı',
      category: 'Çift Katlı',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
      price: '1.800.000 TL',
      specs: { size: '250m²', rooms: '5+2', duration: '75 gün' }
    }
  ],
  'celik-ev': [
    {
      id: '1',
      name: 'Modern Çelik Villa - Tek Katlı',
      category: 'Tek Katlı',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop',
      price: '950.000 TL',
      specs: { size: '150m²', rooms: '3+1', duration: '45 gün' }
    },
    {
      id: '1',
      name: 'Lüks Çelik Villa - Çift Katlı',
      category: 'Çift Katlı',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop',
      price: '1.650.000 TL',
      specs: { size: '220m²', rooms: '4+2', duration: '60 gün' }
    },
    {
      id: '5',
      name: 'Bağ Evi',
      category: 'Tek Katlı',
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=400&fit=crop',
      price: '780.000 TL',
      specs: { size: '120m²', rooms: '2+1', duration: '40 gün' }
    }
  ],
  'konteyner': [
    {
      id: '4',
      name: 'Konteyner Ev - Single',
      category: 'Standart',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      price: '280.000 TL',
      specs: { size: '30m²', rooms: '1+1', duration: '15 gün' }
    },
    {
      id: '3',
      name: 'Konteyner Ofis',
      category: 'Ofis',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop',
      price: '420.000 TL',
      specs: { size: '50m²', rooms: 'Açık Plan', duration: '20 gün' }
    },
    {
      id: '4',
      name: 'Lüks Konteyner Villa',
      category: 'Premium',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
      price: '750.000 TL',
      specs: { size: '100m²', rooms: '3+1', duration: '30 gün' }
    }
  ],
  'tinyhouse': [
    {
      id: '2',
      name: 'Minimal Tinyhouse',
      category: 'Standart',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
      price: '450.000 TL',
      specs: { size: '45m²', rooms: '1+1', duration: '25 gün' }
    },
    {
      id: '2',
      name: 'Deluxe Tinyhouse',
      category: 'Premium',
      image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&h=400&fit=crop',
      price: '585.000 TL',
      specs: { size: '45m²', rooms: '1+1', duration: '30 gün' }
    }
  ],
  'celik-hangar-depo': [
    {
      id: '3',
      name: 'Çelik Depo - Küçük',
      category: 'Depo',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      price: '580.000 TL',
      specs: { size: '300m²', height: '6m', duration: '40 gün' }
    },
    {
      id: '6',
      name: 'Endüstriyel Hangar',
      category: 'Hangar',
      image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&h=400&fit=crop',
      price: '1.250.000 TL',
      specs: { size: '500m²', height: '8m', duration: '60 gün' }
    },
    {
      id: '6',
      name: 'Showroom',
      category: 'Showroom',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      price: '980.000 TL',
      specs: { size: '300m²', height: 'Açık Alan', duration: '50 gün' }
    }
  ]
};

const categoryInfo: { [key: string]: any } = {
  'prefabrik': {
    name: 'Prefabrik Yapılar',
    description: 'Hızlı kurulum, kaliteli malzeme ve uygun fiyatlarla prefabrik yapı çözümlerimizi keşfedin.',
    icon: '🏗️'
  },
  'celik-ev': {
    name: 'Çelik Ev',
    description: 'Modern ve dayanıklı çelik ev modelleriyle hayalinizdeki yaşam alanını oluşturun.',
    icon: '🏡'
  },
  'konteyner': {
    name: 'Konteyner Yapılar',
    description: 'Modüler ve esnek konteyner ev çözümleri ile pratik yaşam alanları.',
    icon: '📦'
  },
  'tinyhouse': {
    name: 'Tinyhouse',
    description: 'Minimal yaşam konsepti ile doğayla iç içe, konforlu küçük evler.',
    icon: '🏠'
  },
  'celik-hangar-depo': {
    name: 'Çelik Hangar / Depo',
    description: 'Endüstriyel ihtiyaçlarınız için geniş ve dayanıklı çelik yapılar.',
    icon: '🏭'
  }
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const category = categoryInfo[slug];
  const products = categoryProducts[slug] || [];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kategori Bulunamadı</h1>
          <Link href="/" className="text-accent hover:text-accent/80">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={categoryHeroImages[slug] || categoryHeroImages['prefabrik']}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl"
              >
                {category.name}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg"
              >
                {category.description}
              </motion.p>
              
              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 inline-flex gap-8 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{products.length}+</div>
                  <div className="text-sm text-white/80">Model</div>
                </div>
                <div className="w-px bg-white/30" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-white/80">Kalite</div>
                </div>
                <div className="w-px bg-white/30" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-white/80">Destek</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
            <motion.div
              key={`${slug}-${product.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href={`/projects/${product.id}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-accent px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      {product.category}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2">
                        <div className="text-xs text-gray-600 mb-1">Başlangıç Fiyatı</div>
                        <div className="text-lg font-bold text-accent">{product.price}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-accent to-accent/60 rounded-full" />
                      </div>
                      <span className="text-xs text-gray-500 font-medium">Popüler</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg group-hover:bg-accent/5 transition-colors">
                        <div className="text-xs text-gray-500 mb-1">📏 Alan</div>
                        <div className="font-bold text-gray-900 text-sm">{product.specs.size}</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg group-hover:bg-accent/5 transition-colors">
                        <div className="text-xs text-gray-500 mb-1">{product.specs.rooms ? '🏠 Oda' : '📐 Yükseklik'}</div>
                        <div className="font-bold text-gray-900 text-sm">{product.specs.rooms || product.specs.height}</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg group-hover:bg-accent/5 transition-colors">
                        <div className="text-xs text-gray-500 mb-1">⏱️ Süre</div>
                        <div className="font-bold text-gray-900 text-sm">{product.specs.duration}</div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-accent to-accent/80 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 group-hover:scale-105">
                      Detaylı İncele →
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          </div>

          {/* CTA Section */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                💡
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Size Özel Çözüm Üretelim
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              İhtiyaçlarınıza özel projeler için uzman ekibimizle görüşün
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
              >
                🎯 Ücretsiz Teklif Alın
              </Link>
              <Link
                href="/projects"
                className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg border-2 border-white/20 transition-all duration-300 hover:scale-105"
              >
                📂 Tüm Projeler
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
