import React from 'react';
import { settingsContext } from '../../Containers/Main/Main';

const settings = React.useContext(settingsContext);

function Size(props) {

  //const [value, setValue] = React.useState(null);
    
  return (
    <input onChange={(event) => {settings.value=(event.target.value)}} type='range' min='10' max='100'></input>
  );
}

export default Size;