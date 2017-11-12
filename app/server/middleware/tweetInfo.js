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
  let randomNum = Math.floor(Math.random() * 8) + 3;
  
  let searchTerm;

  let channels = request.voterInfo.officials[randomNum].channels;
  let found = false;
  for (var i = 0; i < channels.length; i++) {
    if (channels[i].type === 'Twitter') {
      searchTerm = channels[i].id;
      found = true;
    }
  }

  let twitter = new Twitter(config);

  if (!found) {
    searchTerm = 'thanksobama';
    twitter.getSearch({'q': `#${searchTerm}`, 'count': 10}, (err) => {
      console.log(err);
      next();
    }, (data) => {
      let info = JSON.parse(data);
      request.tweets = info.statuses;
      next();
    });
  } else {
    twitter.getUserTimeline({'screen_name': `${searchTerm}`, 'count': 10}, (err) => {
      console.log(err);
      next();
    }, (data) => {
      request.tweets = JSON.parse(data);
      next();
    }); 
  }
};

export default getTweets;
