# Yerson-profile

Portafolio personal de **Yerson Cabrera Landa**, enfocado en desarrollo backend,
APIs y automatización.

[GitHub](https://github.com/The-DigitalFarmer) ·
[LinkedIn](https://www.linkedin.com/in/yerson-cabrera-88439b401/)

## Ejecutar en local

Requiere Node.js 20.9 o posterior.

```sh
npm ci
npm run dev
```

Abre el [portafolio en localhost](http://localhost:3000/). Ejecuta `npm test`
para comprobar la animación ASCII, los comandos de la terminal y la selección
de vista. Para iniciar la versión de producción, ejecuta `npm run build` y
después `npm start`.

## Estructura

- `app/page.js` carga `app/portafolio/Portafolio.js`, que compone la cabecera, las secciones y el pie de página. `app/layout.js` carga los estilos globales e inicializa la vista guardada.
- `app/portafolio/secciones/` reúne el componente, los datos propios y los estilos de cada sección, incluidos sus ajustes de Terminal.
- `app/portafolio/navegacion/` define los identificadores de sección y coordina el fragmento de la URL y el cambio de vista. `app/portafolio/tema/` gestiona la preferencia de vista.
- `app/portafolio/normal/` contiene la navegación por desplazamiento, el menú móvil y la animación ASCII. `app/portafolio/terminal/` contiene el directorio, el formulario y el intérprete de comandos.
- `app/portafolio/estilos/portafolio.css` fija el orden de carga de los estilos base y los ajustes de Terminal.
- `public/assets/` contiene los logos, las imágenes y las fuentes locales.
- `tests/` contiene las pruebas del portafolio.
