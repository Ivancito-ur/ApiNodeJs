# CRUD - APIREST

![N|Solid](https://miro.medium.com/max/600/1*ay9nx1XdZ3AOzx5Ev8xJEg.png)

Esta aplicacion fue realizada en Nodejs con persistencia de datos en mongoDb

## 🛠 Caracteristicas

- Guardar ususarios, productos y ventas
- Edita ususarios, productos y ventas
- Buscar ususarios, productos y ventas
- Listar ususarios, productos y ventas
- Eliminar ususarios, productos y ventas

## Tecnologias

* [Node.js](https://nodejs.org/) es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.

* [Mongo DB](https://www.mongodb.com/es) es una base de datos distribuida, basada en documentos y de uso general que ha sido diseñada para desarrolladores de aplicaciones modernas y para la era de la nube. Ninguna otra ofrece un nivel de productividad de uso tan alto

* [Postman](https://www.postman.com/downloads/) es una aplicación que nos permite realizar pruebas API. Es un cliente HTTP que nos da la posibilidad de testear 'HTTP requests' a través de una interfaz gráfica de usuario, por medio de la cual obtendremos diferentes tipos de respuesta que posteriormente deberán ser validados

## Instalacion Local
Primero  debemos instalar  [Node.js](https://nodejs.org/) en nuestro equipo.

Clonar el proyecto

```bash
  git clone https://github.com/gabrielgarcia2211/ApiRestNodejs.git
```

ir al directorio del proyecto

```bash
  cd my-project
```

Luego se Instala/Actualiza las dependencias npm en la terminal del proyecto.

```sh
  npm i
```
Luego nos dirigimos al archivo  `package.json`
y cambiamos el siguiente script 

```sh
 "scripts": {
    "start": "node index.js"
 },
 Cambiamos la linea start por la siguiente
 "dev": "set DEBUG=app:* & nodemon index.js"
```

Corremos el proyecto a traves del siguiente comando.

```sh
  npm run dev
```
Verifique la implementación navegando a la dirección de su servidor en
su navegador preferido.

```sh
  http://localhost:3000/
```
## Navegacion

`Pare enviar data en el body a las peticiones POST utilizamos POSTMAN`

Peticiones a la coleccion productos

**Peticion GET, traer todos los productos**
```sh
http://localhost:3000/api/products/
```
**Peticion GET, traer un producto, a través de un parametro id en la url**
```sh
http://localhost:3000/api/products/{id}
```
**Peticion POST, crear un producto**
```sh
http://localhost:3000/api/products/
```
**Peticion POST, actualizar un producto**
```sh
http://localhost:3000/api/products/update
```
**Peticion POST, eliminar un producto, a través de un parametro id en la url**
```sh
http://localhost:3000/api/products/{id}
```

> Note: `Para las peticiones POST, se requiere un cliente para consumirla` se recomienda utilizar POSTMAN.


**Ejemplo para crear producto**
```sh
opción BODY - RAW
{
    "nombre": "camisas",
    "precio": 50,
    "cantidad": 232
}
```
**Ejemplo para editar producto**
```sh
opción BODY - RAW
{
    "_id": "61715ba2db616a0305998fc8",
    "name": "camisas exito",
    "precio": 501,
    "cantidad": 2321
}
```

## 🔗 Links
**Despliegue del ApiRest**

[![debug](https://img.icons8.com/color/0/heroku.png)](https://apirest-nod.herokuapp.com/)


## License

MIT

**SOFTWARE LIBRE**