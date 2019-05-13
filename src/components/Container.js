import React, { Component } from 'react';
import Chart from './Chart'
import ChartGrow from './ChartGrow'
import Gender from './Gender'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import loading from '../image/loading.gif';
import ChartEstadistic from './ChartEstadistic';
import Map from './Map';
import Meow from './Meow';

class Container extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			info: {},
		}
	}

	componentDidMount() {
		fetch('https://gaia.inegi.org.mx/wscatgeo/mgee/')
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({
					data: data.datos,
					info: data.metadatos,
				});
			});
	}

	render() {
		if (this.state.data.length > 0) {
			return (
				<div className="container">
					<div className="jumbotron jumbotron-fluid">
						<Route exact path="/" render={(props) => <Chart {...props} lista={this.state.data} />} />
						<Route exact path="/Grow" render={(props) => <ChartGrow {...props} lista={this.state.data} />} />
						<Route exact path="/Gender" render={(props) => <Gender {...props} lista={this.state.data} />} />
						<Route exact path="/ChartEstadistic" render={(props) => <ChartEstadistic {...props} lista={this.state.data} />} />
						<Route exact path="/Map" render={(props) => <Map {...props} lista={this.state.data} />} />
						<Route exact path="/Meow" render={(props) => <Meow {...props} lista={this.state.data} />} />
						{(this.props.location.pathname !== '/Meow') && <footer>
							<p>Información consultada del Servicio Web del Catálogo Único de Claves Geoestadísticas de INEGI,
								<a target="_blank" href="http://www.beta.inegi.org.mx/servicios/catalogoUnico.html"> tomada de este enlace</a>.
							</p>
							<p>Fuente: INEGI. {this.state.info.fuenteInfo}</p>
							<p>Fuente: INEGI. Encuesta Intercensal 2015</p>
						</footer>}
						{(this.props.location.pathname === '/Meow') && <footer>
							<p>Información consultada del Servicio Meow de Catálogo Meow del APILIST,
						<a target="_blank" href="https://apilist.fun/i/randomcat"> tomada de este enlace</a>.
					</p>
							<p>Fuente: Meow</p>
						</footer>}
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

export default withRouter(Container);