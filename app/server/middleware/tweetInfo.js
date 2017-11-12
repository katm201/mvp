import axios from 'axios';
import { Twitter } from 'twitter-node-client'
import dotenv from 'dotenv'

dotenv.config();

var config = {
  "consumerKey": process.env.TWITTER_KEY,
  "consumerSecret": process.env.TWITTER_API_SECRET,
  "accessToken": process.env.TWITTER_TOKEN,
  "accessTokenSecret": process.env.TWITTER_TOKEN_SECRET,
  "callBackUrl": "http://localhost:8080/tweetCallback"
};

const getTweets = (request, response, next) => {
  let searchTerm = request.voterInfo.normalizedInput.state;

  console.log(searchTerm);
  let twitter = new Twitter(config);
  twitter.getSearch({'q': `#${searchTerm}`, 'count': 10}, (err) => {
    console.log(err);
    next();
  }, (data) => {
    request.tweets = JSON.parse(data);
    next();
  });
};

export default getTweets;
