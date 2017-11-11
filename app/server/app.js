import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import getVoterInfo from './middleware/voterInfo';
// import dotenv from 'dotenv';

// dotenv.config();
// console.log(process.env.GOOGLE)

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
  console.log(request.body);
  response.end();
});

export default app;
