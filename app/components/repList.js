import React from 'react';
import RepListItem from './repListItem';

const RepList = (props) => (
  <div>
    <h3>Rep List Here</h3>
    {console.log(props.reps.length)}
    {props.reps.map( (rep, key) => { return <RepListItem key={key} /> } )}
  </div>
);

export default RepList;
