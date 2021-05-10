import axios from 'axios';
import { FETCH_COMMENTS, SAVE_COMMENT, CHANGE_AUTH } from 'actions/types';

const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment,
});

const fetchComments = () => {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');

  return {
    type: FETCH_COMMENTS,
    payload: response,
  }
}

const changeAuth = isLoggedIn => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn,
})

export { saveComment, fetchComments, changeAuth };