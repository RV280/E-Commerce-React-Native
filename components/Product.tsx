import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import useCartStore from '../CartZustand';

export type ProductType = {
  title: string;
  price: number;
  imageUrl: string;
  id: number;
};
const DEFAULT_IMAGE_URL =
  'https://cdn2.iconfinder.com/data/icons/admin-tools-2/25/image2-1024.png';
export function Product({
  title,
  price,
  imageUrl,
  id,
}: ProductType): JSX.Element {
  imageUrl = imageUrl ? imageUrl : DEFAULT_IMAGE_URL;
  price = price ? price : 0;
  const addItemToCart = useCartStore(state => state.addItemToCart);

  function onAddToCart(): void {
    addItemToCart({
      title,
      price,
      imageUrl,
      id,
    });
  }
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.thumb} source={{uri: imageUrl}} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.price}>₹ {price}</Text>
        <Button onPress={onAddToCart} title="Add to cart" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
    width: '46%',
    margin: 8,
  },
  thumb: {
    height: undefined,
    aspectRatio: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});
