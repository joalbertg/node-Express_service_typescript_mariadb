# Express/Node Service with Typescript and MariaDB

### Installs

With `package.json` and dependencies
```shell
docker-compose run app yarn
```

Without dependencies
```shell
docker-compose run app yarn express
docker-compose run app yarn add nodemon typescript @types/express copyfiles --dev
```

> run `npm install -g typescript`

> run `tsc -v`

> run `tsc --init` output `tsconfig.json`

```json
// tsconfig.json
...
// "outFile": "./",                       /* Concatenate and emit output to single file. */
"outDir": "./dist",                       /* Redirect output structure to the directory. */
// "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
...
```
> run `tsc` output `./dist/index.js`

### Build Project

> run `docker-compose run app yarn build`

### Start Project

> run `docker-compose up`

### Project Structure

> run `tree -I "node_modules|data|dist|screenshots"`
```shell
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── package.json
├── src
│   ├── index.ts
│   ├── mariadb
│   │   ├── index.ts
│   │   └── mariadb.ts
│   ├── public
│   │   └── index.html
│   ├── router
│   │   └── index.ts
│   └── server
│       ├── index.ts
│       └── server.ts
├── tsconfig.json
├── yarn-error.log
└── yarn.lock

5 directories, 14 files
```

### App service

> `localhost:8080` you can change the port in `docker-compose.yml` file `<host-port>:3000`

### Adminer sevice

> `localhost:8081` you can change the port in `docker-compose.yml` file `<host-port>:8080`

<p align="center">
  <kbd>
    <img src="screenshots/login-adminer.png" title="Adminer"  width="600px" height="auto">
  </kbd>
</p>

### SQL

```sql
-- Adminer 4.7.7 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

CREATE DATABASE `mydb` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */;
USE `mydb`;

DROP TABLE IF EXISTS `heroes`;
CREATE TABLE `heroes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `skill` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `heroes` (`id`, `name`, `skill`) VALUES
(1,	'Iroman',	'Dinero e ingeniería'),
(2,	'Hulk',	'Rayos Gamma'),
(3,	'Warmachine',	'Ser amigo de Tony Start'),
(4,	'Spiderman',	'Poderes de araña');

-- 2020-06-15 05:38:30
```

### `localhost:8080/heroes`

```json
{
  "ok": true,
  "heroes": [
    {
      "id": 1,
      "name": "Iroman",
      "skill": "Dinero e ingeniería"
    },
    {
      "id": 2,
      "name": "Hulk",
      "skill": "Rayos Gamma"
    },
    {
      "id": 3,
      "name": "Warmachine",
      "skill": "Ser amigo de Tony Start"
    },
    {
      "id": 4,
      "name": "Spiderman",
      "skill": "Poderes de araña"
    }
  ]
}
```

### `localhost:8080/heroes/1`

```json
{
  "ok": true,
  "heroe": [
    {
      "id": 1,
      "name": "Iroman",
      "skill": "Dinero e ingeniería"
    }
  ]
}
```

