import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(publicPath);

// serves our static index page
app.get('/', (request, response) => {
  response.sendFile(indexPath);
});

app.post('/user', (request, response) => {
  console.log(request.body);
  response.end();
})

export default app;
