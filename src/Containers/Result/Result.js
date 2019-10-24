import React from 'react';
import Planet from '../../Components/Planet/Planet';
//import classes from '*.module.scss';
import { makeStyles } from '@material-ui/styles';

var planetList = [];
var temp = localStorage.getItem("planetList");

if (temp !== null) {
  planetList = JSON.parse(temp);
}

function Result() {

  const classes = useStyles();

  let views = [];
  planetList.forEach((planet) => {
    views.push(<Planet tam={planet.tam} color1={planet.color1} color2={planet.color2} />);
  });

  return (
    <div className={classes.content}>

      <div className={classes.pContainer}>
        {React.Children.map(views, (view) => {
          return view;
        })}
      </div>

    </div>
  );
}

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(18, 13, 43, 1)',
  },

  pContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

}));

export default Result;