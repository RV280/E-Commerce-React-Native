import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import useCartStore from '../CartZustand';

export function Cart(): JSX.Element {
  const items = useCartStore(state => state.cart);
  const getTotalPrice = useCartStore(state => state.getTotalPrice);
  const totalPrice = useCartStore(state => state.totalPrice);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      getTotalPrice();
      setTotal(totalPrice);
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
        <Image style={styles.thumb} source={{uri: item.imageUrl}} />
        <Text style={styles.lineLeft}>
          {item.title.slice(0, 11)} x {item.qty}
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
      keyExtractor={item => item.id.toString()}
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
    height: undefined,
    aspectRatio: 1,
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
    width: '50%',
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
