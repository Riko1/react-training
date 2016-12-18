import Menu from '../Menu/Menu.jsx';
import Sidebar from '../Sidebar/Sidebar';

class Default extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {

		var menuItems = [
			{ text: 'Blog', href: '/blog' }, { text: 'Some', href: '/someurl' }
		]
		
		return (
			<div className="page-wrapper">
				<header>
					<Menu menuItems={ menuItems } />
				</header>
				<div className="container">
					<section className="page-content col-lg-8 col-md-8 col-sm-12 col-xs-12">
						{
							this.props.children
								? this.props.children
								: 'Not children'
						}
					</section>
					<Sidebar />
				</div>
			</div>
		);
	}
}

export default Default;