import React from 'react';

import { 
  Card
} from '@mui/material';

function BorkedPage(props){

  //----------------------------------------------------------------------
  // Main Render Method  

  return (
    <div id='BorkedPage' style={{margin: '80px'}}>
      <Card>
        Page with React and Material-UI components...
      </Card>
    </div>      
  );
}

export default BorkedPage;