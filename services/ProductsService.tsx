//import {Image} from 'react-native';

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
    id: 100,
    name: 'ReactProX Headset',
    price: 350,
    image: require('../assets/products/headset-100.jpg'),
    description:
      'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).',
  },
  {
    id: 101,
    name: 'FastLane Toy Car',
    price: 600,
    image: require('../assets/products/car-101.jpg'),
    description:
      'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.',
  },
  {
    id: 102,
    name: 'SweetHome Cupcake',
    price: 2,
    image: require('../assets/products/cake-102.jpg'),
    description:
      'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.',
  },
];

export function getProducts(): ProductItem[] {
  //getDataFromServer('https://api.opensea.io/api/v1/collections?offset=0&limit=10');
  return PRODUCTS;
}

export function getProduct(id: number): ProductItem | undefined {
  return PRODUCTS.find(product => product.id === id);
}
