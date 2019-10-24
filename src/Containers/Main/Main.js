import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Planet from '../../Components/Planet/Planet';
import Size from '../../Components/Size/Size';
import Color from '../../Components/Color/Color';
import { SliderPicker, BlockPicker, HuePicker } from 'react-color';
import { Link } from 'react-router-dom';


var planetList = [];
var temp = localStorage.getItem("planetList");

if (temp !== null) {
    planetList = JSON.parse(temp);
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
                <h1 className={classes.title}>Create your planet</h1>
                <section className={classes.inputs}>
                    <Size onInput={handleSize} value={value} />
                    <Color onChange={handleColor1} colorType='Color1' />
                    <Color onChange={handleColor2} colorType='Color2' />
                </section>
                <button className={classes.btnSave} onClick={handleSave}>Save</button>
                <button className={classes.btnCheck}><Link className={classes.link} to={`/result`}>Proceed to checkout</Link></button>
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
        width: '25%',
        height: '100%',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(136, 19, 131, 1)',
    },

    visualizer: {
        width: '75%',
        height: '100%',
        backgroundColor: 'rgba(18, 13, 43, 1)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontWeight: 'bold',
        fontSize: '30px',
        color: 'rgba(253, 210, 69, 1)',
    },

    btnSave: {
        marginTop: '50px',
        background: 'rgba(70, 193, 164, 1)',
        width: '100%',
        height: '5%',
        border: 'none',
        borderRadius: '15px',
        fontSize: '15px',
        color: 'white',
    },

    btnCheck: {
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
        fontStyle: 'none',
    },

}));

export default Main;