import React from 'react';
import KEYS from '../../config'

const UserMap = (props) => (
  <div>
    <h3>Map Here</h3>
    <iframe
      width="600"
      height="450"
      frameBorder="0"
      src={`https://www.google.com/maps/embed/v1/place?key=${KEYS.GOOGLE_MAPS}&q=${props.address}`} 
      allowFullScreen >
    </iframe>
  </div>
);

export default UserMap;
