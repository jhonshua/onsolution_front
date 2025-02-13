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
    backgroundColor: "#fff", 
  },
  filterButton: {
    borderRadius: 20, 
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1, 
    borderColor: "#6b4f3b", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
    marginRight: 8, 
  },
  activeButton: {
    backgroundColor: "#6b4f3b", 
  },
  inactiveButton: {
    backgroundColor: "#ffffff", 
  },
  filterText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  activeText: {
    color: "#fff",
  },
  inactiveText: {
    color: "#000", 
  },
});

export default FilterHome;