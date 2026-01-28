'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const projects = [
  {
    id: 1,
    title: 'Modern Villa',
    category: 'Prefabrik Konut',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    description: '250m² lüks prefabrik villa projesi',
  },
  {
    id: 2,
    title: 'Tiny House',
    category: 'Prefabrik Konut',
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80',
    description: '45m² minimalist yaşam alanı',
  },
  {
    id: 3,
    title: 'Ofis Binası',
    category: 'Ticari Yapı',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    description: '500m² modern ofis kompleksi',
  },
  {
    id: 4,
    title: 'Şantiye Yatakhanesi',
    category: 'Şantiye Yapısı',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    description: '20 kişilik konforlu yaşam alanı',
  },
  {
    id: 5,
    title: 'Bağ Evi',
    category: 'Prefabrik Konut',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80',
    description: '120m² doğayla iç içe yaşam',
  },
  {
    id: 6,
    title: 'Showroom',
    category: 'Ticari Yapı',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    description: '300m² modern sergileme alanı',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const router = useRouter();
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next >= projects.length) return 0;
      if (next < 0) return projects.length - 1;
      return next;
    });
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Projelerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tamamladığımız başarılı prefabrik yapı projelerimizden örnekler
          </p>
        </motion.div>

        {/* Featured Slider */}
        <div className="relative mb-16">
          <div 
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
            onClick={() => router.push(`/projects/${currentProject.id}`)}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                {/* Real Image */}
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all">
                  <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="group-hover:translate-y-[-4px] transition-transform"
                    >
                      <p className="text-accent font-semibold mb-2">{currentProject.category}</p>
                      <h3 className="text-5xl font-bold mb-3">{currentProject.title}</h3>
                      <p className="text-xl opacity-90">{currentProject.description}</p>
                      <button className="mt-6 bg-accent text-white px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Detayları Gör →
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all z-10"
            >
              <HiChevronLeft className="text-2xl text-primary" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all z-10"
            >
              <HiChevronRight className="text-2xl text-primary" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`transition-all ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-accent'
                      : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                  } rounded-full`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => router.push(`/projects/${project.id}`)}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all">
                {/* Real Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="text-xs font-semibold text-accent mb-1">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
