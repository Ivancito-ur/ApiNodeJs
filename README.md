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
## Rutas
`Para enviar data en el body a las peticiones POST utilizamos POSTMAN`
### Navegacion en Productos

Peticiones a la coleccion productos

**Peticion GET, traer todos los productos**
```sh
http://localhost:3000/api/products/
```
**Peticion GET, traer un producto, a través de un parametro id en la url**
```sh
http://localhost:3000/api/products/{id}
```
**Peticion GET, reporte ene excel, se recomienda utilizar POSTMAN**
`Para generar el excel, hacemos click en SEND SEND AN DOWNLOAD`
```sh
http://localhost:3000/api/products/report
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

**Ejemplo para crear producto**
```sh
Opción BODY - RAW - TypeJSON
{
    "nombre": "camisas",
    "precio": 50,
    "cantidad": 232
}
```
**Ejemplo para editar producto**
```sh
Opción BODY - RAW - TypeJSON
{
    "_id": "61715ba2db616a0305998fc8",
    "nombre": "camisas exito",
    "precio": 501,
    "cantidad": 2321
}
```

### Navegacion en Usuarios

Peticiones a la coleccion usuarios

**Peticion GET, traer todos los usuarios**
```sh
http://localhost:3000/api/user/
```
**Peticion GET, traer un usuario, a través de un parametro id en la url**
```sh
http://localhost:3000/api/user/{id}
```
**Peticion POST, crear un usuario**
```sh
http://localhost:3000/api/user/
```
**Peticion POST, actualizar un usuario**
```sh
http://localhost:3000/api/user/update
```
**Peticion POST, eliminar un usuario, a través de un parametro id en la url**
```sh
http://localhost:3000/api/user/{id}
```

**Ejemplo para crear usuario**
```sh
Opción BODY - RAW - TypeJSON
{
    "nombre": "Juan",
    "apellido": "Quintero",
    "direccion": "Calle 66",
    "edad": 20
}
```
**Ejemplo para editar usuario**
```sh
Opción BODY - RAW - TypeJSON
{
    "_id": "61715ba33b616a0305998f431",
    "nombre": "Juan Felipe",
    "apellido": "Garcia",
    "direccion": "Calle 65",
    "edad": 22
}
```

### Navegacion en Ventas

Peticiones a la coleccion ventas

**Peticion GET, traer todos las ventas**
```sh
http://localhost:3000/api/sales/
```
**Peticion GET, traer una venta, a través de un parametro id en la url**
```sh
http://localhost:3000/api/sales/{id}
```
**Peticion POST, crear una venta**
```sh
http://localhost:3000/api/sales/
```
**Peticion POST, actualizar una venta**
```sh
http://localhost:3000/api/sales/update
```
**Peticion POST, eliminar una venta, a través de un parametro id en la url**
```sh
http://localhost:3000/api/sales/{id}
```

**Ejemplo para crear una venta **
```sh
Opción BODY - RAW - TypeJSON
{ 
    "idFrom": "6174ac7e7ca5c005bd26d389",
    "message": "Muy bien, gracias" 
}

```
**Ejemplo para editar una venta**
```sh
Opción BODY - RAW - TypeJSON
{   
    "_id": "6174ad227ca5c005bd26d38a",
    "idFrom": {
         "_id": "6174ac7e7ca5c005bd26d389",
        "nombre": "Juan Quintero",
        "apellido": "Hernandez",
        "direccion": "Calle Comun",
        "edad": 26
    }, 
    "message": "Muy bien ING, gracias" 
}
```

## 🔗 Links
**Despliegue del ApiRest**

[![debug](https://img.icons8.com/color/0/heroku.png)](https://apirest-nod.herokuapp.com/)  [![debug](https://img.icons8.com/color/48/000000/amazon-web-services.png)](http://18.235.152.56:3000/)


## License

MIT

**SOFTWARE LIBRE**
