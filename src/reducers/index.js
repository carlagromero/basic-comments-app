import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';

const reducer = combineReducers({
  comments: commentsReducer,
})

export default reducer;