import React from 'react';
import './CommentItem.css';

class CommentItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let data = this.props.data;
		return (
			<div className="comment-item" data-id={ data.id }>
				<div className='comment-item__avatar'></div>
				<div className='comment-item__name'>{ data.name }</div>
				<div className='comment-item__email'>{ data.email }</div>
				<div className='comment-item__body'>{ data.body }</div>
			</div>
		);
	}
}

export default CommentItem;