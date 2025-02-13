// App.js
import React from 'react';
import { View } from 'react-native';
import Routes from './Routes';
import { CartProvider } from "./context/CartContext";


export default function App() {
  return (
    <CartProvider>
       <View style={{ flex: 1 }}>
          <Routes />
      </View>
    </CartProvider>
 
  );
}