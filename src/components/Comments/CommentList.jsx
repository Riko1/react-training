import React from 'react';
import CommentItem from './CommentItem';
import Loader from '../Loader/Loader';

class CommentList extends React.Component {
	constructor(props) {
		super(props);
		this.comments = null;
		this.state = {
			isLoaded: false
		}
		let prom = new Promise((resolve, reject) => {
			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/comments/',
				dataTtpe: 'json',
				success: (data) => {
					resolve(data.slice(0, 7))
				},
				error: (error) => {
					reject(error)
				}
			});
		});
		prom.then((response) => {
			this.comments = response;
			this.setState({
				isLoaded: true
			});
		});

	}
	render() {
		if (this.state.isLoaded && this.comments !== null) {
			let commentList = this.comments.map((elem, index, array) => {
				return <CommentItem key={ index } data={ elem } />
			})
			return (
				<div className="comment-list">
					{ commentList }
				</div>
			);
		} else {
			return (
				<div>Загрузка...</div>
			);
		}
	}
}

export default CommentList;