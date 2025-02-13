// screens/DetailsScreen.js
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import HeaderDetails from "../components/HeaderDetails";
import ButtonAdd from "../components/ButtonAdd";
import { CartContext } from "../context/CartContext";
import { Ionicons } from "@expo/vector-icons";

const DetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const { addToCart } = useContext(CartContext);

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = product.color || [];

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      selectedSize,
      selectedColor,
    };
    addToCart(productToAdd);
    navigation.navigate("Carrito");
  };

  return (
    <View style={styles.container}>
      <HeaderDetails navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={{ uri: product.url }} style={styles.image} />

        {/* Contenedor para los textos */}
        <View style={styles.textContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.puntuacion}>{product.puntuacion}</Text>
            <Ionicons style={styles.star} name="star" size={24} color="#FFD700" />
          </View>
          <Text style={styles.price}>${product.precio.toFixed(2)}</Text>
          <Text style={styles.category}>Categoría: {product.categoria}</Text>
        </View>

        <Text style={styles.filters}>{product.nota}</Text>

        {/* Selector de tallas */}
        <Text style={styles.size}>Select Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeButton,
                selectedSize === size && styles.sizeButtonActive,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.sizeTextActive,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Pestaña de colores */}
        <View style={styles.colorHeaderContainer}>
          <Text style={styles.color}>Select Color:</Text>
          <TouchableOpacity
            style={styles.colorPickerHeader}
            onPress={() => setIsColorPickerOpen(!isColorPickerOpen)}
          >
            <Text>Colors</Text>
          </TouchableOpacity>
        </View>

        {/* Lista de colores */}
        {isColorPickerOpen && (
          <View style={styles.colorContainer}>
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.colorButton,
                  selectedColor === color && styles.colorButtonActive,
                  { backgroundColor: color },
                ]}
                onPress={() => setSelectedColor(color)}
              >
                {selectedColor === color && (
                  <Text style={styles.colorButtonText}>✓</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Componente ButtonAdd */}
      <ButtonAdd price={product.precio} onAddToCart={handleAddToCart} />
    </View>
  );
};

// Estilos de la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    resizeMode: "cover",
    marginBottom: 16,
  },
  textContainer: {
    width: "100%", // Ocupa todo el ancho disponible
    marginBottom: 16,
  },
  nameContainer: {
    flexDirection: "row", // Coloca el nombre y la estrella en una fila
    alignItems: "center", // Alinea verticalmente al centro
    marginBottom: 8,
    
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 8, // Espacio entre el nombre y la estrella
  },
  puntuacion:{
    fontSize: 16,
    color: "#666",
    marginLeft:"7%"

    
  },
  star:{
    marginLeft:5
  
  },
  price: {
    fontSize: 20,
    color: "#6b4f3b",
    marginBottom: 8,
    textAlign: "left", // Alineación a la izquierda
  },
  category: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
    textAlign: "left", // Alineación a la izquierda
  },
  filters: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  size: {
    fontSize: 20,
    marginBottom: 8,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  sizeButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    backgroundColor: "#fff",
  },
  sizeButtonActive: {
    backgroundColor: "#6b4f3b",
  },
  sizeText: {
    fontSize: 16,
    color: "#000",
  },
  sizeTextActive: {
    color: "#fff",
  },
  colorHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  color: {
    fontSize: 16,
    marginRight: 8,
  },
  colorPickerHeader: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    alignItems: "center",
  },
  colorContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 16,
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  colorButtonActive: {
    borderColor: "#6b4f3b",
  },
  colorButtonText: {
    fontSize: 20,
    color: "#fff",
  },
});

export default DetailsScreen;
