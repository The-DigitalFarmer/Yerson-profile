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

- `app/page.js` y `app/layout.js` definen la página principal y su layout.
- `app/vistas/normal/` contiene la navegación por desplazamiento, el menú móvil, la animación ASCII y sus estilos.
- `app/vistas/terminal/` contiene el directorio, el formulario de comandos y los estilos de la vista Terminal. El intérprete recibe texto y devuelve un resultado sin interactuar con el navegador.
- `app/vistas/compartidos/` contiene el contenido, las secciones, los estilos base y los hooks para leer el fragmento y recordar la sección de cada vista.
- `public/assets/` contiene los logos, las imágenes y las fuentes locales.
- `tests/` contiene las pruebas del portafolio.

Los sprites de Ferris y la ninfa son de
[Marc Duiker](https://marcduiker.dev/pixelart/) y vienen de
[VS Code Pets 1.37.0](https://github.com/tonybaloney/vscode-pets/tree/1.37.0/media).
La [licencia del proyecto de origen](public/assets/mascotas/LICENSE.vscode-pets.txt)
acompaña a los archivos.
