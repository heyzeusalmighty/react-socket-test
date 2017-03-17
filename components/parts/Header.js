import  React from 'react';
import { Link } from 'react-router-dom';

// const Header = () => (
// 	<header>
// 		<h1>aye tis header</h1>
// 		<nav>
// 			<ul>
// 				<li><Link to="/">Home</Link></li>
// 				<li><Link to="/speaker">Speaker</Link></li>
// 				<li><Link to="/board">Board</Link></li>
// 			</ul>
// 		</nav>
// 	</header>
// )
//
// export default Header;

let Header = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	render() {
		return (
			<header>
				<h1>{ this.props.title }</h1>
				<span>{ this.props.status}</span>
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/speaker">Speaker</Link></li>
						<li><Link to="/board">Board</Link></li>
					</ul>
				</nav>
			</header>
		);
	}
})

module.exports = Header;
