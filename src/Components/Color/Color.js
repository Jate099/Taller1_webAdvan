import React from 'react';
import { SliderPicker, HuePicker } from 'react-color';

function Color(props) {

  return (
    <div>
      <p>{props.colorType}</p>
      <HuePicker onChange={props.onChange} value={props.colorValue}/>
    </div> 
  );
}

export default Color;