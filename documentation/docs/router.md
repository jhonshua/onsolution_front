# Configuración de Rutas en front_onsolution (Routes.js)

El archivo `Routes.js` es responsable de la configuración de la navegación en la aplicación `front_onsolution`. Utiliza `react-navigation` para definir las rutas y los navegadores, permitiendo a los usuarios navegar entre las diferentes pantallas de la aplicación.

## Estructura del Archivo

El archivo `Routes.js` utiliza dos tipos de navegadores:

* **`createBottomTabNavigator`**: Para la navegación principal mediante pestañas en la parte inferior de la pantalla.
* **`createStackNavigator`**: Para la navegación entre pantallas dentro de una pila, como la pantalla de detalles del producto.

### Importaciones

```javascript
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Para los íconos

// Importa tus pantallas
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import ProductoScreen from "./screens/ProductoScreen"
import CarritoScreen from "./screens/CarritoScreen";
import Login from "./screens/Login";

```

## react-navigation: Proporciona los componentes de navegación.

### Ionicons:
 
Utilizado para los íconos en la barra de pestañas.

Importación de las pantallas de la aplicación.
Navegador de Pestañas Inferiores (BottomTabs)

```javascript
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // ... lógica para seleccionar el ícono según la ruta
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          // ... estilos de la barra de pestañas
        },
        tabBarLabelStyle: {
          // ... estilos de las etiquetas de las pestañas
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab

```