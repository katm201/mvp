import axios from 'axios';
import dotenv from 'dotenv';
import Voter from '../database/db';

dotenv.config();

const googleVoterInfoHelper = (address, callback) => {
  axios.get(`https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.GOOGLE}&address=${address}&includeOffices=true`)
    .then( (data) => {
      callback(null, data.data);
    })
    .catch( (err) => {
      callback(err, null);
    });
}

const getVoterInfo = (request, response, next) => {

  console.log('query: ',request.query);

  let address = request.query.address

  googleVoterInfoHelper(address, function(err, data) {
    if (err) {
      response.status(500).send('Issue with the Google API');
    } else {
      request.voterInfo = data;
      next();
    }
  });

};

export default getVoterInfo;
