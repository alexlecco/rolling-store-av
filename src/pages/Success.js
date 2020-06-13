import React, { Component } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom'
const { Content } = Layout;

export default class Success extends Component {
	render() {

		return(
			<Layout>
				<Content className="content">
					<p> Tu compra se realizó con éxito </p>

					<Link to= {{ pathname: '/' }}>
						<a href="#" className="keepShopping-link">Volver al inicio</a>
					</Link>
				</Content>
			</Layout>
		)
	}
}