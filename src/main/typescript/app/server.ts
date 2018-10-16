const express = require('express');
const next = require('next');
const https = require('https');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

// exported for tests
module.exports = app.prepare()
    .then(() => {
        console.log('setting up express server');
        const server = express();

        server.get('/p/:title', (req, res) => {
            const actualPage = '/post';
            const queryParams = {title: req.params.title};
            return app.render(req, res, actualPage, queryParams);
        });

        server.get('/s/:id', (req, res) => {
            const actualPage = '/show';
            const queryParams = {id: req.params.id};
            return app.render(req, res, actualPage, queryParams);
        });

        server.get('*', (req, res) => {
            console.log(`received GET request for ${req.originalUrl}`);
            return handle(req, res);
        });

        // The port that app would listen on
        const port: number = getPortFromEnvOrElse(3000);
        const credentials = {
            key:fs.readFileSync('certificates/key.pem').toString(),
            cert: fs.readFileSync('certificates/key-cert.pem').toString()
        };
        const options = {
            ...credentials
        };
        https.createServer(options, server).listen(port, (err: Error) => {
            if (err) {
                throw err;
            } else {
                console.log(`> Ready on http://localhost:${port}`);
            }
        });

        // exported for tests
        return server;
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1)
    });

function getPortFromEnvOrElse(defaultPort: number): number {
    let port = process.env.PORT;
    if (port) {
        let portAsInt = parseInt(port);
        if (!isNaN(portAsInt)) {
            return portAsInt;
        }
    }
    return defaultPort;
}