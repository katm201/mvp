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

// serves up our home page for the user, if they log in
app.get('/user', (request, response) => {
  response.sendFile(indexPath);
});

// serves up our home page for unlogged-in users
app.get('/users', getVoterInfo, (request, response) => {
  let data = {
    voterInfo: request.voterInfo
  };

  response.end(JSON.stringify(data));
});

// allows searches for logged in user
app.post('/user', getVoterInfo, (request, response) => {
  let data = {
    voterInfo: request.voterInfo
  };

  response.end(JSON.stringify(data));
});

// allows searches for anonymous users
// app.post('/users', getVoterInfo, (request, response) => {
//   let data = {
//     voterInfo: request.voterInfo
//   };

//   response.end(JSON.stringify(data));
// });

export default app;
