import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, ActivityIndicator} from 'react-native';

import {Product} from '../components/Product';
import axios from 'axios';

type itemType = {
  title: string;
  imageUrl: string;
  price: string;
  id: string;
};

function Loader() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
}

export function ProductsList(): JSX.Element {
  function renderProduct({item: product}: any) {
    return <Product {...product} />;
  }

  const [products, setProducts] = useState([] as itemType[]);
  const [loader, setLoader] = useState(true);
  const [offset, setOffset] = useState(0);

  async function getDataFromServer(url: string) {
    const response = await axios.get(url);
    let data: itemType[] = products;
    for (let i = 0; i <= 9; i++) {
      if (!data.some(el => el.id === response.data.collections[i + ''].name)) {
        data.push({
          title: response.data.collections[i + ''].name,
          imageUrl: response.data.collections[i + ''].image_url,
          price: response.data.collections[i + ''].stats.average_price,
          id: response.data.collections[i + ''].name,
        });
      }
    }

    setProducts(data);
    setLoader(false);
    setOffset(offset + 10);
  }

  useEffect(() => {
    getDataFromServer(
      'https://api.opensea.io/api/v1/collections?offset=' +
        offset +
        '&limit=10',
    );
  });

  if (loader) {
    return <Loader />;
  } else {
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
  loader: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
