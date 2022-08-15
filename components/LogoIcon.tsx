import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export function LogoIcon({navigation}: any): JSX.Element {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate('Products');
        }}>
        {'         '}
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
  logo: {
    height: 26,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
