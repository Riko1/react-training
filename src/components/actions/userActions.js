import dispatcher from '../dispatcher';
import userConst from '../consts/users'
import userStore from '../store/userStore';

class UserAction {
	login(login) {
		dispatcher.dispatch({
			type: userConst.LOGIN,
			payload: login
		});
	}
	logout(id) {
		dispatcher.dispatch({
			type: userConst.LOGOUT,
			payload: id
		})
	}
}

export default new UserAction;