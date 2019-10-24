import React from 'react';
import View from '../../Components/View/View';
import View from '../../Components/Editor/Editor';
import { makeStyles } from '@material-ui/styles';

function Setup() {

    const classes = useStyles();

  return (
      <div className={classes.content}>
          <Editor/>
          <View/>
      </div>
  );
}

const useStyles = makeStyles(theme => ({

    content: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(18, 13, 43, 1)',
        display: 'flex',
        flexDirection: 'column',
        //justifyContent: 'center',
        //alignItems: 'center',
    },

}));

export default Setup;