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

app.post('/user', getVoterInfo, (request, response) => {
  // console.log(request.body);
  let data = {
    voterInfo: request.voterInfo
  };
  // console.log(data);

  response.end(JSON.stringify(data));
});

export default app;
