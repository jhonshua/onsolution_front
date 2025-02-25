# Manejo de Datos en front_onsolution

Este documento describe cómo se manejan los datos en el proyecto `front_onsolution`, incluyendo la estructura de `data.json`, el uso de `CartContext.js` y la lógica de carga y filtrado de datos en `HomeScreen.js`.

## `data.json`: Simulación de Datos de API

El archivo `data.json` se utiliza para simular la respuesta de una API. Contiene un array de objetos `data`, donde cada objeto representa un producto con la siguiente estructura:

```json
{
  "data": [
    {
      "url": "URL_de_la_imagen",
      "name": "Nombre del producto",
      "categoria": "Categoría del producto",
      "precio": Precio del producto,
      "filtros": ["Filtro 1", "Filtro 2"],
      "nota": "Descripción del producto",
      "color": ["Color 1", "Color 2"],
      "puntuacion": Puntuación del producto
    },
    // ... otros productos
  ]
}

```
## Gestión del Carrito de Compras en front_onsolution

Este documento describe cómo se gestiona el carrito de compras en el proyecto `front_onsolution`, utilizando `CartContext.js` para mantener el estado del carrito accesible en toda la aplicación.

## `CartContext.js`: Contexto del Carrito de Compras

El archivo `CartContext.js`, ubicado en `context/CartContext.js`, utiliza el `Context API` de React para proporcionar un mecanismo centralizado de gestión del carrito de compras.

### Estructura de `CartContext.js`

```javascript
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

```

