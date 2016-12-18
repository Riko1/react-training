import dispatcher from '../dispatcher';
import userConst from '../consts/users'
import userStore from '../store/UserStore';

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
alert('userAction')
export default new UserAction;