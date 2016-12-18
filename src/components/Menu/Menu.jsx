import MenuItem from './MenuItem';
import { Link } from 'react-router';

class Menu extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var itemsList = [];
		for (let i = 0; i < this.props.menuItems.length; i++) {
			var curretItem = this.props.menuItems[i];
			itemsList.push(<MenuItem key={ i } text={ curretItem.text } href={ curretItem.href }  />);
		}
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<button 
							type="button" 
							className="navbar-toggle collapsed" 
							data-toggle="collapse" 
							data-target="#bs-example-navbar-collapse-1" 
							aria-expanded="false"
						>
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<Link 
							to="/"
							className="navbar-brand" 
							activeClassName="a-active" 
							onlyActiveOnIndex={true}>Welcome
						</Link>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							{ itemsList }
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Menu;