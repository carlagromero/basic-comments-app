import React from 'react';
import { useDispatch } from 'react-redux';
import { saveComment } from 'actions';

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

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea value={comment} onChange={handleChangeTextArea} />
      <div>
        <button>Submmit comment</button>
      </div>
    </form>
  );
};

export default CommentBox;