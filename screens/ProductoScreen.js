// screens/ProductoScreen.js
import React, { useState } from "react";
import {StyleSheet, ScrollView } from "react-native";
import Category from "../components/Category";
import FilterHome from "../components/FilterHome";
import ProductGrid from "../components/ProductGrid";
import data from "../data.json";

const ProductoScreen = ({ navigation }) => {
  const [products, setProducts] = useState(data.data);


  // Función para filtrar productos por categoría
  const filterByCategory = (category) => {
    if (category === "All") {
      setProducts(data.data); // Mostrar todos los productos
    } else {
      const filteredProducts = data.data.filter(
        (product) => product.categoria.toLowerCase() === category.toLowerCase()
      );
      setProducts(filteredProducts); // Filtrar por categoría
    }
  };

  // Función para filtrar productos por filtros (Woman, Man, Newest, etc.)
  const filterByTag = (tag) => {
    if (tag === "All") {
      setProducts(data.data); // Mostrar todos los productos
    } else {
      const filteredProducts = data.data.filter((product) =>
        product.filtros.some(
          (filtro) => filtro.toLowerCase() === tag.toLowerCase()
        )
      );
      setProducts(filteredProducts); // Filtrar por tag
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Componente de categorías */}
      <Category onSelectCategory={filterByCategory} />

      {/* Componente de filtros */}
      <FilterHome onSelectFilter={filterByTag} />

      {/* Contenido productos */}
      <ProductGrid data={products} navigation={navigation} />
    </ScrollView>
  );
};

// Estilos de la pantalla (sin cambios)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  }
});

export default ProductoScreen;