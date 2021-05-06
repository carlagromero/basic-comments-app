import React from 'react';

const CommentBox = () => {
  const [comment, setComment] = React.useState('');

  const handleChangeTextArea = e => {
    setComment(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

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