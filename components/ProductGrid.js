// components/ProductGrid.js
import React from "react";
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from "react-native";

const ProductGrid = ({ data }) => {
  // Función para renderizar cada item
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.url }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.precio.toFixed(2)}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.url}
      numColumns={2} // Muestra 2 columnas
      contentContainerStyle={styles.container}
    />
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginBottom:90
  },
  itemContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra en Android
    alignItems: "center",
    padding: 8,
  },
  image: {
    width: Dimensions.get("window").width / 2 - 24, // Ancho ajustado para 2 columnas
    height: 150,
    borderRadius: 8,
    resizeMode: "cover",
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    color: "#6b4f3b",
    marginTop: 4,
  },
});

export default ProductGrid;