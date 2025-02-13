// components/ButtonAdd.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Para el ícono

const ButtonAdd = ({ price, onAddToCart }) => {
  return (
    <View style={styles.container}>
      {/* Lado izquierdo: Precio */}
      <View style={styles.priceContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.priceText}>${price.toFixed(2)}</Text>
      </View>

      {/* Lado derecho: Botón "Add to Cart" */}
      <TouchableOpacity style={styles.addButton} onPress={onAddToCart}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
        <Ionicons name="cart" size={20} color="#fff" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  priceContainer: {
    flexDirection: "column",
  },
  totalText: {
    fontSize: 14,
    color: "#666",
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6b4f3b",
  },
  addButton: {
    flexDirection: "row",
    backgroundColor: "#6b4f3b",
    borderRadius: 25, // Botón ovalado
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginRight: 8, // Espacio entre el texto y el ícono
  },
  icon: {
    marginLeft: 4, // Espacio entre el texto y el ícono
  },
});

export default ButtonAdd;