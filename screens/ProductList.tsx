import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {Product} from '../components/Product';
import {ProductItem, getProducts} from '../services/ProductsService';

export function ProductsList(): JSX.Element {
  function renderProduct({item: product}: any) {
    return <Product {...product} />;
  }

  const [products, setProducts] = useState([] as ProductItem[]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={item => item.id.toString()}
      data={products}
      renderItem={renderProduct}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    marginHorizontal: 8,
    marginVertical: 2,
    justifyContent: 'center',
  },
});
