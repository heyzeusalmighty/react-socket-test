const React = require('react');

let Header = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	render() {
		return (
			<header>
				<h1>{ this.props.title }</h1>
				<span>{ this.props.status}</span>
			</header>
		);
	}
})

module.exports = Header;
