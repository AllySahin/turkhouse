'use client';

import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { HiArrowLeft, HiCheckCircle, HiCube, HiHome, HiClock, HiLocationMarker } from 'react-icons/hi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects = [
  {
    id: '1',
    title: 'Modern Villa',
    category: 'Prefabrik Konut',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    ],
    description: 'Modern mimari çizgilere sahip, geniş ve konforlu yaşam alanları sunan lüks prefabrik villa projesi. Doğayla iç içe, enerji verimli ve depreme dayanıklı yapı teknolojisi.',
    area: '250m²',
    rooms: '4+1',
    duration: '45-60 gün',
    location: 'Tüm Türkiye',
    price: 'Detaylı Fiyat Teklifi İçin İletişime Geçin',
    features: [
      'Depreme dayanıklı çelik taşıyıcı sistem',
      'A+ enerji sınıfı yalıtım',
      'Geniş balkon ve teras alanları',
      'Modern mutfak ve banyo donanımı',
      'Smart home altyapısı',
      'Zemin ısıtma sistemi',
      'Özel bahçe düzenlemesi',
      'Kapalı otopark alanı',
    ],
    specs: [
      { label: 'Yapı Tipi', value: 'Çelik Konstrüksiyon Prefabrik' },
      { label: 'Duvar Kalınlığı', value: '20cm Sandviç Panel' },
      { label: 'Çatı Sistemi', value: 'Amerikan Çatı - Kiremit Kaplama' },
      { label: 'Pencere Sistemi', value: 'PVC Doğrama - Çift Cam' },
      { label: 'Elektrik', value: 'Tam Donanımlı - Akıllı Sistem Hazır' },
      { label: 'Su-Isıtma', value: 'Kombi + Zemin Isıtma' },
    ],
  },
  {
    id: '2',
    title: 'Tiny House',
    category: 'Prefabrik Konut',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1920&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&q=80',
    ],
    description: 'Minimalist yaşam tarzını benimseyen, her detayın özenle düşünüldüğü kompakt ve fonksiyonel tiny house projesi. Doğayla uyumlu, taşınabilir ve sürdürülebilir yaşam alanı.',
    area: '45m²',
    rooms: '1+1',
    duration: '20-30 gün',
    location: 'Tüm Türkiye',
    price: 'Detaylı Fiyat Teklifi İçin İletişime Geçin',
    features: [
      'Hafif çelik konstrüksiyon',
      'Taşınabilir platform üzeri',
      'Akıllı depolama çözümleri',
      'Entegre mutfak ve banyo',
      'Güneş enerjisi altyapısı',
      'Doğal havalandırma sistemi',
      'Ahşap iç mekan detayları',
      'Geniş pencere ve cam kullanımı',
    ],
    specs: [
      { label: 'Yapı Tipi', value: 'Hafif Çelik Taşınabilir' },
      { label: 'Platform', value: 'Römork veya Sabit Temel' },
      { label: 'Duvar', value: '10cm Sandviç Panel' },
      { label: 'İç Kaplama', value: 'Ahşap Lambri' },
      { label: 'Elektrik', value: 'Güneş Enerjisi Destekli' },
      { label: 'Su', value: 'Kapalı Devre Sistem' },
    ],
  },
  {
    id: '3',
    title: 'Ofis Binası',
    category: 'Ticari Yapı',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80',
    ],
    description: 'Modern iş dünyasının ihtiyaçlarına cevap veren, fonksiyonel ve prestijli prefabrik ofis binası projesi. Geniş çalışma alanları, toplantı odaları ve sosyal alanlar.',
    area: '500m²',
    rooms: 'Çok Amaçlı',
    duration: '60-90 gün',
    location: 'Tüm Türkiye',
    price: 'Detaylı Fiyat Teklifi İçin İletişime Geçin',
    features: [
      'Modüler ofis alanları',
      'Toplantı ve konferans odaları',
      'Kafeterya ve sosyal alan',
      'Merkezi klima sistemi',
      'Asansör altyapısı',
      'Yangın güvenlik sistemi',
      'Otopark alanı',
      'Peyzaj düzenlemesi',
    ],
    specs: [
      { label: 'Yapı Tipi', value: 'Modüler Çelik Prefabrik' },
      { label: 'Kat Sayısı', value: '2-3 Kat' },
      { label: 'Duvar Sistemi', value: 'Alüminyum Kompozit Panel' },
      { label: 'Zemin', value: 'Yükseltilmiş Döşeme' },
      { label: 'Klima', value: 'VRF Merkezi Sistem' },
      { label: 'Güvenlik', value: 'Tam Donanımlı Alarm ve Kamera' },
    ],
  },
  {
    id: '4',
    title: 'Şantiye Yatakhanesi',
    category: 'Şantiye Yapısı',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80',
      'https://images.unsplash.com/photo-1600573472556-e636c2f0b87a?w=1920&q=80',
    ],
    description: 'Şantiye çalışanları için konforlu, hijyenik ve güvenli yaşam alanı sunan prefabrik yatakhane projesi. Hızlı kurulum ve taşınabilir yapı.',
    area: '150m²',
    rooms: '20 Kişilik',
    duration: '15-20 gün',
    location: 'Tüm Türkiye',
    price: 'Detaylı Fiyat Teklifi İçin İletişime Geçin',
    features: [
      'Yatakhane ve yaşam alanları',
      'Mutfak ve yemekhane',
      'Duş ve WC kabinleri',
      'Isıtma ve soğutma sistemi',
      'Elektrik altyapısı',
      'Su deposu ve arıtma',
      'Hızlı montaj-demontaj',
      'Taşınabilir yapı',
    ],
    specs: [
      { label: 'Yapı Tipi', value: 'Konteyner Prefabrik' },
      { label: 'Malzeme', value: 'Sandviç Panel' },
      { label: 'Kapasite', value: '20 Kişi' },
      { label: 'Elektrik', value: 'Jeneratör Bağlantılı' },
      { label: 'Su', value: 'Tank + Arıtma Sistemi' },
      { label: 'Kurulum', value: '3-5 Gün' },
    ],
  },
  {
    id: '5',
    title: 'Bağ Evi',
    category: 'Prefabrik Konut',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1920&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
    ],
    description: 'Doğayla iç içe, sakin ve huzurlu yaşam için tasarlanmış prefabrik bağ evi projesi. Geniş teraslar, şömine ve doğal malzeme kullanımı.',
    area: '120m²',
    rooms: '2+1',
    duration: '35-45 gün',
    location: 'Tüm Türkiye',
    price: 'Detaylı Fiyat Teklifi İçin İletişime Geçin',
    features: [
      'Geniş teras ve veranda',
      'Şömine ve bacası',
      'Ahşap detaylar',
      'Geniş pencere kullanımı',
      'Depo ve kiler alanı',
      'Dış mekan mobilyaları',
      'Bahçe sulama sistemi',
      'BBQ alanı',
    ],
    specs: [
      { label: 'Yapı Tipi', value: 'Ahşap-Çelik Hibrit' },
      { label: 'Dış Kaplama', value: 'Doğal Ahşap' },
      { label: 'Çatı', value: 'Kiremit Kaplı Beşik Çatı' },
      { label: 'Pencere', value: 'Ahşap Doğrama' },
      { label: 'Isıtma', value: 'Soba + Petek Sistemi' },
      { label: 'Teras', value: '40m² Ahşap Deck' },
    ],
  },
  {
    id: '6',
    title: 'Showroom',
    category: 'Ticari Yapı',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    ],
    description: 'Ürün sergileme ve satış için özel tasarlanmış modern prefabrik showroom projesi. Geniş cam yüzeyler, estetik tasarım ve fonksiyonel alanlar.',
    area: '300m²',
    rooms: 'Açık Alan',
    duration: '45-60 gün',
    location: 'Tüm Türkiye',
    price: 'Detaylı Fiyat Teklifi İçin İletişime Geçin',
    features: [
      'Geniş cam vitrin alanları',
      'Ürün sergileme standları',
      'Müşteri bekleme alanı',
      'Ofis ve toplantı odası',
      'Depo alanı',
      'LED aydınlatma sistemi',
      'Klima sistemi',
      'Güvenlik kamera sistemi',
    ],
    specs: [
      { label: 'Yapı Tipi', value: 'Modüler Prefabrik' },
      { label: 'Cephe', value: 'Alüminyum Cam Cephe' },
      { label: 'Zemin', value: 'Lamine Parke' },
      { label: 'Tavan', value: 'Asma Tavan + Spot' },
      { label: 'Klima', value: 'Split Klima Sistemi' },
      { label: 'Giriş', value: 'Otomatik Cam Kapı' },
    ],
  },
];

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Proje bulunamadı</h1>
          <button
            onClick={() => router.push('/')}
            className="text-accent hover:underline"
          >
            Ana sayfaya dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20">
        {/* Header Image */}
        <div className="relative h-[60vh] w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <div className="max-w-7xl mx-auto">
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={() => router.push('/')}
                  className="flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
                >
                  <HiArrowLeft className="text-xl" />
                  <span>Geri Dön</span>
                </motion.button>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-accent font-semibold mb-2">{project.category}</p>
                  <h1 className="text-5xl font-bold text-white mb-4">{project.title}</h1>
                  <p className="text-xl text-white/90 max-w-3xl">{project.description}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <HiCube className="text-3xl text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{project.area}</div>
                  <div className="text-sm text-gray-600">Alan</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <HiHome className="text-3xl text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{project.rooms}</div>
                  <div className="text-sm text-gray-600">Oda Sayısı</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <HiClock className="text-3xl text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{project.duration}</div>
                  <div className="text-sm text-gray-600">Teslimat</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <HiLocationMarker className="text-3xl text-accent mx-auto mb-2" />
                  <div className="text-xl font-bold text-gray-800">{project.location}</div>
                  <div className="text-sm text-gray-600">Konum</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Özellikler</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <HiCheckCircle className="text-accent text-xl flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technical Specs */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Teknik Özellikler</h2>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="space-y-4">
                    {project.specs.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                        <span className="font-semibold text-gray-700">{spec.label}</span>
                        <span className="text-gray-600">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Gallery */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Görsel Galeri</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.images.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Price Card */}
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white mb-6 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Fiyat Bilgisi</h3>
                  <p className="text-lg mb-6 opacity-90">{project.price}</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent text-white py-4 rounded-xl font-semibold hover:bg-accent/90 transition-colors shadow-lg"
                  >
                    Teklif Al
                  </motion.button>
                </div>

                {/* Contact Card */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">İletişime Geçin</h3>
                  <p className="text-gray-600 mb-6">
                    Projemiz hakkında detaylı bilgi almak ve özel teklifinizi almak için bizimle iletişime geçin.
                  </p>
                  <div className="space-y-3">
                    <a href="tel:+90XXXXXXXXXX" className="block w-full bg-gray-50 hover:bg-gray-100 text-gray-800 py-3 rounded-xl text-center font-medium transition-colors">
                      📞 Telefon
                    </a>
                    <a href="mailto:info@turkhouse.com" className="block w-full bg-gray-50 hover:bg-gray-100 text-gray-800 py-3 rounded-xl text-center font-medium transition-colors">
                      ✉️ E-posta
                    </a>
                    <a href="https://wa.me/90XXXXXXXXXX" className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-center font-medium transition-colors">
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
