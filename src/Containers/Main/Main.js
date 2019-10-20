import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Planet from '../../Components/Planet/Planet';
import Size from '../../Components/Size/Size';

function Main() {

    const classes = useStyles();

    const [size, setSize] = React.useState(100);
    
    const handleSize = (event) => {
        setSize(parseInt(event.target.value));
        console.log(event.target.value);
    }

    return (
        <div className={classes.content}>
            <section className={classes.menu}>
                <Size onInput={handleSize}/>
            </section>

            <section className={classes.visualizer}>
                <Planet
                tam={size}/>
            </section>

        </div>

    );
}

const useStyles = makeStyles(theme => ({
    content: {
        display: 'flex',
        flexDirection: 'colum',
        width: '100%',
        height: '100vh',
        backgroundColor: 'black',
        alignItems: 'flex-start',
    },

    menu: {
        width: '30%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    },

    visualizer: {
        width: '70%',
        height: '100%',
        backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default Main;