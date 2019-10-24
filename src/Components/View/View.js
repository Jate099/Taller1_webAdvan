import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Planet from '../Planet/Planet';
import Size from '../Size/Size';
import Color from '../Color/Color';
import { SliderPicker, BlockPicker, HuePicker } from 'react-color';
import { Link } from 'react-router-dom';
import Name from '../Name/Name';

function View() {

    const classes = useStyles();

  return (
           <section className={classes.visualizer}>
                <Planet
                    tam={value}
                    name={valName}
                    color1={color}
                    color2={color2}
                />
            </section>

  );
}

const useStyles = makeStyles(theme => ({

    visualizer: {
        width: '75%',
        height: '100%',
        backgroundColor: 'rgba(18, 13, 43, 1)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

}));

export default View;