import supertest from 'supertest';
import getPort from 'get-port';

const timeout = 30000;
console.debug(`setting time out to ${timeout}`);
jest.setTimeout(timeout);

const app = require('../../main/typescript/app/server');

describe('server', () => {
    let httpServer;

    beforeAll(async () => {
        const port = await getPort();
        console.debug(`Free port: ${port}`);
        process.env.PORT = port;

        httpServer = await app;
        expect(httpServer).toBeDefined();
        console.log(`httpServer initialized successfully`);
    });

    it('serves the "/" page of the Next.js app', () => {
        return supertest(httpServer)
            .get('/')
            .expect(200);
    });

    it('should return 404 when requesting non existent page', () => {
        // given
        const url = '/someNonExistentPage';

        // then
        return supertest(httpServer)
            .get(url)
            .expect(404);
    });

    afterAll(async () => await httpServer.close());
});