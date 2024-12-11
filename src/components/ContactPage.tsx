import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Contacto y Ubicación</h1>
        <p className="text-xl text-gray-600">Estamos aquí para atenderle</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Dirección</h3>
              <p className="text-gray-600">
                Calle Sábalo #9<br />
                al fondo de Sáenz de la peña<br />
                Playa de Chachalacas, México, 91666
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Teléfonos</h3>
              <p className="text-gray-600">
                +52 (33) 1234-5678<br />
                +52 (33) 8765-4321
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Correo Electrónico</h3>
              <p className="text-gray-600">
                reservaciones@hotelsantaines.com<br />
                info@hotelsantaines.com
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Horarios</h3>
              <p className="text-gray-600">
                Check-in: 3:00 PM<br />
                Check-out: 12:00 PM<br />
                Recepción: 24 horas
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="h-[500px] rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.270360781889!2d-96.3214758!3d19.443906899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3531da7e0a9df%3A0x8ebb09c6babc4c35!2sOYO%20Hotel%20Maria%20Ines!5e0!3m2!1ses-419!2smx!4v1733943977068!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
};