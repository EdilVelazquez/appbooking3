import { Room } from '../types/room';

export const rooms: Room[] = [
  {
    id: 1,
    name: 'Habitación sencilla',
    description: 'Disfruta del confort en nuestra habitación en planta baja con servicios básicos.',
    price: 800,
    capacity: 2,
    images: [
      '/images/habitacionsencilla.jpeg',
      '/images/habitacionsencilla2.jpeg'
    ],
    amenities: [
      'Cama matrimonial',
      'Frigobar',
      'Aire acondicionado',
      'Vista al jardín',
      'Baño completo',
      'Smart TV',
      'Wifi en áreas comunes'
    ],
  },
  {
    id: 2,
    name: 'Habitación doble',
    description: 'Ubicada en el segundo nivel, cómoda y confortable.',
    price: 1200,
    capacity: 4,
    images: [
      '/images/habitacionindividual.jpeg',
      '/images/habitacionindividual2.jpeg'
    ],
    amenities: [
      'Camas matrimoniales',
      'Frigobar',
      'Aire acondicionado',
      'Vista al jardín',
      'Baño completo',
      'Smart TV',
      'Wifi en áreas comunes'
    ],
  },
  {
    id: 3,
    name: 'Habitación familiar',
    description: 'Ubicada en el segundo nivel, espaciosa, cómoda y confortable.',
    price: 1600,
    capacity: 6,
    images: [
      '/images/habtaciontriple.jpeg',
      '/images/habitaciontriple2.jpeg'
    ],
    amenities: [
      'Tres camas matrimoniales',
      'Frigobar',
      'Aire acondicionado',
      'Vista al jardín',
      'Baño completo',
      'Smart TV',
      'Wifi en áreas comunes'
    ],
  }
];
