import React from 'react';
import { makeStyles } from '@material-ui/styles';


function Planet(props) {

  const classes = useStyles();

  const path = (
    <path
      d={
        `M${props.startPoint}
        Q${props.controlPoint}
        C${props.endPoint}
      `}

      fill="none"
      stroke={props.color1}
      strokeWidth={5}
    />
  );

  return (
    <div className={classes.planet}
      style={{
        height: props.tam,
        width: props.tam,
        //background: props.color, 
        backgroundImage: `linear-gradient(${props.color1}, ${props.color2})`
      }}>

      <svg viewBox="0 0 200 200" style={{ maxHeight: 400 }}>{path}</svg>

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