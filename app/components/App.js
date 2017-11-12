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

  getInfo(email, address) {
    email = email || this.state.email;
    address = address || this.state.address;

    let renderRequests = this.renderRequests;

    let path = `/users?email=${email}&address=${address}`
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
    this.getInfo(email)
  }

  logout() {
    this.setState({
      email: 'default_user',
      address: '944 Market Street, San Francisco CA 94102'
    });
    this.getInfo('default_user', '944 Market Street, San Francisco CA 94102');
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
      <div id="app">
        <nav className="nav">
          <ul>
            <li><a href="#" onClick={ this.login }> Login </a></li>
            <li><a href="#" onClick={ this.logout }> Logout </a></li>
          </ul>
        </nav>
        <div className="col-2-3">
          <Search handleSearch={ this.handleSearch } />
          <UserMap id="maps" address={ this.state.address } />
        </div>
        <div className="col-1-3">
          <RepList reps={ this.state.reps } />
        </div>
      </div>
    );
  }
}

export default App;
