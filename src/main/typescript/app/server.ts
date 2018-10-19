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

        // POST handler
        server.post("/login", (req, res) => {
            console.log('trying to login');

            // refernce: https://stackoverflow.com/a/33905671
            // -----------------------------------------------------------------------
            // authentication middleware

            const auth = {login: 'l', password: 'p'}; // change this

            // parse login and password from headers
            const {login, password} = parseLoginAndPassword(req);

            // Verify login and password are set and correct
            if (!login || !password || login !== auth.login || password !== auth.password) {
                res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
                res.status(401).send('Authentication required.'); // custom message
                return
            }

            // -----------------------------------------------------------------------
            // Access granted...
            // next();
            return res.json({successful: "true"});

            function parseLoginAndPassword(req) {
                // parse login and password from headers
                const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
                const strauth = new Buffer(b64auth, 'base64').toString();
                const splitIndex = strauth.indexOf(':');
                const login = strauth.substring(0, splitIndex);
                const password = strauth.substring(splitIndex + 1);

                // Don't use .split(':') because it will choke on passwords containing at least one colon. Such passwords are valid according to RFC 2617
                // reference: https://stackoverflow.com/questions/23616371/basic-http-authentication-with-node-and-express-4#comment84211450_33905671
                // const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
                // const [login, password] = new Buffer(b64auth, 'base64').toString().split(':');
                return {login, password};
            }
        });

        // The port that app would listen on
        const port: number = getPortFromEnvOrElse(3000);
        const credentials = {
            key: fs.readFileSync('certificates/key.pem').toString(),
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
    let port = getFieldFromEnvOrElse("PORT", defaultPort.toString());
    let portAsInt = parseInt(port);
    if (!isNaN(portAsInt)) {
        return portAsInt;
    }
    return defaultPort;
}

function getFieldFromEnvOrElse(field: string, defaultValue: string): string {
    let value = process.env[field];
    if (value) {
        return value;
    }
    return defaultValue;
}