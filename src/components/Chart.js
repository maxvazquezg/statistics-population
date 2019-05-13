import React, { Component } from 'react';
import {
	BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class Chart extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			filter: [],
			filterOne: '',
			filterTwo: '',
			filterThree: '',
		}
	}

	componentDidMount() {
		let newData = [];
		let datos = this.props.lista;
		console.log(datos);
		datos.forEach(element => {
			let info = {
				name: element.nom_agee,
				poblacion: element.pob
			}
			newData.push(info);
		});

		this.setState({
			data: newData,
			filter: newData,
			
		});

	}
	handleKeyPress = (event) => {
		if (event.key == 'Enter') {
			let lista = this.state.data;
			lista = lista.filter(l => l.name.toUpperCase().includes(event.target.value.toUpperCase()));
			this.setState({
				filter: lista
			});
		}
	}

	handleKeyPressMost = (event) => {
		if (event.key == 'Enter') {
			let lista = this.state.data;
			if (event.target.value !== '') {
				lista = lista.filter(l => l.poblacion >= parseInt(event.target.value, 10));
			}
			this.setState({
				filter: lista,
				filterOne: ''
			});
		}
	}

	handleKeyPressLess = (event) => {
		if (event.key == 'Enter') {
			let lista = this.state.data;
			if (event.target.value !== '') {
				lista = lista.filter(l => l.poblacion <= parseInt(event.target.value, 10));
			}

			this.setState({
				filter: lista,
			});
		}
	}
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-4">
						<div class="form-group">
							<label for="estadoControl">Estado</label>
							<input type="text" ref={el => this.state.filterOne = el} onKeyPress={this.handleKeyPress} class="form-control" id="estadoControl" placeholder="Escriba el estado a filtrar" />
						</div>
					</div>
					<div className="col-md-4">
						<div class="form-group">
							<label for="mayorControl">Mayor a:</label>
							<input type="number" onKeyPress={this.handleKeyPressMost} class="form-control" id="mayorControl" placeholder="Escriba el número de población" />
						</div>
					</div>
					<div className="col-md-4">
						<div class="form-group">
							<label for="menorControl">Menor a:</label>
							<input type="number" onKeyPress={this.handleKeyPressLess} class="form-control" id="menorControl" placeholder="Escriba el número de población" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<BarChart
							layout="vertical"
							width={1000}
							height={800}
							data={this.state.filter}
							margin={{
								top: 5, right: 30, left: 20, bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis type="number" />
							<YAxis type="category" dataKey="name" />
							<Tooltip />
							<Legend />
							<Bar dataKey="poblacion" fill="#8884d8" />
						</BarChart>
					</div>
				</div>
			</div>
		);
	}
}

export default Chart;