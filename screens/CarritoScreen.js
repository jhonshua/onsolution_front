// screens/CarritoScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CarritoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Carrito Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CarritoScreen;