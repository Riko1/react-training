import ArticleItem from './ArticleItem';
import ArticleActionList from './ArticleActionList';
import articleStore from '../store/articleStore';

import './Blog.css';

class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: this.createBlog()
		}
		this.callback = this.callback.bind(this);
	}
	createBlog() {
		var result = [];
		var articles = articleStore.getAll();
		for (var i = 0; i < articles.length; i++) {
			var article = articles[i];
			result.push(<ArticleItem key={ i } data={ article } />);
		}
		return result;
	}
	callback() {
		this.setState({
			articles: this.createBlog()
		})
	}
	componentWillMount() {
		articleStore.on('article', this.callback);
	}
	componentWillUnmount() {
		articleStore.removeListener('article', this.callback);
	}
	render() {
		return (
			<div className="blog">
				<ArticleActionList />
				{
					this.props.children 
					? this.props.children
					: this.state.articles
				}
			</div>
		);
	}
}

export default Blog;