# Servidor Web Básico con Node.js

Este es un ejemplo educativo de un servidor web básico implementado con Node.js sin usar Express. El objetivo es enseñar los conceptos fundamentales de servidores web.

## Características

- Servidor HTTP básico
- Arquitectura modular
- Manejo de diferentes tipos de archivos (HTML, CSS, JS, imágenes, JSON)
- Página de error 404 personalizada
- Sistema de rutas básico
- Manejo de tipos MIME
- Manejo de errores

## Estructura del Proyecto

```
.
├── index.js          # Punto de entrada de la aplicación
├── src/
│   ├── server/      # Configuración del servidor
│   │   └── server.js
│   └── routes/      # Manejo de rutas
│       └── routes.js
├── index.html       # Página principal
├── 404.html        # Página de error 404
├── css/            # Archivos CSS
├── js/             # Archivos JavaScript
├── images/         # Imágenes
└── posters/        # Posters de películas
```

## Conceptos Aprendidos

1. **Arquitectura Modular**: Separación de responsabilidades
2. **Módulo HTTP**: Creación de un servidor web básico
3. **Módulo Path**: Manejo de rutas de archivos
4. **Módulo FS**: Lectura de archivos del sistema
5. **Manejo de Errores**: Gestión de errores 404 y 500
6. **Tipos MIME**: Identificación y envío de diferentes tipos de contenido
7. **Rutas**: Manejo básico de rutas web

## Cómo Usar

1. Instalar Node.js si no está instalado
2. Clonar este repositorio
3. Ejecutar el servidor:
   ```bash
   node index.js
   ```
4. Abrir el navegador en `http://localhost:3000`

## Ejemplos de Uso

- Acceder a la página principal: `http://localhost:3000`
- Acceder a un archivo CSS: `http://localhost:3000/css/styles.css`
- Acceder a una imagen: `http://localhost:3000/images/example.jpg`
- Acceder a una ruta inexistente: `http://localhost:3000/ruta-inexistente`

## Notas para Estudiantes

Este servidor está diseñado para ser un ejemplo educativo. En un entorno de producción, se recomendaría usar frameworks como Express.js que proporcionan más funcionalidades y seguridad.

## Próximos Pasos

1. Implementar manejo de métodos HTTP (GET, POST, etc.)
2. Agregar manejo de formularios
3. Implementar autenticación básica
4. Agregar compresión de archivos
5. Implementar caché
