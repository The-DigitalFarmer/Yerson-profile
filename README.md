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

Abre el [portafolio en localhost](http://localhost:/). Ejecuta `npm test`
para comprobar la animación ASCII. Para iniciar la versión de producción,
ejecuta `npm run build` y después `npm start`.

## Estructura

- `app/page.js` y `app/layout.js` definen la página principal y su layout.
- `app/componentes/` contiene las secciones y los controles de la interfaz.
- `app/contenido/` reúne el contenido de las secciones, la navegación y los enlaces de contacto.
- `app/logica/` contiene la lógica de la animación ASCII y las preferencias de tema.
- `app/estilos/` contiene los estilos por sección y los temas claro y oscuro.
- `public/assets/` contiene los logos, las imágenes y las fuentes locales.
- `tests/` contiene las pruebas del portafolio.
