import dispatcher from '../dispatcher';
import articleConst from '../consts/articles';
import EventEmmiter from 'events';
import { articles } from '../../js/db';



class ArticleStore extends EventEmmiter {
	constructor() {
		super();
		this.handler = this.handler.bind(this);
		this.articles = articles;
		this.setLastId();
	}
	get(id) {
		for(var i = 0; i < articles.length; i++) {
			var currentArticle = articles[i];
			if (currentArticle.id == id) {
				return currentArticle;
			}
		}
	}
	getAll() {
		return articles;
	}
	setLastId() {
		this.lastId = this.articles.length - 1;
		return this.lastId;
	}
	handler(action) {
		switch(action.type) {
			case articleConst.ADD: {
				action.payload.id = this.articles.length;
				this.articles.push(action.payload);
				this.setLastId();
				this.emit('article');
			} break;
			case articleConst.REMOVE: {
				console.log('ACTION: remove article');
				this.emit('on-article');
			} break;
			case articleConst.EDIT: {
				console.log('ACTION: edit article');
				this.emit('on-article');
			} break; 
		}
	}
}

var articleStore = new ArticleStore();

dispatcher.register(articleStore.handler);

export default articleStore;