import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = 3080;

// place holder for the data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let number = 10;

app.use(bodyParser.json());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.get('/api/data', (_req: any, res: any) => {
  console.log('api/data called!');
  res.json(
    JSON.stringify({
      number,
    })
  );
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.post('/api/data', (req: any, res: any) => {
  const value = <number>req.body.number;
  console.log('Setting number...', value);
  number = value;
  res.json('Number setted');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
