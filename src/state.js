
import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const State = (props) => {
  const city = props.city;
  const dataPoints = [];
  for (let i = 0; i < city.length; i++){
    dataPoints[i] = { x: i + 1, y:city[i].gdp };
  }
  console.log(dataPoints);
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: "GDP of the City "
    },
    axisY: {
      title: "Gdp in Billion",
      // suffix: "%"
    },
    axisX: {
      title: "City Name",
      prefix: "city",
      interval: 1
    },
    data: [{
      type: "line",
      toolTipContent: "Week {x}: {y}%",
      dataPoints: dataPoints
      
    }]
  }
  return (
    <div>
      <CanvasJSChart options={options}/>
    </div>
  );
}
// }
export default State;    