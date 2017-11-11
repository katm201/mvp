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

  let isPost = request.method === 'POST';
  let isUser = request.query.email !== 'default_user';

  console.log('query address:', request.query.address);

  Voter.find({email: request.query.email}).exec()
    .then((votersInMongo) => {
      // if there's a matching voter in the DB (that's not the default)
      if (isUser && votersInMongo.length > 0) {
        // does the address we sent match the DB?
        let matching = request.query.address === votersInMongo[0].address;
        // if method is POST and they don't match,
        // update the DB and move on
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
      
      } 
      // if it's a real user, there isn't a matching voter in the DB,
      // and it's a POST request, then add them to the DB
      if (isUser && isPost && votersInMongo.length === 0) {
        dbAddAll(request.query.email, request.query.address, function() {
          next();
        });
      }
      next();
    })
    .catch((err) => {console.log(err)});

};

export default dbCheckEmail;
