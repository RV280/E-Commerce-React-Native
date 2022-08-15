import React, {useEffect, useState, useContext} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

import {CartContext} from '../CartContext';

export function Cart(): JSX.Element {
  const {items, getTotalPrice} = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    }, []);
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>₹ {total}</Text>
      </View>
    );
  }

  function renderItem({item}: any): JSX.Element {
    return (
      <View style={styles.cartLine}>
        <Image style={styles.thumb} source={item.product.image} />
        <Text style={styles.lineLeft}>
          {item.product.name} x {item.qty}
        </Text>
        <Text style={styles.lineRight}>₹ {item.totalPrice}</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: 'row',
  },
  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
  },
  thumb: {
    height: 70,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '30%',
    marginBottom: 30,
  },
  lineTotal: {
    fontWeight: 'bold',
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: '#333333',
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
