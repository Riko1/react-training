import './ArticleItem.css';
import { Link } from 'react-router';

class ArticleItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var data = this.props.data;
		return (
			<div className="article-item">
				<h3><Link to={ '/blog/' + data.id }>{ data.title }</Link></h3>
				<strong>{ data.author.name }</strong>
			</div>
		);
	}
}

export default ArticleItem;