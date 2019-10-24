import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { settingsContext } from '../Editor/Main';

function Size(props) {

  const classes = useStyles();

  return (
    <div>
      <p className={classes.text}>Size</p>
      <input onInput={props.onInput} type='range' min='50' max='400' value={props.value} />
    </div>

  );
}

const useStyles = makeStyles(theme => ({
  text: {
      color: 'white',
  },

}));

export default Size;