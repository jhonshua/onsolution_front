// screens/CarritoScreen.js
import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { CartContext } from "../context/CartContext"; // Importa el contexto
import HeaderCard from "../components/HeaderCard";

const CarritoScreen = ({ navigation }) => { // Recibimos navigation como prop
  const { cart } = useContext(CartContext); // Obtenemos el carrito del contexto

  // Función para renderizar cada producto en el carrito
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.url }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.precio.toFixed(2)}</Text>
        {item.selectedSize && (
          <Text style={styles.size}>Talla: {item.selectedSize}</Text>
        )}
        {item.selectedColor && (
          <Text style={styles.color}>Color: {item.selectedColor}</Text>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderCard navigation={navigation} /> {/* Pasamos navigation a HeaderCard */}
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.emptyText}>El carrito está vacío</Text>
      )}
    </View>
  );
};

// Estilos de la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  list: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#6b4f3b",
    marginBottom: 4,
  },
  size: {
    fontSize: 14,
    color: "#666",
  },
  color: {
    fontSize: 14,
    color: "#666",
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});

export default CarritoScreen;