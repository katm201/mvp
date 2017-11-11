import React from 'react';
import axios from 'axios';
import UserMap from './map';
import Search from './search';
import RepList from './repList';
import hrReps from './dummy-data/repsByAddress';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      address: '944 Market Street, San Francisco CA 94102',
      reps: hrReps.officials
    }
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
        // console.log(response);
        let voterInfo = response.data.voterInfo;
        renderRequests(voterInfo);
      })
      .catch( (err) => { console.log(err) } )

  }

  renderRequests(data) {
    this.setState({
      reps: data.officials
    });
    // console.log(this.state.reps);
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
