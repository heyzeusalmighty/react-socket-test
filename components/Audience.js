import React, { Component } from 'react';
import Display from './parts/display';

class Audience extends Component {

	constructor(props) {
        super(props);
		console.log('audience props => ', props);
	}

    render(){
        return (
			<div>
				<h1>Audience Page : {this.props.title} </h1>
				<Display if={this.props.status === 'connected'}>
					<p>Join the session</p>
				</Display>				
			</div>
		);
    }
}

export default Audience
