// screens/HomeScreen.js
import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import PromoCarousel from "../components/PromoCarousel";
import Category from "../components/Category";
import Oferta from "../components/Oferta";
import FilterHome from "../components/FilterHome";
import ProductGrid from "../components/ProductGrid";
import data from "../data.json";

const HomeScreen = ({ navigation }) => {
  
  const [products, setProducts] = useState(data.data);

  // Función para manejar la búsqueda
  const handleSearch = (query) => {
    console.log("Búsqueda realizada:", query);
  };

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
      {/* Barra de búsqueda */}
      <View style={styles.searchBarContainer}>
        <SearchBar onSearch={handleSearch} />
      </View>

      {/* Carrusel de promociones */}
      <PromoCarousel />

      {/* Componente de categorías */}
      <Category onSelectCategory={filterByCategory} />

      {/* Componente de oferta */}
      <Oferta />

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
  },
  searchBarContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: "#ffffff",
  },
});

export default HomeScreen;