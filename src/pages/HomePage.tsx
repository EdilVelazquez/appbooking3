import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="/images/fondo index.jpeg"
          alt="Hotel Santa Inés"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-4"
            >
              Bienvenidos a Hotel Santa Inés
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl mb-8"
            >
              Aventura en el desierto, en Chachalacas, Veracruz
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/rooms"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Reservar Ahora
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="/images/habitacionindividual.jpeg"
              alt="Habitaciones Cómodas"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Habitaciones cómodas</h3>
            <p className="text-gray-600">Siéntete como en casa</p>
          </div>
          <div className="text-center">
            <img
              src="/images/comedor.jpeg"
              alt="Restaurante"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Restaurante</h3>
            <p className="text-gray-600">Disfruta de comida típica</p>
          </div>
          <div className="text-center">
            <img
              src="/images/alberca2.jpeg"
              alt="Alberca"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Alberca</h3>
            <p className="text-gray-600">Un espacio amplio para tu diversión</p>
          </div>
        </div>

        {/* WhatsApp Images Carousel */}
        <div className="mt-16 px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Galería de Imágenes</h3>
          <div className="carousel-container max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              className="custom-carousel"
              renderArrowPrev={(clickHandler, hasPrev) => {
                return (
                  <button
                    onClick={clickHandler}
                    className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-r-lg transition-all ${
                      !hasPrev && 'opacity-50 cursor-not-allowed'
                    }`}
                  >
                    ❮
                  </button>
                );
              }}
              renderArrowNext={(clickHandler, hasNext) => {
                return (
                  <button
                    onClick={clickHandler}
                    className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-l-lg transition-all ${
                      !hasNext && 'opacity-50 cursor-not-allowed'
                    }`}
                  >
                    ❯
                  </button>
                );
              }}
            >
              {[
                "2.jpeg",
                "3.jpeg",
                "4.jpeg",
                "5.jpeg",
                "6.jpeg",
                "7.jpeg",
                "8.jpeg",
                "9.jpeg",
                "10.jpeg",
                "11.jpeg",
                "12.jpeg",
                "13.jpeg"
              ].map((image, index) => (
                <div key={index} className="carousel-slide aspect-[16/9] bg-gray-100">
                  <img
                    src={`/images/${image}`}
                    alt={`Hotel Santa Inés ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};