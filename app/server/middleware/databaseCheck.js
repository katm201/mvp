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

      // // if there's a matching voter in the DB (that's not the default)
      // if (isUser && votersInMongo.length > 0) {
      //   // does the address we sent match the DB?
      //   let matching = request.query.address === votersInMongo[0].address;
      //   // if method is POST and they don't match,
      //   // update the DB and move on
      //   if (isPost && !matching) {
      //     dbUpdateAddress(request.query.email, request.query.address, function() {
      //       next();
      //     }); 
      //   }
      //   // if method is GET and they don't match,
      //   // update our query address with the DB value
      //   if (!isPost && !matching) {
      //     request.query.address = votersInMongo[0].address; 
      //   }
      
      // } else if (isUser && isPost && votersInMongo.length === 0) {
      // // if it's a real user, there isn't a matching voter in the DB,
      // // and it's a POST request, then add them to the DB
      //   dbAddAll(request.query.email, request.query.address, function() {
      //     next();
      //   });
      // } else {

      // }

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
          console.log('updated address');
          next();
        });
      // if it's a new user that's POSTing
      } else if (!inDB && isPost) {
        // add to DB, then send back the original
        dbAddAll(request.query.email, request.query.email, function() {
          console.log('added user');
          next();
        });
      // otherwise, send back what's in the DB
      } else if ((inDB && isUser && !isPost) || (inDB && isUser && isPost && matching) || (!inDB && !isPost) || (!isUser && !isPost)) {
        request.query.address === votersInMongo[0].address;
        console.log('sending back address in DB')
      }
      
    })
    .catch((err) => {console.log(err)});

};

export default dbCheckEmail;
