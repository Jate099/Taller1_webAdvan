import React from 'react';
import { makeStyles } from '@material-ui/styles';

function Planet(props) {

  const classes = useStyles();

  return (
    <div className={classes.planet}
      style={{ 
        height: props.tam, 
        width: props.tam, 
        //background: props.color, 
        backgroundImage: `linear-gradient(${props.color1}, ${props.color2})`}}>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  planet: {
    width: '50px',
    height: '50px',
    background: 'white',
    borderRadius: '100%',
  },

}));

export default Planet;