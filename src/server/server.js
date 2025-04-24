const http = require('http')
const fs = require('fs')
const path = require('path')
const routes = require('../routes/routes')
const { getContentType } = require('../utils/contentType')

// Configuración del servidor
const PORT = 3000
const HOST = 'localhost'

// Función para manejar las solicitudes
const handleRequest = (req, res) => {
  console.log(`Solicitud recibida: ${req.url}`)

  // Construir la ruta del archivo
  let filePath = '.' + req.url
  if (filePath === './') {
    filePath = './index.html'
  }

  // Leer el archivo solicitado
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // Archivo no encontrado
        fs.readFile('./404.html', (err, content) => {
          res.writeHead(404, { 'Content-Type': 'text/html' })
          res.end(content, 'utf-8')
        })
      } else {
        // Error del servidor
        res.writeHead(500)
        res.end(`Error del servidor: ${error.code}`)
      }
    } else {
      // Éxito
      res.writeHead(200, { 'Content-Type': getContentType(filePath) })
      res.end(content, 'utf-8')
    }
  })
}

// Crear el servidor
const server = http.createServer(handleRequest)

// Función para iniciar el servidor
const start = () => {
  server.listen(PORT, HOST, () => {
    console.log(`Servidor ejecutándose en http://${HOST}:${PORT}/`)
  })
}

module.exports = {
  start
}
