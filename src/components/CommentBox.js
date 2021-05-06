import React from 'react';
import { useDispatch } from 'react-redux';
import { saveComment, fetchComments } from 'actions';

const CommentBox = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = React.useState('');

  const handleChangeTextArea = e => {
    setComment(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(saveComment(comment));

    setComment('');
  }

  const handleFetchComments = () => {
    dispatch(fetchComments());
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={comment} onChange={handleChangeTextArea} />
        <div>
          <button>Submmit comment</button>
        </div>
      </form>
      <button onClick={handleFetchComments}>Fetch comments</button>
    </div>
  );
};

export default CommentBox;