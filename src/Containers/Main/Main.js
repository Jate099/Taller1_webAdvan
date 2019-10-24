import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Planet from '../../Components/Planet/Planet';
import Size from '../../Components/Size/Size';
import Color from '../../Components/Color/Color';
import { SliderPicker, BlockPicker, HuePicker } from 'react-color';


var planetList = [];
var temp = localStorage.getItem("planetList");

if(temp !== null){
    planetList=JSON.parse(temp);
}

const settings = {
    value: 0,
}

export const settingsContext = React.createContext(settings);

function Main() {

    const classes = useStyles();

    const [value, setValue] = React.useState(100);
    const [color, setColor] = React.useState('#555555');
    const [color2, setColor2] = React.useState('#555555');
    //const [point, setPoint1] = React.useState('#555555');
    
    const handleSize = (event) => {
        setValue(parseInt(event.target.value));
        console.log(event.target.value);
    }

    const handleColor1 = (color) => {
        setColor(color.hex);
    }

    const handleColor2 = (color) => {
        setColor2(color.hex);
    }

    /*const handleCurvePoint1 = (even) => {

    }

    const handleCurvePoint2 = (event) => {
        
    }

    const handleCurvePoint3 = (event) => {
        
    }*/

    const handleSave = (event) => {
        var object = {
            color1: color,
            color2: color2,
            tam: value,
        }

        planetList.push(object);
        localStorage.setItem("planetList", JSON.stringify(planetList));
    }

    return (
        <div className={classes.content}>
            <section className={classes.menu}>
                <Size onInput={handleSize} value={value}/>
                <HuePicker onChange={handleColor1}/>
                <HuePicker onChange={handleColor2}/>
                <button onClick={handleSave}>Save</button>
                <a href="/result"><button>Proceed to checkout</button></a>
            </section>

            <section className={classes.visualizer}>
                <Planet 
                tam={value}
                color1={color}
                color2={color2}
               />
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    },

    visualizer: {
        width: '70%',
        height: '100%',
        backgroundColor: 'rgba(18, 13, 43, 1)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default Main;