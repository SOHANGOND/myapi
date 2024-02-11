/* App.js */
import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Pie = (props) => {
	const city = props.city;

	const data = [];
	for (let i = 0; i < city.length; i++) {
		// const { population, city } = city[i];
		data[i]={y:city[i].population,label:city[i].name}
		
	}
	const options = {
		exportEnabled: true,
		animationEnabled: true,
		title: {
			text: "Population chart"
		},
		data: [{
			type: "pie",
			startAngle: 75,
			toolTipContent: "<b>{label}</b>: {y}%",
			showInLegend: "true",
			legendText: "{label}",
			indexLabelFontSize: 16,
			indexLabel: "{label} -> {y}%",
			dataPoints:data
			// 	[
			// 	{ y: 22, label: "Direct" },
			// 	{ y: 49, label: "Organic Search" },
			// 	{ y: 2, label: "Paid Search" },
			// 	{ y: 5, label: "Referral" },
			// 	{ y: 19, label: "Social" }
			// ]
		}]
	}
	return (
		<div>
			<CanvasJSChart options={options}
			/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
	);

}
export default Pie; 