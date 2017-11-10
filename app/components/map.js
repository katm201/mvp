import React from 'react';
import KEYS from '../../config'

const UserMap = (props) => (
  <div>
    <h3>Map Here</h3>
    {`https://maps.googleapis.com/maps/api/staticmap?center=Berkeley,CA&zoom=14&size=400x400&key=${KEYS.GOOGLE}`}
  </div>
);

export default UserMap;
