const path = require('path');
const fs = require('fs');

const rutaPublica = path.join(__dirname, 'public');
const rutaAbsoluta = path.resolve(__dirname, 'public');
console.log('Este script se ejecuta en el directorio:', __dirname);
console.log('La ruta pública es:', rutaPublica);
console.log('La ruta absoluta es:', rutaAbsoluta);

const nombreArchivo = path.basename('/home/jesus/Documentos/NodeJS/ejercicios/index.js');
console.log('El nombre del archivo es:', nombreArchivo);
const extensionArchivo = path.extname('/home/jesus/Documentos/NodeJS/ejercicios/index.js');
console.log('La extensión del archivo es:', extensionArchivo);

const rutaHtml = path.join(__dirname, 'trailerflix', 'index.html');

fs.readFile(rutaHtml, 'utf-8', (error, contenido) => {
  if (error) {
    console.error('Error al leer el archivo:', error);
    return;
  } // else no es necesario ya que antes hay un return
  // Si no hay error, se imprime el contenido del archivo
  console.log('Contenido del archivo HTML:', contenido);
})
//readfileSync es sincrono y no se recomienda usarlo en un servidor
/* const contenidoHtml = fs.readFileSync(rutaHtml, 'utf-8');
console.log('Contenido del archivo HTML:', contenidoHtml); */

console.log('Solicitud de lectura de archivo HTML enviada...');
console.log('Esperando respuesta...');