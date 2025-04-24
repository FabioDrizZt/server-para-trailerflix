const fs = require('fs')
const path = require('path')
const { getContentType } = require('../utils/contentType')

// Objeto para almacenar las rutas
const routes = {
  // Ruta principal
  '/': (req, res) => {
    fs.readFile('./index.html', (error, content) => {
      if (error) {
        res.writeHead(500)
        res.end('Error interno del servidor')
        return
      }
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(content, 'utf-8')
    })
  },

  // Ruta para archivos estáticos
  '/static': (req, res) => {
    const filePath = '.' + req.url
    fs.readFile(filePath, (error, content) => {
      if (error) {
        res.writeHead(404)
        res.end('Archivo no encontrado')
        return
      }
      res.writeHead(200, { 'Content-Type': getContentType(filePath) })
      res.end(content, 'utf-8')
    })
  }
}

module.exports = routes
