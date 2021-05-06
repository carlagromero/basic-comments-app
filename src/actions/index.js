import axios from 'axios';
import { FETCH_COMMENTS, SAVE_COMMENT } from 'actions/types';

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

export { saveComment, fetchComments };