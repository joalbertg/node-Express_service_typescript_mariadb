import { Server } from './server';
import Router from './router';
//import pool from './mysql/mariadb';
import { MariaDB } from './mariadb';

const PORT = 3000;
const server = Server.init(PORT);

//const mariadb = new MariaDB();
// singleton pattern
MariaDB.instance;
MariaDB.instance.pool.query("select * from heroes").then(console.log).catch(console.log);

server.app.use(Router);
server.start(() => console.log(`Running in port ${PORT}`));

