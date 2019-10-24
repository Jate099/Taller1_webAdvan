import React from 'react';
import { makeStyles } from '@material-ui/styles';


function Planet(props) {

  const classes = useStyles();

  const path = (
    <path
      d={
        `M 25,200
        Q${props.controlPoint} 375, 200
      `}

      fill="none"
      stroke="hotpink"
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

      <svg viewBox="0 0 200 200" style={{ maxHeight: 400 }}>{path}</svg>

    </div>
  );
}

const useStyles = makeStyles(theme => ({
  planet: {
    display: 'flex',
    flexDirection: 'column',
    width: '50px',
    height: '50px',
    background: 'white',
    borderRadius: '100%',
  },

}));

export default Planet;