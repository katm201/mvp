import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import getVoterInfo from './middleware/voterInfo';
import dbCheckEmail from './middleware/databaseCheck';
import getTweets from './middleware/tweetInfo';

const app = express();

app.use(bodyParser.json());

const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');

app.use(publicPath);

// serves our static index page
app.get('/', (request, response) => {
  response.sendFile(indexPath);
});

app.use(dbCheckEmail);
app.use(getVoterInfo);
app.use(getTweets);

app.get('/users', (request, response) => {
  let data = {
    voterInfo: request.voterInfo,
    address: request.query.address,
    tweets: request.tweets
  };

  response.end(JSON.stringify(data));
});

app.post('/users', (request, response) => {
  let data = {
    voterInfo: request.voterInfo,
    address: request.query.address,
    tweets: request.tweets
  };

  response.end(JSON.stringify(data));
});

export default app;
