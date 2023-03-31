# Buscador de peliculas

API con operaciones tipo CRUD, que permite buscar y modificar los datos de peliculas utilizando:

# TECNOLOGIAS

- Nodejs
- Koa
- Joi
- MongoDB
- Docker

# REQUSITOS

Tener docker instalado

# DOCKER

ejecutar : `docker-compose up` en linea de comandos, esto levantara toda la solucion en localhost.
en caso de error de presmisos `chmod +x mongo--seed/run.sh`

# PARA REVISAR LA DOCUMENTACION DE LA API

Esta documentacion es "REFERENCIAL" para facilitar su lectura, se puede abrirl el contenido del archivo `./api-swagger.yml ` en el sitio de https://editor.swagger.io/

# OBSERVACION

Para desarrollar o probar la solucion se debe modificar la url y debe ser `localhost:port`, en modo ejecucion la url debe ser `mongodb:port` en el backend archivo `/config/enviroment.js`

# CODIGO FUENTE

https://gitlab.com/challenge-clay/backend.git

# ESTRUCTURA GENERAL DEL PROYECTO

```
-- mongo-seed
-- src
---- api
---- config
---- models
---- mongo
---- route
---- serve.js
api-swagger
docker-compose.yml
dockerfile
readme.md
package-lock.json
package.json
gitignore
desafio movies.postman_collection
```
