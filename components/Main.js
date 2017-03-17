import React, { Component } from 'react';
import io from 'socket.io-client';
import { BrowserRouter as Router, Link, browserHistory } from 'react-router-dom';

import  Header from './parts/Header';
import routes from './routes';
// import Main from './Main';
// import Audience from './Audience';
// import Speaker from './Speaker';
// import Board from './Board';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 'disconnected',
            title: '',
            socket: {}
        }
        this.connect = this.connect.bind(this);
        this.disconnect = this.disconnect.bind(this);
        this.welcome = this.welcome.bind(this);

        console.log('from main, here is routes', routes);
    }

    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('welcome', this.welcome);
    }

    connect() {
        console.log('connected');
        this.setState({ status: 'connected' });
        // console.log('you have connected :: ', this.socket.id);
    }

    disconnect() {
        this.setState({ status: 'disconnected'});
    }

    welcome(serverState) {
        this.setState({ title: serverState.title });
        console.log('welcome')
    }

    render() {

        return (
            <div className="container">
                <Header title={ this.state.title } status={ this.state.status } />
                <p> cool man </p>
                <Router history={browserHistory} routes={routes} />
            </div>
        )

        // return (
        //     <div className="container">
        //         <Header title={ this.state.title } status={ this.state.status } />
        //         { this.props.children }
        //     </div>
        // )

    }
}

export default Main
