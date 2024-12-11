import React from 'react';
import { motion } from 'framer-motion';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl mb-2">Sobre Hotel Santa Inés</h2>
        <p className="text-xl text-gray-600">Tradición familiar</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >

         <img
              src="/images/alberca2.jpeg"
              alt="Hotel Santa Inés"
              className="rounded-lg shadow-lg"
            />


        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Nuestra historia</h2>
          <p className="text-gray-600 mb-4">
            El Hotel Santa Inés, de dos estrellas, ha sido un ícono de hospitalidad y calidez hogareña desde su fundación. 
            Ubicado junto a las dunas, nuestro hotel ofrece una experiencia única para nuestros huéspedes.
          </p>
          <p className="text-gray-600 mb-4">
            Somos un hotel que admite mascotas. Aquí, tanto tú como tu mascota disfrutarán de una experiencia única 
            y se sentirán como en casa.
          </p>
          <p className="text-gray-600">
            Con más de 10 años de servicio, nos enorgullece mantener una atención al cliente excepcional, 
            asegurando que cada momento en nuestro hotel sea memorable.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Misión</h3>
          <p className="text-gray-600">
            Brindar hospitalidad y calidez hogareña, con un servicio excepcional y atención al detalle.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Visión</h3>
          <p className="text-gray-600">
            Ser reconocidos como el hotel familiar de referencia en Chachalacas, Veracruz, 
            destacando nuestro servicio y hospitalidad hacia los clientes.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Valores</h3>
          <p className="text-gray-600">
            Honestidad, integridad, excelencia, compromiso con el cliente, trabajo en equipo y 
            responsabilidad social son los pilares que sustentan nuestras acciones.
          </p>
        </motion.div>
      </div>
    </div>
  );
};