import Server from './server/server';

const PORT = 3000;
const server = Server.init(PORT);

server.start(() => console.log(`Running in port ${PORT}`));

