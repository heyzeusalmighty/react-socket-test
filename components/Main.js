import React, { Component } from 'react';
import io from 'socket.io-client';

import  Header from './parts/Header';

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
                { this.props.children }
            </div>
        )
    }
}

export default Main
