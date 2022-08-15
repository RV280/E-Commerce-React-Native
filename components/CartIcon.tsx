import React from 'react';
import {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {CartContext} from '../CartContext';

export function CartIcon({navigation}: any): JSX.Element {
  const {getItemsCount} = useContext(CartContext); //Gettings Items in cart.
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        Cart ({getItemsCount()})
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'orange',
    height: 32,
    padding: 2,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
