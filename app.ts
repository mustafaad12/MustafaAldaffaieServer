import express, { type Express, type Request, type Response } from 'express';
import { UserRoutes } from './routes/userRoutes.ts';

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', new UserRoutes().router);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use((req: Request, res: Response) => {
    res.status(404).send('404 not found');
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});