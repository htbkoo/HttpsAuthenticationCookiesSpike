import express from 'express';

// Import WelcomeController from controllers entry point
import {WelcomeController} from "./controllers/welcome";

// Create a new express application instance
const app: express.Application = express();

// The port that app would listen on
const port: number = getPortFromEnvOrElse(3000);

// Mount the WelcomeController at the /welcome router
app.use('/welcome', WelcomeController);

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}`);
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