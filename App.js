// App.js
import React from 'react';
import { View , StatusBar} from 'react-native';
import Routes from './Routes';
import { CartProvider } from "./context/CartContext";


export default function App() {
  return (
    <CartProvider>
       <View style={{ flex: 1 }}>
       <StatusBar
          backgroundColor="#fff" 
          barStyle="dark-content"
        />
          <Routes />
      </View>
    </CartProvider>
 
  );
}