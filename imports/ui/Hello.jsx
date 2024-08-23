import React, { useState } from 'react';

import { Info } from './Info.jsx';


export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>This minimum reproduction attempts to load a React with Material UI elements from an Atmosphere.js package.  It uses React DOM Router and Meteor v3.</p>
      <br />
      <Info />
    </div>
  );
};
