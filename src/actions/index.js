import axios from 'axios';
import { FETCH_COMMENTS, SAVE_COMMENT, CHANGE_AUTH } from 'actions/types';

const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment,
});

const fetchComments = async () => {
  const response = await axios.get('http://jsonplaceholder.typicode.com/comments');
  const data = response.data.map(comment => comment.name);

  return {
    type: FETCH_COMMENTS,
    payload: data,
  }
}

const changeAuth = isLoggedIn => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn,
})

export { saveComment, fetchComments, changeAuth };