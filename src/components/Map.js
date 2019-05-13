import React, { Component } from 'react';
import DensityMap from '../image/DensityMap.png'
import '../css/style.css';
const google = window.google = window.google ? window.google : {}
// google.charts.load('upcoming', {
// 	'packages': ['geochart']
// });

class Map extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		console.log(this.state.data[0]);
		let newData = [['State', 'Accent']];
		let datos = this.props.lista;
		console.log(datos);
		datos.forEach(element => {
			let name = element.nom_agee.includes('Veracruz') ? 'Veracruz': element.nom_agee;
			name = name.includes('Ciudad de México') ? 'Distrito Federal': name;
			let info =  [name, parseInt(element.pob, 10) ];
			newData.push(info);
		});

		this.setState({
			data: newData
		});
		// google.charts.setOnLoadCallback(drawRegionsMap);
		this.drawCharts(newData);
	}

	drawCharts(data) {
		var data = google.visualization.arrayToDataTable(data);

		var options = {
			region: 'MX', // Mexico
			resolution: 'provinces',
			colorAxis: {
				//     	minValue=100,
				//     maxValue=400,
				values: [600000, 5000000, 10000000, 15000000],
				colors: ['#99ff99', '#33ff33', '#00cc00', '#008000']
			},
			backgroundColor: '#81d4fa',
			datalessRegionColor: '#eeeeee',
			defaultColor: '#f5f5f5',
		};

		var chart = new google.visualization.GeoChart(document.getElementById('geochart-colors'));
		chart.draw(data, options);
	}


	render() {
		return (
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8">
					{/* <img className="map" src={DensityMap}></img> */}
					<div id="geochart-colors"></div>
				</div>
			</div>
		);
	}
}

export default Map;