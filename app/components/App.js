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
      // default values for everything to render
      email: 'default_user',
      address: '944 Market Street, San Francisco CA 94102',
      reps: hrReps.officials
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.renderRequests = this.renderRequests.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
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

    axios.get('/users', { params: { address: this.state.address, email: this.state.email } })
      .then( (response) => {
        let voterInfo = response.data.voterInfo;
        renderRequests(voterInfo);
      })
      .catch( (err) => { console.log(err) })
  }

  login() {
    let email = prompt('Please enter your email:');
    this.setState({
      email: email
    });
    console.log(email);
    this.getInfo()
  }

  logout() {
    this.setState({
      email: 'default_user'
    });
    this.getInfo()
  }

  componentDidMount() {
    // initial GET request
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
        <nav>
          <ul>
            <li><a href="/user" onClick={this.login}> Login </a></li>
            <li><a href="/" onClick={this.logout}> Logout </a></li>
          </ul>
        </nav>
        <Search handleSearch={this.handleSearch} />
        <UserMap address={this.state.address} />
        <RepList reps={this.state.reps} />
      </div>
    );
  }
}

export default App;
