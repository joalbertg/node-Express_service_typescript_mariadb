import { Server } from './server';
import Router from './router';

const PORT = 3000;
const server = Server.init(PORT);

server.app.use(Router);
server.start(() => console.log(`Running in port ${PORT}`));

