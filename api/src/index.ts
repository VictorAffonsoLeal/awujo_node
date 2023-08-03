import express from 'express';

const app = express();
const port = 8081

app.get('/', (req, res) => {
  res.send({'status':'true'})
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})