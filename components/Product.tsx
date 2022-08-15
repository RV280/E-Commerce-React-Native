import React, {useContext} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  ImageSourcePropType,
} from 'react-native';
import {CartContext} from '../CartContext';

export type ProductType = {
  name: string;
  price: number;
  image: ImageSourcePropType;
  id: number;
};

export function Product({name, price, image, id}: ProductType): JSX.Element {
  const {addItemToCart} = useContext(CartContext);

  function onAddToCart(): void {
    addItemToCart(id);
  }
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.thumb} source={image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
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
