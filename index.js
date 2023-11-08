const PORT = process.env.PORT || 3001;
const {createServer} = require('http');
const next = require('next');
const routes = require('./routes.js');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);
require('dotenv').config();


app.prepare().then(() => {
    createServer(handler).listen(PORT, err => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});