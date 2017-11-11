import React from 'react';
import axios from 'axios';
import UserMap from './map';
import Search from './search';
import RepList from './repList';
import hrReps from './dummy-data/repsByAddress';

class App extends React.Component{
  constructor(props) {
    super(props);
    let email = prompt('Please enter your email:');
    this.state = {
      // default values for everything to render
      email: email,
      address: '944 Market Street, San Francisco CA 94102',
      reps: hrReps.officials
    }
    console.log(email);
    this.handleSearch = this.handleSearch.bind(this);
    this.renderRequests = this.renderRequests.bind(this);
  }

  handleSearch(value) {
    this.setState({
      address: value
    });

    let renderRequests = this.renderRequests;

    axios.post('/user', { params: { address: value } })
      .then( (response) => { 
        let voterInfo = response.data.voterInfo;
        renderRequests(voterInfo);
      })
      .catch( (err) => { console.log(err) } )
  }

  // for initial GET request
  // later, will do setInterval to fetch tweets
  getInfo() {
    let renderRequests = this.renderRequests;

    axios.get('/user', { params: { address: this.state.address, email: this.state.email } })
      .then( (response) => {
        let voterInfo = response.data.voterInfo;
        renderRequests(voterInfo);
        console.log('initial GET request works');
      })
      .catch( (err) => { console.log(err) })
  }

  componentDidMount() {
    this.getInfo();
  }

  renderRequests(data) {
    this.setState({
      reps: data.officials
    });
  } 

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <UserMap address={this.state.address} />
        <RepList reps={this.state.reps} />
      </div>
    );
  }
}

export default App;
