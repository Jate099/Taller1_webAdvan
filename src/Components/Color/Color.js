import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { SliderPicker, HuePicker } from 'react-color';
import { classes } from 'istanbul-lib-coverage';

function Color(props) {

  const classes = useStyles();

  return (
    <div>
      <p className={classes.text}>{props.colorType}</p>
      <HuePicker onChange={props.onChange} value={props.colorValue}/>
    </div> 
  );
}

const useStyles = makeStyles(theme => ({
  text: {
      color: 'white',
  },

}));


export default Color;