import React from 'react';
import Planet from '../../Components/Planet/Planet';
//import classes from '*.module.scss';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

var planetList = [];
var temp = localStorage.getItem("planetList");

if (temp !== null) {
  planetList = JSON.parse(temp);
}

function Result() {

  const classes = useStyles();

  const handleClick = () => {
    localStorage.clear();
  }

  let views = [];
  planetList.forEach((planet) => {
    views.push(<Planet name={planet.name} tam={planet.tam} color1={planet.color1} color2={planet.color2} />);
  });

  return (
    <div className={classes.content}>

      <h1 className={classes.title}>Your planets</h1>

      <div className={classes.pContainer}>
        {React.Children.map(views, (view) => {
          return view;
        })}
      </div>

      <button className={classes.clear} onClick={handleClick}>Reset</button>
      <button className={classes.editor}><Link className={classes.link} to={'/'}>Go back to creator</Link></button>

    </div>
  );
}

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    height: '100vh',
    padding: '15px',
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

  clear: {
    marginTop: '20px',
    background: 'rgba(70, 193, 164, 1)',
    width: '100%',
    height: '5%',
    border: 'none',
    borderRadius: '15px',
    fontSize: '15px',
    color: 'white',
  },

  editor: {
    marginTop: '20px',
    background: 'rgba(70, 193, 164, 1)',
    width: '100%',
    height: '5%',
    border: 'none',
    borderRadius: '15px',
    fontSize: '15px',
    color: 'white',
  },

  link: {
    color: 'white',
    textDecoration: 'none',
  },

  title: {
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: '30px',
    color: 'rgba(253, 210, 69, 1)',
  }

}));

export default Result;