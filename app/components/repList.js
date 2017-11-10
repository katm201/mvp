import React from 'react';
import RepListItem from './repListItem';

const RepList = (props) => (
  <div>
    <h3>Rep List Here</h3>
    {props.reps.map( (rep, key) => { return <RepListItem key={key} rep={rep} /> } )}
  </div>
);

export default RepList;
