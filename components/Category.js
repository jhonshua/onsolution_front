// components/Category.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TShirtIcon from "../assets/icons/TShirtIcon"; // Importa el ícono SVG
import PantIcon from "../assets/icons/PantIcon"; // Importa el ícono SVG
import DressIcon from "../assets/icons/DressIcon"; // Importa el ícono SVG
import JacketIcon from "../assets/icons/JacketIcon"; // Importa el ícono SVG

const Category = ({ onSelectCategory }) => {
  // Datos de las categorías
  const categories = [
    {
      id: 1,
      name: "T-Shirt",
      icon: <TShirtIcon width={32} height={32} />, 
      value: "tshirt",
    },
    {
      id: 2,
      name: "Pant",
      icon: <PantIcon width={32} height={32} />, 
      value: "pant",
    },
    {
      id: 3,
      name: "Dress",
      icon: <DressIcon width={32} height={32} />, 
      value: "dress",
    },
    {
      id: 4,
      name: "Jacket",
      icon: <JacketIcon width={32} height={32} />, 
      value: "jacket", 
    },
  ];

  return (
    <View style={styles.container}>
      {/* Encabezado con título y "See all" */}
      <View style={styles.header}>
        <Text style={styles.title}>Categoría</Text>
        <TouchableOpacity onPress={() => onSelectCategory("All")}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* Esferas de categorías */}
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
         <TouchableOpacity
         key={category.id}
         style={styles.categoryItem}
         onPress={() => onSelectCategory(category.value)}
       >
         {/* Esfera con ícono */}
         <View style={styles.circle}>{category.icon}</View>
         {/* Texto de la categoría */}
         <Text style={styles.categoryText}>{category.name}</Text>
       </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 16
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 14,
    color: "#888",
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryItem: {
    alignItems: "center",
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32, // Hace que el contenedor sea una esfera
    backgroundColor: "#f0f0f0", // Color de fondo de la esfera
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    color: "#000",
  },
});

export default Category;






