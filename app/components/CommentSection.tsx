
import { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState('');

  const addComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">Comments</h3>
      <div className="flex gap-2 mt-2">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border p-2 flex-1"
          placeholder="Add a comment"
        />
        <button onClick={addComment} className="bg-green-500 text-white px-4 py-2 rounded">
          Post
        </button>
      </div>
      <ul className="mt-4">
        {comments.map((c, index) => (
          <li key={index} className="border-b py-2">{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
