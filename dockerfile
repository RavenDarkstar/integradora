# Usa una imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /Users/ralan/src/app

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Instala Ionic y Cordova de forma global
RUN npm install -g @ionic/cli cordova

# Copia todos los archivos del directorio actual al directorio de trabajo en el contenedor
COPY . .

# Expone el puerto 8100 para acceder a la aplicación Ionic
EXPOSE 8100

# Ejecuta el comando "ionic serve" al iniciar el contenedor
CMD ["ionic", "serve", "--host=0.0.0.0"]