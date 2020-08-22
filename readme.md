## Instalacion de sequelize client interface
```
npm i -D -E sequelize-cli
```


## Iniciar proyecto con sequelize

```
sequelize init
```


## crear migraciones

```
sequelize migration:generate --name create-users
```

## ejecutar migraciones

```
sequelize db:migrate

npx sequelize-cli db:migrate
```

## Ejecutar rollback en migraciones

### elimina todas las tablas

```
node_modules/.bin/sequelize db:migrate:undo:all 
```

### elimina solo la ultima migracion ejecutada

```
node_modules/.bin/sequelize db:migrate:undo
```


## crear seeder

```
npx sequelize-cli seed:generate --name user
npx sequelize-cli seed:generate --name product
```

## Ejecutar o deshacer un solo seed en especial

```
npx sequelize-cli db:seed --seed name-of-seed-as-in-data
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
```

Ejecutar todos los seeders

```
npx sequelize-cli db:seed:all
```

## Deshacer todos los seed ejecutados

```
npx sequelize-cli db:seed:undo:all
```

## Crear modelos

```
npx sequelize-cli model:generate --name User --attributes product_name:string,product_price:string,product_photo:string
```
```
node_modules/.bin/sequelize model:create --name User --attributes 'firstname:string lastname:string'
```