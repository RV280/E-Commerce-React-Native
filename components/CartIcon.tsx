import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useCartStore from '../CartZustand';

export function CartIcon({navigation}: any): JSX.Element {
  const itemCount = useCartStore(state => state.itemCount);
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        Cart ({itemCount})
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
