import dispatcher from '../dispatcher';
import usersConst from '../consts/users';
import EventEmmiter from 'events';
import { users } from '../../js/db';

/*function getRandomString(length) {
	var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890';
	var substr = '';
	for(var i = 0; i < length; i++) {
		var num = Math.floor(Math.random() * str.length);
		substr += str[num];
	}
	return substr
}*/

class UserStore extends EventEmmiter {
	constructor() {
		super();
		
		this.user = null;

		this.getUserId = this.getUserId.bind(this);
		this.getUser = this.getUser.bind(this);
		this.userHandler = this.userHandler.bind(this);
	}
	getUserId(userName) {
		for(var key in users) {
			var user = users[key];
			if (user.name == userName) {
				return +key;
			}
		}
		return null;
	}
	getUser(id) {
		for (var _id in users) {
			var user = users[_id];
			if (_id == id) {
				return user;
			}
		}
	}
	isLogin() {
		return this.user !== null;
	}
	userHandler(action) {
		switch(action.type) {
			case usersConst.LOGIN: {
				var id = this.getUserId(action.payload);
				if (id === null) {
					this.emit('login.error');
				} else {
					this.user = this.getUser(id);
					this.emit('login');
				}
			} break;
			case usersConst.LOGOUT: {
				this.user = null;
				this.emit('logout');
			} break;
		}
	}
}

var userStore = new UserStore();

dispatcher.register(userStore.userHandler);

export default userStore;