import React, { Component } from 'react';
import {
	BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class ChartEstadistic extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		let value = 119938473;
		let year = 2015;
		let growing = 1.4;
		let dataInfo = [];

		for (let i = 0; i < 15; i++) {
			value = value * ((growing / 100) + 1);
			year++;
			if (year > 2019) {
				dataInfo.push({
					name: year.toString(),
					poblacion: parseInt(value, 10)
				});
			}
		}
		this.setState({
			data: dataInfo
		});
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col">
						<p>De 2010 a 2015, la población se incrementó en 7 millones de habitantes, lo que representa un crecimiento promedio anual de 1.4 por ciento.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<BarChart
							layout="horizontal"
							width={500}
							height={500}
							data={this.state.data}
							margin={{
								top: 5, right: 30, left: 20, bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="poblacion" fill="#8884d8" />
						</BarChart>
					</div>
				</div >
			</div>
		);
	}
}

export default ChartEstadistic;