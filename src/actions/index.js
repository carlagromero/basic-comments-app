import { SAVE_COMMENT } from 'actions/types';

const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment,
});

export { saveComment };