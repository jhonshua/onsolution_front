// components/FilterHome.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const FilterHome = ({ onSelectFilter }) => {
  // Estado para el filtro activo
  const [activeFilter, setActiveFilter] = useState("All");

  // Lista de filtros
  const filters = ["Woman", "Man", "Newest", "All", "Popular"];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          style={[
            styles.filterButton,
            activeFilter === filter ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => {
            setActiveFilter(filter); // Actualiza el filtro activo
            onSelectFilter(filter); // Llama a la función de filtrado
          }}
        >
          <Text
            style={[
              styles.filterText,
              activeFilter === filter
                ? styles.activeText
                : styles.inactiveText,
            ]}
          >
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 20,
    backgroundColor: "#fff", // Fondo blanco del contenedor
  },
  filterButton: {
    borderRadius: 20, // Botones ovalados
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1, // Borde para resaltar cuando no está activo
    borderColor: "#6b4f3b", // Color del borde
    shadowColor: "#000", // Sombra
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra en Android
    marginRight: 8, // Margen entre botones
  },
  activeButton: {
    backgroundColor: "#6b4f3b", // Fondo cuando está activo
  },
  inactiveButton: {
    backgroundColor: "#fff", // Fondo cuando no está activo
  },
  filterText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  activeText: {
    color: "#fff", // Texto blanco cuando está activo
  },
  inactiveText: {
    color: "#000", // Texto negro cuando no está activo
  },
});

export default FilterHome;