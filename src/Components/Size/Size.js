import React from 'react';
import { settingsContext } from '../../Containers/Main/Main';

function Size(props) {

  return (
    <div>
      <p>Size</p>
      <input onInput={props.onInput} type='range' min='50' max='400' value={props.value} />
    </div>

  );
}

export default Size;