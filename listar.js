const fs = require('fs');
const path = require('path');

// Función para listar directorios y sus archivos sin incluir node_modules
function listDirectories(dirPath) {
  // Obtenemos los items del directorio
  const items = fs.readdirSync(dirPath);

  items.forEach(item => {
    // Excluimos 'node_modules' de la lista
    if (item === 'node_modules') return;

    const fullPath = path.join(dirPath, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      console.log(`Directory: ${fullPath}`);
      listDirectories(fullPath); // Recursión para explorar subdirectorios
    } else if (stats.isFile()) {
      console.log(`File: ${fullPath}`);
    }
  });
}

// Ruta del proyecto
const projectDir = path.join(__dirname, ''); // El directorio raíz de tu proyecto

// Llamar a la función
listDirectories(projectDir);
