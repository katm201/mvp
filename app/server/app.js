import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import getVoterInfo from './middleware/voterInfo';

const app = express();

app.use(bodyParser.json());

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(publicPath);

// serves our static index page
app.get('/', (request, response) => {
  response.sendFile(indexPath);
});

app.get('/user', getVoterInfo, (request, response) => {
  let data = {
    voterInfo: request.voterInfo
  };

  response.end(JSON.stringify(data));
});

app.post('/user', getVoterInfo, (request, response) => {
  let data = {
    voterInfo: request.voterInfo
  };

  response.end(JSON.stringify(data));
});

export default app;
