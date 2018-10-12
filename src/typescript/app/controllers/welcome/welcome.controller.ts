import {Router, Request, Response} from 'express';

// Assign router to the express.Router() instance
const router: Router = Router();

// The / here corresponds to the route that the WelcomeController is mounterd on in the server.ts file.
// In this case it's /welcome
router.get('/', (req: Request, res: Response) => res.send('Hello, World'));

router.get('/:name', (req: Request, res: Response) => res.send(`Hello, ${req.params.name}`));

export const WelcomeController: Router = router;