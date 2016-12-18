import './MenuItem.css';
import { Link } from 'react-router';

class MenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			light: 'light',
			isOpen: false
		}

		this._over = this._over.bind(this);
		this._out = this._out.bind(this);
	}

	_over(proxy, _event) {
		this.setState({
			light: 'dark'
		});
	}
	_out(proxy, _event) {
		this.setState({
			light: 'light'
		});
	}

	render() {
		return (
			<li 
				className={ this.state.light == 'light' ? 'light' : 'dark' }
				onMouseOver={ this._over }
				onMouseOut={ this._out }
			>
				<Link to={ this.props.href } activeClassName="a-active">{ this.props.text }</Link>
			</li>
		);
	}
}

export default MenuItem;