import {ImageSourcePropType} from 'react-native';
export type ProductItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: ImageSourcePropType;
};

const PRODUCTS: ProductItem[] = [
  {
    id: 1,
    name: 'ProX Headset',
    price: 1500,
    image: require('../assets/products/headset-100.jpg'),
    description:
      'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).',
  },
  {
    id: 2,
    name: 'Toy Car',
    price: 600,
    image: require('../assets/products/car-101.jpg'),
    description:
      'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.',
  },
  {
    id: 3,
    name: 'Cupcake',
    price: 20,
    image: require('../assets/products/cake-102.jpg'),
    description:
      'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.',
  },
  {
    id: 4,
    name: 'IPhone 13 Pro',
    price: 100499,
    image: require('../assets/products/phone.jpeg'),
    description:
      '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
  },
  {
    id: 5,
    name: 'GTX 1060 6GB',
    price: 79000,
    image: require('../assets/products/graphics.jpeg'),
    description:
      '6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
  },
  {
    id: 6,
    name: 'Acer Triton',
    price: 59799,
    image: require('../assets/products/laptop.jpg'),
    description:
      'Processor: Intel Core i9 11900H RAM: 32 GB (16GB+16GB) Storage: 1024GB PCIe NVMe SSD',
  },
];

export function getProducts(): ProductItem[] {
  //getDataFromServer('https://api.opensea.io/api/v1/collections?offset=0&limit=10');
  return PRODUCTS;
}

export function getProduct(id: number): ProductItem | undefined {
  return PRODUCTS.find(product => product.id === id);
}
