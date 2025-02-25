# Componentes Reutilizables en front_onsolution (components/)

El directorio `components/` contiene componentes reutilizables que se utilizan en toda la aplicación `front_onsolution`. Estos componentes están diseñados para ser modulares y facilitar el desarrollo y mantenimiento de la interfaz de usuario.

## Componentes Principales

### `NavigationBar.js`

La `NavigationBar` es un componente que representa la barra de navegación superior de la aplicación. Proporciona funcionalidades como el título de la pantalla y botones de acción.


### `SearchBar.js`

El componente `SearchBar` es una barra de búsqueda que permite a los usuarios buscar productos.



### `PromoCarousel.js`

El componente `PromoCarousel` muestra un carrusel de promociones o imágenes destacadas.



### `Category.js`

El componente `Category` muestra una lista de categorías de productos.


### `Oferta.js`

El componente `Oferta` muestra información sobre ofertas especiales o descuentos.


El componente `FilterHome` proporciona filtros para los productos mostrados en la pantalla principal.


### `ProductGrid.js`

El componente `ProductGrid` muestra una cuadrícula de productos.


## Uso de los Componentes

Para utilizar estos componentes en otras partes de la aplicación, simplemente impórtalos y úsalos como cualquier otro componente de React.

```javascript
import NavigationBar from '../components/NavigationBar';

function MiPantalla() {
  return (
    <>
      <NavigationBar title="Mi Pantalla" />
      {/* ... otros componentes */}
    </>
  );
}