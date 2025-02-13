// screens/DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => { // Recibimos el objeto navigation
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')} // Navegamos a Home
      />
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

export default DetailsScreen;