import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import getVoterInfo from './middleware/voterInfo';
import dbCheckEmail from './middleware/databaseCheck';

const app = express();

app.use(bodyParser.json());

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(publicPath);

// serves our static index page
app.get('/', (request, response) => {
  response.sendFile(indexPath);
});

// serves up our home page for unlogged-in users
app.get('/users', dbCheckEmail, getVoterInfo, (request, response) => {
  let data = {
    voterInfo: request.voterInfo,
    address: request.query.address
  };

  response.end(JSON.stringify(data));
});

// allows searches
app.post('/users', dbCheckEmail, getVoterInfo, (request, response) => {
  let data = {
    voterInfo: request.voterInfo,
    address: request.query.address
  };

  response.end(JSON.stringify(data));
});

export default app;
