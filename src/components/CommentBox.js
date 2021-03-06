import React from 'react';
import { useDispatch } from 'react-redux';
import { saveComment, fetchComments } from 'actions';
import requireAuth from 'components/requireAuth';

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
      <button className="fetch-comments" onClick={handleFetchComments}>Fetch comments</button>
    </div>
  );
};

export default requireAuth(CommentBox);