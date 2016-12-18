import { Link } from 'react-router';
import articleStore from '../store/ArticleStore'

class Article extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var data = articleStore.get(this.props.params.articleId);
		return (
			<div className="article">
				<h1>{ data.title }</h1>
				<strong><Link to={ "/author/" + data.author.id }>{ data.author.name }</Link></strong>
				<p>{ data.text }</p>
			</div>
		);
	}
}

export default Article;