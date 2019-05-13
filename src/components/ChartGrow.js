import React, { Component } from 'react';
import {
	BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class ChartGrow extends Component {
	constructor() {
		super();
		this.state = {
			data: [
				{ name: '2005', poblacion: 103263388 },
				{ name: '2010', poblacion: 112336538 },
				{ name: '2015', poblacion: 119938473 },
			]
		}
	}

	render() {
		return (
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
		);
	}
}

export default ChartGrow;