import React, { Component } from 'react';
import Chart from './Chart'
import ChartGrow from './ChartGrow'
import Gender from './Gender'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import loading from '../image/loading.gif';
import ChartEstadistic from './ChartEstadistic';
import Map from './Map';

class Meow extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			info: {},
			loading: false,
		}
	}

	componentDidMount() {
		this.load();
	}

	load = (event) => {
		this.setState({
			loading: true,
		});
		fetch('https://aws.random.cat/meow')
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({
					data: data.file,
					loading: false,
				});
			})
			.catch(data => {
				this.setState({
					loading: false,
				});
			});
	}

	render() {
		if (!this.state.loading) {
			return (
				<div className="row">
					<div className="col-md-6 offset-md-3">
					<button onClick={this.load} className="btn btn-success">Cargar otro</button>
						<br />
						<br />
						<br />
						<img className="map" src={this.state.data} />
						<br />
						<br />	
					</div>
				</div>
			);
		}
		return (
			<div>
				<img src={loading} />
			</div>
		);
	}
}

export default Meow;