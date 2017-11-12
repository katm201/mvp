import React from 'react';

const RepListItem = (props) => (
  <div>
    <h4>{props.rep.name}, {props.rep.party || 'Unknown'}</h4>
    <img src={props.rep.photoUrl} className="rep-thumbnail" width="50px" />
    <p>
      {props.rep.phones && props.rep.phones.map( (phone, key) => { return <span key={key}>{phone}<br /></span> } )}
      {props.rep.urls && props.rep.urls.map( (url, key) => { return <a className="rep-item" key={key} href={url}>{url}<br /></a> } )}
    </p>
  </div>
);

export default RepListItem;
