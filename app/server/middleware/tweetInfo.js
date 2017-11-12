import axios from 'axios';
// import Voter from '../database/db';
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
  let twitter = new Twitter();
  twitter.getSearch({'q': '#politics', 'count': 15}, error, success)
}


export default getTweets;
