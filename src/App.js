import { Link, Route } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'actions';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth);

  const handleSignIn = () => {
    dispatch(actions.changeAuth(!isLoggedIn));
  }

  const button = () => (
    isLoggedIn ? <button onClick={handleSignIn}>Sign out</button> : <button onClick={handleSignIn}>Sign in</button>
  );

  const navBar = () => (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/post">Post</Link></li>
      <li>{button()}</li>
    </ul>
  )

  return (
    <div>
      {navBar()}
      <Route path='/post' component={CommentBox} />
      <Route path='/' exact component={CommentList} />
    </div>
  );
}

export default App;
