import userAction from '../actions/userActions';

import './Login.css'

class userLogin extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(proxy, event) {
		var login = this.refs.login.value;
		userAction.login(login);
		proxy.preventDefault();
	}
	render() {
		return (
			<div className="login-content">
				<div className="row">
					<form className="col-ls-6 col-md-6 col-sm-8 col-xs-12 col-lg-offset-3 col-md-offset-3 col-sm-offset-2 col-xs-offset-0" onSubmit={ this.onSubmit }>
						<div className="form-group">
							<label htmlFor="login">Your login</label>
							<input ref="login" type="text" className="form-control" id="login" placeholder="Login" />
						</div>
						<button type="submit" className="btn btn-info">Login</button>
					</form>
				</div>
			</div>
		);
	}
}

export default userLogin;