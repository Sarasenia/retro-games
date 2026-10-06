# Retro Games Store

Tienda de consolas retro creada con React, Vite y Bootstrap. Los productos se
cargan desde DummyJSON y se pueden agregar o quitar del carrito. El formulario
de contacto valida los datos localmente; todavía no envía mensajes.

## Requisitos

- Node.js y npm

## Desarrollo

Desde esta carpeta, instala las dependencias y ejecuta el servidor:

```sh
npm install
npm run dev
```

Comandos disponibles:

```sh
npm run build
npm run preview
npm run lint
```

Los estilos propios se importan después de Bootstrap en `src/main.jsx` para que
las reglas de la aplicación prevalezcan cuando tienen la misma especificidad.

## Datos e imágenes

Los productos se obtienen del endpoint de DummyJSON configurado en
`vite.config.js`; el proxy de desarrollo evita bloqueos CORS. Las imágenes se
sirven desde `public/img/`.
