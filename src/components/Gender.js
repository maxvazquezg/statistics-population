import React, { Component } from 'react';
import {
	PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
class Gender extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			male: 0,
			female: 0,
		}
	}

	componentDidMount() {
		// fetch('https://gaia.inegi.org.mx/wscatgeo/mgee/')
		// 	.then(response => {
		// 		return response.json();
		// 	})
		// 	.then(data => {
		let datos = this.props.lista;
		console.log(datos);
		let newData = [];
		let pobFem = 0;
		let pobMas = 0;
		datos.forEach(element => {
			pobFem += parseFloat(element.pob_fem);
			pobMas += parseFloat(element.pob_mas);
		});

		let total = pobFem + pobMas;
		let male = (pobMas * 100) / total;
		let female = (pobFem * 100) / total;

		newData = [
			{ name: 'Mujeres', poblacion: pobFem },
			{ name: 'Hombres', poblacion: pobMas },
		]

		this.setState({
			data: newData,
			male: male.toFixed(2),
			female: female.toFixed(2),
		});
		// });
	}

	renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
				{`${this.state.data[index].name} (${this.state.data[index].poblacion})`}
			</text>
		);
	};

	render() {
		return (
			<div>
				<div className="row">
					<div className="col">
						<p>La población femenina del país representa el {this.state.female}%.</p>
						<p>La población masculina del país representa el {this.state.male}%.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<PieChart
							width={500}
							height={500}
							margin={{
								top: 5, right: 30, left: 20, bottom: 5,
							}}
						>
							<Pie
								data={this.state.data}
								dataKey="poblacion"
								labelLine={false}
								label={this.renderCustomizedLabel}
								fill="#8884d8" />
							{
								this.state.data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
							}
						</PieChart>
					</div>
				</div>
			</div>
		);
	}
}

export default Gender;