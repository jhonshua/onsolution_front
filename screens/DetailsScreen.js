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
import { CartContext } from "../context/CartContext"; // Importa el contexto

const DetailsScreen = ({ route, navigation }) => {
  const { product } = route.params; // Obtenemos el producto de la ruta
  const [selectedSize, setSelectedSize] = useState(null); // Estado para la talla seleccionada
  const [selectedColor, setSelectedColor] = useState(null); // Estado para el color seleccionado
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false); // Estado para controlar la pestaña de colores

  const { addToCart } = useContext(CartContext); // Obtenemos la función addToCart del contexto

  // Lista de tallas disponibles
  const sizes = ["S", "M", "L", "XL", "XXL"];

  // Lista de colores disponibles (obtenida del producto)
  const colors = product.color || [];

  // Función para manejar el evento de agregar al carrito
  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      selectedSize,
      selectedColor,
    };
    addToCart(productToAdd); // Agregamos el producto al carrito
    navigation.navigate("Carrito"); // Navegamos a la pantalla del carrito
  };

  return (
    <View style={styles.container}>
      <HeaderDetails navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={{ uri: product.url }} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.precio.toFixed(2)}</Text>
        <Text style={styles.category}>Categoría: {product.categoria}</Text>
        <Text style={styles.filters}>{product.nota}</Text>

        {/* Selector de tallas */}
        <Text style={styles.size}>Select Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeButton,
                selectedSize === size && styles.sizeButtonActive, // Aplica estilo activo si está seleccionado
              ]}
              onPress={() => setSelectedSize(size)} // Cambia la talla seleccionada
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.sizeTextActive, // Aplica estilo activo si está seleccionado
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
            onPress={() => setIsColorPickerOpen(!isColorPickerOpen)} // Abre/cierra la pestaña
          >
            <Text>Colors</Text>
          </TouchableOpacity>
        </View>

        {/* Lista de colores (se muestra solo si la pestaña está abierta) */}
        {isColorPickerOpen && (
          <View style={styles.colorContainer}>
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.colorButton,
                  selectedColor === color && styles.colorButtonActive, // Aplica estilo activo si está seleccionado
                  { backgroundColor: color }, // Fondo del botón según el color
                ]}
                onPress={() => setSelectedColor(color)} // Cambia el color seleccionado
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

// Estilos de la pantalla (sin cambios)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  content: {
    padding: 16,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    resizeMode: "cover",
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    color: "#6b4f3b",
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  filters: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  size: {
    fontSize: 20,
    width: 320,
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
    backgroundColor: "#fff", // Fondo blanco por defecto
  },
  sizeButtonActive: {
    backgroundColor: "#6b4f3b", // Fondo marrón cuando está activo
  },
  sizeText: {
    fontSize: 16,
    color: "#000", // Texto negro por defecto
  },
  sizeTextActive: {
    color: "#fff", // Texto blanco cuando está activo
  },
  colorHeaderContainer: {
    flexDirection: "row", // Coloca los elementos en una fila
    alignItems: "center", // Alinea verticalmente al centro
    marginBottom: 8,
  },
  color: {
    fontSize: 16,
    marginRight: 8, // Espacio entre el texto y el botón
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