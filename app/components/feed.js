import React from 'react';
import { Tweet } from 'react-twitter-widgets'

const Feed = (props) => (
  
  <div>
    <h4>Twitter Feed Here</h4>
    {props.tweets && props.tweets.map( (tweet, key) => <Tweet tweetId={tweet.id_str} key={key} /> )}
  </div>
);

export default Feed;

