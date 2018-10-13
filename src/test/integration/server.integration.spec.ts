import supertest from 'supertest';
import getPort from 'get-port';

const timeout = 30000;
console.debug(`setting time out to ${timeout}`);
jest.setTimeout(timeout);

const app = require('../../main/typescript/app/server');

xdescribe('server', () => {
    let httpServer;

    beforeAll(async () => {
        const port = await getPort();
        console.debug(`Free port: ${port}`);
        process.env.PORT = port;

        httpServer = await app;
        await supertest(httpServer).get('/').expect(404);
        await supertest(httpServer).get('/about').expect(200);

        expect(httpServer).toBeDefined();
        console.log(`httpServer initialized successfully`);
    });

    it('serves the "/about" page of the Next.js app', async () => {
        return supertest(httpServer)
            .get('/about')
            .expect(200);
    });

    it('serves the "/" page of the Next.js app', () => {
        return supertest(httpServer)
            .get('/')
            .expect(200)
            .then(response => {
                expect(response.text).toContain('My Blog')
            });
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