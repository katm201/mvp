import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const getVoterInfo = (request, response, next) => {
  
  let address = request.body.params.address;

  axios.get(`https://www.googleapis.com/civicinfo/v2/representatives?key=${process.env.GOOGLE}&address=${address}&includeOffices=true`)
    .then( (response) => {
      console.log(response);
      next();
    })
    .catch( (err) => {
      console.log(err);
      next();
    });

};

export default getVoterInfo;
