import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';

const app = express();
const port = 3080;

// place holder for the data
let number = 10;

app.use(bodyParser.json());

app.get('/api/data', (_req: Request, res: Response) => {
  res.json(
    JSON.stringify({
      number,
    })
  );
});

app.post('/api/data', (req: Request, res: Response) => {
  const value = <number>req.body.number;
  number = value;
  res.json('Number setted');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
