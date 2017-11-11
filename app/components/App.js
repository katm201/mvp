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

    let path = `/users?email=${this.state.email}&address=${value}`
    axios.post(path)
      .then( (response) => { 
        renderRequests(response.data);
      })
      .catch( (err) => { console.log(err) } )
  }

  getInfo(email) {
    email = email || this.state.email;

    let renderRequests = this.renderRequests;

    let path = `/users?email=${email}&address=${this.state.address}`
    axios.get(path)
      .then( (response) => {
        renderRequests(response.data);
      })
      .catch( (err) => { console.log(err) })
  }

  login() {
    let email = prompt('Please enter your email:');
    this.setState({
      email: email
    });
    console.log(email);
    this.getInfo(email)
  }

  logout() {
    this.setState({
      email: 'default_user',
      address: '944 Market Street, San Francisco CA 94102'
    });
    console.log(this.state.email);
    this.getInfo('default_user');
  }

  componentDidMount() {
    // initial GET request
    this.getInfo();
  }

  renderRequests(info) {
    this.setState({
      reps: info.voterInfo.officials,
      address: info.address
    });
  } 

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><a href="#" onClick={ this.login }> Login </a></li>
            <li><a href="#" onClick={ this.logout }> Logout </a></li>
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
