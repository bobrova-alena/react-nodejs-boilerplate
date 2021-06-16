import express from 'express';

const app = express();
const port = 3080;

// place holder for the data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const count = 0;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.get('/api/data', (req: any, res: any) => {
  console.log('api/data called!');
  res.json({
    count,
  });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.post('/api/data', (req: any, res: any) => {
  const count = req.body.count;
  console.log('Setting count...', count);
  count.push(count);
  res.json('Count setted');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
