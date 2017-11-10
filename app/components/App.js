import React from 'react';
import UserMap from './map';
import Search from './search';
import RepList from './repList';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      address: '944 Market Street, San Francisco CA 94102'
    }
  }

  render() {
    return (
      <div>
        <Search />
        <UserMap address={this.state.address} />
        <RepList />
      </div>
    );
  }
}

export default App;
