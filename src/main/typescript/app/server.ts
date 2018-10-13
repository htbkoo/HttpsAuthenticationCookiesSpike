const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => handle(req, res));

        // The port that app would listen on
        const port: number = getPortFromEnvOrElse(3000);
        server.listen(port, (err: Error) => {
            if (err) {
                throw err;
            } else {
                console.log(`> Ready on http://localhost:${port}`);
            }
        })
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