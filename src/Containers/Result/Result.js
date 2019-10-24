import React from 'react';
import Planet from '../../Components/Planet/Planet';

var planetList = [];
var temp = localStorage.getItem("planetList");

if(temp !== null){
    planetList=JSON.parse(temp);
}

function Result() {

  let views = [];
  planetList.forEach((planet) => {
    views.push(<Planet tam={planet.tam} color1={planet.color1} color2={planet.color2} />);
  });

  return (
    <div>

      {React.Children.map(views, (view) => {
        return view;
      })}
    </div>
  );
}

export default Result;