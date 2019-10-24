import React from 'react';
import { makeStyles } from '@material-ui/styles';

function Name(props) {

    const classes = useStyles();

    return (
        <div>
            <p className={classes.text}>Name</p>
            <input onChange={props.onChange} value={props.valueName} placeholder='Planet1'></input>

        </div>
    );
}

const useStyles = makeStyles(theme => ({
    text: {
        color: 'white',
    },
  
  }));

export default Name;