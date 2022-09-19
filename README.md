# RIFA YAKULT

## Instrucciones

Instalar las dependencias del proyecto

```
npm install
```

Crear una base de datos local con el siguiente nombre

```
yakult
```

El archivo .env debe modificarse con los parametros 

```
NODE_ENV=development
    EXPRESS_PORT=3000

DB_DEVELOPMENT_HOST=127.0.0.1
DB_DEVELOPMENT_PORT=3306
DB_DEVELOPMENT_NAME=yakult
DB_DEVELOPMENT_USER=root
DB_DEVELOPMENT_PASSWORD=root

DB_PRODUCTION_HOST=127.0.0.1
DB_PRODUCTION_PORT=3306
DB_PRODUCTION_NAME=yakult
DB_PRODUCTION_USER=root
DB_PRODUCTION_PASSWORD=root
```

Crear la tabla para almacenar la base de datos

```
knex migrate:latest
```

Rellenamos la tabla con las seeds 

```
knex seed:run
```

Correr el proyecto con el comando:

```
npm run devstart
```
