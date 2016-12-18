import Button from '../interface/button';
import articleActions from '../actions/articleActions'

class ArticleActionList extends React.Component {
	constructor(props) {
		super(props);
		
		this.onClick = this.onClick.bind(this);

		this.add = {
			text: 'Добавить',
			action: 'add',
			onClick: this.onClick
		}
	}
	onClick() {
		var article = {
			title: this.refs.title.value,
			author: {
				id: 0,
				name: this.refs.author.value
			},
			text: this.refs.text.value
		}
		articleActions.add(article);
	}
	render() {
		return (
			<div className="articles-action-list">
				<div className="row">
					<form className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
						<div className="form-group">
							<label htmlFor="title">Title</label>
							<input type="text" ref="title" className="form-control" id="title" placeholder="Title" />
						</div>
						<div className="form-group">
							<label htmlFor="author">Author</label>
							<input type="text" ref="author" className="form-control" id="author" placeholder="Author" />
						</div>
						<div className="form-group">
							<label htmlFor="text">Text</label>
							<textarea 
								type="text" 
								ref="text" 
								className="form-control" 
								id="text" 
								placeholder="Text" 
								rows="3">
							</textarea>
						</div>
						<Button { ...this.add } />
					</form>
				</div>
			</div>
		);
	}
}

export default ArticleActionList;