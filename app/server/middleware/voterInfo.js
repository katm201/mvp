import axios from 'axios';
import dotenv from 'dotenv';

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
  
  let address;

  // note: redo once we have login data and database,
  // will get address from the database on GET requests
  // from an email parameter in the query,
  // then move onto voter info
  if (request.body.params) {
    // for POSTs
    address = request.body.params.address
  } else {
    // for GETs
    address = request.query.address;
  }

  googleVoterInfoHelper(address, function(err, data) {
    if (err) {
      console.error(err);
      response.status(500).send('Issue with the Google API');
    } else {
      request.voterInfo = data;
      next();
    }
  });

};

export default getVoterInfo;
