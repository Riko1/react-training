import React from 'react';
import './Loader.css';

class Loader extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="loader">
				<div className="loader__bg"></div>
			</div>
		);
	}
}

export default Loader;