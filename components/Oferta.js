// components/Oferta.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Oferta = () => {
  // Estado para el tiempo restante
  const [timeLeft, setTimeLeft] = useState({
    hours: 20,
    minutes: 12,
    seconds: 56,
  });

  // Función para decrementar el tiempo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        // Decrementar los segundos
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              // Detener el temporizador cuando llegue a cero
              clearInterval(timer);
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000); // Actualizar cada segundo

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(timer);
  }, []);

  // Formatear el tiempo para mostrar siempre dos dígitos
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <View style={styles.container}>
      {/* Lado izquierdo: "Flash Sales" */}
      <Text style={styles.flashSalesText}>Flash Sales</Text>

      {/* Lado derecho: "Closing in:" y el reloj */}
      <View style={styles.timerContainer}>
        <Text style={styles.closingInText}>Closing in:</Text>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{formatTime(timeLeft.hours)}</Text>
        </View>
        <Text style={styles.colon}>:</Text>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{formatTime(timeLeft.minutes)}</Text>
        </View>
        <Text style={styles.colon}>:</Text>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{formatTime(timeLeft.seconds)}</Text>
        </View>
      </View>
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 20,
  },
  flashSalesText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  closingInText: {
    fontSize: 14,
    color: "#888",
    marginRight: 8,
  },
  timeBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#f0f0f0", // Fondo similar a las esferas de categoría
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
  timeText: {
    fontSize: 14,
    fontWeight: "bold",
    color:'#6b4f3b'
  },
  colon: {
    fontSize: 14,
    fontWeight: "bold",
    marginHorizontal: 4,
  },
});

export default Oferta;