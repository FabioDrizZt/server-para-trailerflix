const path = require('path')

const getContentType = (filePath) => {
  const extname = path.extname(filePath)
  switch (extname) {
    case '.html':
      return 'text/html'
    case '.css':
      return 'text/css'
    case '.js':
      return 'text/javascript'
    case '.json':
      return 'application/json'
    case '.png':
      return 'image/png'
    case '.jpg':
      return 'image/jpg'
    default:
      return 'text/plain'
  }
}

module.exports = {
  getContentType
}
