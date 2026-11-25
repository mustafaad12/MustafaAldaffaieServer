import express, { type Express, type Request, type Response } from 'express';
import bodyParser from 'body-parser'

const app: Express = express();
const port = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use((req: Request, res: Response) => {
    res.send('404 not found')
})

app.listen(port, () => {
    console.log('app is running on the port ' + port)
});