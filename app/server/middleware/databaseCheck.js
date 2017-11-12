import Voter from '../database/db';

const dbAddAll = (email, address, callback) => {
  Voter.create({email: email, address: address}, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      callback()
    }
  });
};

const dbUpdateAddress = (email, address, callback) => {
  let conditions = {
    email: email
  };
  let update = {
    address: address
  };
  Voter.update(conditions, update).exec()
    .then( (numUpdated) => {
      callback()
    })
};

const dbCheckEmail = (request, response, next) => {

  let isPost = request.method === 'POST';
  let isUser = request.query.email !== 'default_user';

  console.log('query address:', request.query.address);

  Voter.find({email: request.query.email}).exec()
    .then((votersInMongo) => {

      let inDB = votersInMongo.length > 0;
      let matching = inDB && request.query.address === votersInMongo[0].address;
      // if it's not a real user, but they want to POST
      if (!isUser && isPost) {
        // send back the original address (do nothing before moving on)
        next()
      // if it's an existing user that's POSTing and doesn't match
      } else if (inDB && isUser && isPost && !matching) {
        // update DB, then send back the original
        dbUpdateAddress(request.query.email, request.query.email, function() {
          next();
        });
      // if it's a new user that's POSTing
      } else if (!inDB && isPost) {
        // add to DB, then send back the original
        dbAddAll(request.query.email, request.query.email, function() {
          next();
        });
      // otherwise, send back what's in the DB
      } else if ((inDB && isUser && !isPost) || (inDB && isUser && isPost && matching) || (!inDB && !isPost) || (!isUser && !isPost)) {
        request.query.address = votersInMongo[0].address;
        next();
      }
      
    })
    .catch((err) => {console.log(err)});

};

export default dbCheckEmail;
