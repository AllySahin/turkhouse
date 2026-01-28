'use client';

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/logo.jpeg"
              alt="TurkHouse Logo"
              width={150}
              height={75}
              className="mb-4"
            />
            <p className="text-white/70 max-w-md">
              Modern prefabrik yapılarla hayalinizdeki yaşam alanlarını oluşturuyoruz.
              Kalite, hız ve güvenin adresi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Hakkımızda</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-accent transition-colors">Hizmetler</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-accent transition-colors">Projeler</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-accent transition-colors">İletişim</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Sosyal Medya</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; 2026 TurkHouse. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
