import Voter from '../database/db';

const dbAddAll = (email, address, callback) => {
  Voter.create({email: email, address: address}).exec()
      .then((data) => {
        callback()
      })
      .catch((err) => { console.log(err) });
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

  let isPost = request.method === 'POST' && request.query.email !== 'default_user';

  Voter.find({email: request.query.email}).exec()
    .then((votersInMongo) => {

      // if there's a matching voter in the DB
      if (votersInMongo.length > 0) {
        // does the address we sent match the DB?
        let matching = request.query.address === votersInMongo[0].address;
        // if method is POST and they don't match,
        // update the DB and move on
        console.log(request.query.address)
        if (isPost && !matching) {
          dbUpdateAddress(request.query.email, request.query.address, function() {
            next();
          }); 
        }
        // if method is GET and they don't match,
        // update our query address with the DB value
        if (!isPost && !matching) {
          request.query.address = votersInMongo[0].address; 
        }
      // if there isn't a matching voter in the DB
      } else {
        // and if method is POST, add email and address to our DB
        if (isPost) {
          dbAddAll(request.query.email, request.query.address, function() {
            next();
          });
        } 
      }
      next();
    })
    .catch((err) => {console.log(err)});

};

export default dbCheckEmail;
