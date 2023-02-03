# Pasos para ejecutar esta aplicacion

1. Descargar el repositorio
2. Para ejecutar con docker hay que construir la imagen ejecutando el comando ` docker build . -t post-aplication `
3. Luego de construir la imagen hay que ejecutarla con el comando ` docker run -p 3000:3000 -d post-aplication`
4. Para poder ver la aplicacion en el navegador dirigirse a la ruta [http://localhost:3000/](http://localhost:3000/)