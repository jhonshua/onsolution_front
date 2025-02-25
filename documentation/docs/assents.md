# Recursos Estáticos en front_onsolution (assets/)

El directorio `assets/` contiene todos los recursos estáticos utilizados en la aplicación `front_onsolution`. Estos recursos incluyen imágenes, iconos y otros archivos que no cambian durante la ejecución de la aplicación.

## Estructura del Directorio

El directorio `assets/` está organizado en subdirectorios para facilitar la gestión de los recursos:

* **`icons/`**: Contiene iconos utilizados en la interfaz de usuario.
* **`img/`**: Contiene imágenes utilizadas en la aplicación, como imágenes de productos, logotipos y fondos.

## Tipos de Recursos

### Iconos

Los iconos se utilizan para mejorar la usabilidad y la apariencia de la interfaz de usuario. Se utilizan en botones, barras de navegación y otros elementos de la interfaz.

* **Formato**: Los iconos se almacenan generalmente en formato `.png` o `.svg`.
* **Uso**: Los iconos se importan y utilizan en los componentes de React Native como cualquier otro recurso estático.

### Imágenes

Las imágenes se utilizan para mostrar contenido visual en la aplicación, como imágenes de productos, logotipos y fondos.

* **Formato**: Las imágenes se almacenan en formatos comunes como `.png`, `.jpg` o `.jpeg`.
* **Uso**: Las imágenes se importan y utilizan en los componentes de React Native como cualquier otro recurso estático.

## Uso de los Recursos

Para utilizar los recursos estáticos en los componentes de React Native, se importan utilizando la sintaxis `import` y se utilizan en los componentes como cualquier otro recurso estático.

```javascript
import React from 'react';
import { Image } from 'react-native';
import logo from '../assets/img/logo.png';

function MiComponente() {
  return <Image source={logo} style={{ width: 100, height: 100 }} />;
}