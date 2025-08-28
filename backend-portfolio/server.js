const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const port = app.get('port');

server.listen(port, 'localhost', () => {
    console.log(`Serveur démarré sur le port ${port}`);
});

server.on('error', (error) => {
    console.error('Erreur lors du démarrage du serveur', error);
});
