import { Link } from 'react-router';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<button type="button" className="btn btn-default" action={ this.props.action } onClick={ this.props.onClick }>
				{
					this.props.link 
					? <Link to={ this.props.link }>{ this.props.text }</Link>
					: this.props.text
				}
			</button>
		);
	}
}

export default Button;