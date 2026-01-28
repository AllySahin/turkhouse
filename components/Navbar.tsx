'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import Image from 'next/image';

const categories = [
  {
    name: 'Prefabrik',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
    description: 'Hızlı ve kaliteli yapılar',
    subcategories: ['Şantiye', 'Tek Katlı', 'Çift Katlı']
  },
  {
    name: 'Çelik Ev',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop',
    description: 'Modern yaşam alanları',
    subcategories: ['Tek Katlı', 'Çift Katlı']
  },
  {
    name: 'Konteyner',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    description: 'Modüler çözümler',
    subcategories: []
  },
  {
    name: 'Tinyhouse',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    description: 'Minimal yaşam konsepti',
    subcategories: []
  },
  {
    name: 'Çelik Hangar/Depo',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
    description: 'Endüstriyel yapılar',
    subcategories: []
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero bölümünde miyiz kontrol et (ilk 100vh)
  const [isOverHero, setIsOverHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight; // Hero section yüksekliği
      
      setIsScrolled(scrollPosition > 50);
      // Scroll 100px'den fazla VE hero bitiminden önce ise görsellerin üzerindeyiz
      setIsOverHero(scrollPosition > 100 && scrollPosition < heroHeight - 100);
    };
    handleScroll(); // İlk yüklemede kontrol et
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Projeler', href: '/projeler' },
    { name: 'İletişim', href: '#contact' },
  ];

  // Hover timeout için ref
  let hoverTimeout: NodeJS.Timeout;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-gray-100' : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
          >
            <Image
              src="/logo.jpeg"
              alt="TurkHouse Logo"
              width={120}
              height={60}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              if (item.name === 'Hizmetler') {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => {
                      clearTimeout(hoverTimeout);
                      setIsProductsOpen(true);
                    }}
                    onMouseLeave={() => {
                      hoverTimeout = setTimeout(() => {
                        setIsProductsOpen(false);
                      }, 150);
                    }}
                  >
                    <motion.button
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                        isOverHero ? 'text-white hover:text-accent drop-shadow-md' : 'text-gray-700 hover:text-accent'
                      }`}
                    >
                      Ürünlerimiz
                      <HiChevronDown className={`transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                    </motion.button>

                    {/* Mega Menu */}
                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full -left-48 mt-2 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                              {categories.map((category, idx) => (
                                <motion.a
                                  key={category.name}
                                  href={`/kategoriler/${category.name.toLowerCase().replace(/\s+|\//g, '-')}`}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  whileHover={{ scale: 1.02 }}
                                  className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                >
                                  <div className="relative h-40 overflow-hidden">
                                    <Image
                                      src={category.image}
                                      alt={category.name}
                                      fill
                                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                      <h3 className="font-bold text-base mb-1">{category.name}</h3>
                                      <p className="text-xs opacity-90 mb-2">{category.description}</p>
                                      {category.subcategories.length > 0 && (
                                        <div className="flex flex-wrap gap-1">
                                          {category.subcategories.map((sub) => (
                                            <span
                                              key={sub}
                                              className="text-xs bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full"
                                            >
                                              {sub}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </motion.a>
                              ))}
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                              <a
                                href="#projects"
                                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium text-sm transition-colors"
                              >
                                Tüm Projelerimizi Görüntüle
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isOverHero ? 'text-white hover:text-accent drop-shadow-md' : 'text-gray-700 hover:text-accent'
                  }`}
                >
                  {item.name}
                </motion.a>
              );
            })}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-6 py-2.5 rounded-full font-medium hover:bg-accent/90 transition-colors duration-300 shadow-md"
            >
              Katalog
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isOverHero ? 'text-white' : 'text-gray-700'
            }`}
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        className="md:hidden overflow-hidden bg-white shadow-lg"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => {
            if (item.name === 'Hizmetler') {
              return (
                <div key={item.name} className="space-y-2">
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="flex items-center justify-between w-full text-dark hover:text-primary font-medium transition-colors"
                  >
                    Ürünlerimiz
                    <HiChevronDown className={`transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 space-y-2 overflow-hidden"
                      >
                        {categories.map((category) => (
                          <div key={category.name} className="border-l-2 border-gray-200 pl-3">
                            <a
                              href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block text-sm font-medium text-gray-700 hover:text-accent"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsProductsOpen(false);
                              }}
                            >
                              {category.name}
                            </a>
                            {category.subcategories.length > 0 && (
                              <div className="mt-1 space-y-1">
                                {category.subcategories.map((sub) => (
                                  <a
                                    key={sub}
                                    href={`#${category.name.toLowerCase()}-${sub.toLowerCase()}`}
                                    className="block text-xs text-gray-500 hover:text-accent"
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setIsProductsOpen(false);
                                    }}
                                  >
                                    • {sub}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                className="block text-dark hover:text-primary font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            );
          })}
          <button className="w-full bg-primary text-white px-6 py-3 rounded-full font-medium">
            Teklif Al
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
