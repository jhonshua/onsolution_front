import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />{/* Lupa dentro del input */}
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#999"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
        />
      </View>
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Ionicons name="options" size={20} color="#ffff" />{/* Icono de controles */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: '85%',
    marginHorizontal: '10%',
    marginTop: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row', // Para alinear la lupa y el texto horizontalmente
    alignItems: 'center', // Para centrar verticalmente la lupa y el texto
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: { // Estilos para el icono de búsqueda dentro del input
    marginRight: 10, // Espacio entre el icono y el texto
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#6b4f3b',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default SearchBar;