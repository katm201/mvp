
const getVoterInfo = (request, response, next) => {
  console.log('inside the voter info middleware!')
  next();
}

export default getVoterInfo;
