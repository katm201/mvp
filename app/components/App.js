import React from 'react';
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
  }

  render() {
    return (
      <div>
        <Search />
        <UserMap address={this.state.address} />
        <RepList reps={this.state.reps} />
      </div>
    );
  }
}

export default App;
