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
para comprobar la animación ASCII. Para iniciar la versión de producción,
ejecuta `npm run build` y después `npm start`.

## Estructura

- `app/page.js` y `app/layout.js` definen la página principal y su layout.
- `app/vistas/normal/` contiene la navegación, la animación ASCII y los estilos de la vista Normal.
- `app/vistas/terminal/` contiene la consola, el arte ASCII y los estilos de la vista Terminal.
- `app/vistas/compartidos/` contiene las secciones, el contenido, los estilos base y la lógica para cambiar de vista.
- `public/assets/` contiene los logos, las imágenes y las fuentes locales.
- `tests/` contiene las pruebas del portafolio.

Los sprites de Ferris, el pato de goma y la ninfa son de
[Marc Duiker](https://marcduiker.dev/pixelart/) y vienen de
[VS Code Pets 1.37.0](https://github.com/tonybaloney/vscode-pets/tree/1.37.0/media).
La [licencia del proyecto de origen](public/assets/mascotas/LICENSE.vscode-pets.txt)
acompaña a los archivos.
