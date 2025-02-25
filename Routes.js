// Routes.js
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

// Crea los navegadores
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define el Bottom Tabs Navigator
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Productos") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Carrito") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Login") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "black",
          borderRadius: 40,
          height: 70,
          position: "absolute",
          bottom: 30,
          width: "95%",
          marginLeft: "2.5%",
          elevation: 0,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Productos"
        component={ProductoScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Carrito"
        component={CarritoScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

// Define las rutas principales
const Routes = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={DetailsScreen } />
        <Stack.Screen name="Carrito" component={CarritoScreen } />
        <Stack.Screen name="Productos" component={ProductoScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
