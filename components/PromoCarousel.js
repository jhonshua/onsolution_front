// components/PromoCarousel.js
import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList, Image } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const PromoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Estado para la pantalla activa
  const flatListRef = useRef(null); // Referencia para el FlatList

  // Datos de las promociones con las imágenes
  const promos = [
    {
      id: 1,
      image: require("../assets/img/carousel1.png"), // Ruta de la imagen
    },
    {
      id: 2,
      image: require("../assets/img/carousel2.png"),
    },
    {
      id: 3,
      image: require("../assets/img/carousel3.png"),
    },
    {
      id: 4,
      image: require("../assets/img/carousel4.png"),
    },
    {
      id: 5,
      image: require("../assets/img/carousel5.png"),
    },
  ];

  // Renderizar cada item del carrusel
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      </View>
    );
  };

  // Actualizar el índice activo al deslizar
  const handleScroll = (event) => {
    const slideSize = screenWidth - 50; // Ancho de cada slide (con margen)
    const index = Math.round(event.nativeEvent.contentOffset.x / slideSize);
    setActiveIndex(index);
  };

  // Desplazamiento automático
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === promos.length - 1) {
        flatListRef.current?.scrollToIndex({ index: 0, animated: true });
        setActiveIndex(0);
      } else {
        flatListRef.current?.scrollToIndex({ index: activeIndex + 1, animated: true });
        setActiveIndex(activeIndex + 1);
      }
    }, 5000); // Cambia de slide cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      {/* Carrusel de promociones */}
      <FlatList
        ref={flatListRef}
        data={promos}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.carouselContent}
      />

      {/* Indicadores de esferas */}
      <View style={styles.pagination}>
        {promos.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === activeIndex ? "#000" : "#888" },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor:'#ffffff'
  },
  carouselContent: {
    paddingHorizontal: 50, // Margen horizontal
  },
  slide: {
    width: screenWidth - 60, // Ajusta el ancho para compensar el mayor margen
    height: 140,
    borderRadius: 15,
    overflow: "hidden",
    marginHorizontal: 20, // Aumenta el margen entre slides
  },
  image: {
    width: "100%",
    height: "100%",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default PromoCarousel;