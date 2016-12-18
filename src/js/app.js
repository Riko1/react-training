import 'babel-polyfill';
import { Router, Route, IndexRoute, browserHistory, IndexRedirect, Redirect } from 'react-router';
import Default from '../components/Page/Default';
import Home from '../components/Home/Home';
import Blog from '../components/Blog/Blog';
import Article from '../components/Blog/Article';
import NotFound from '../components/NotFound/NotFound';
import userLogin from '../components/Login/Login';
import userStore from '../components/store/userStore';

$(document).ready(function() {
	ReactDOM.render(
		<Router history={ browserHistory }>
			{
				!userStore.isLogin()
				? <Redirect from='/' to='/login' />
				: null
			}
			<Route path='/' component={ Default } >
				<IndexRoute component={ Home } />
				<Route path='/blog' >
					<IndexRoute component={ Blog }/>
					<Route path=':articleId' component={ Article } />
				</Route>
				<Route path='/login' component={ userLogin }/>
				<Route path='*' component={ NotFound } />
			</Route>
		</Router>,
		document.getElementById('my-app')
	);
});
//<IndexRoute component={ Home } />