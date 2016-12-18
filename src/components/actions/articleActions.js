import dispatcher from '../dispatcher';
import articleConst from '../consts/articles'

class ArticleAction {
	add(article) {
		dispatcher.dispatch({
			type 	: articleConst.ADD,
			payload : article
		});
	}
	edit(article) {
		dispatcher.dispatch({
			type 	: articleConst.EDIT,
			payload : article
		});
	}
	remove(id) {
		dispatcher.dispatch({
			type 	: articleConst.REMOVE,
			payload : id
		});
	}
}

export default new ArticleAction;