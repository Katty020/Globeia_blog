import { useState } from 'react';
import { motion } from 'framer-motion';

interface CommentFormProps {
  onAddComment: (name: string, body: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddComment(name, body);
    setName('');
    setBody('');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="comment-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        padding: '20px',
        borderRadius: '16px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        marginTop: '20px',
        border: '2px solid #fff',
        maxWidth: '500px',
        margin: '20px auto',
      }}
    >
      <h3 style={{ color: '#fff', marginBottom: '10px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>Add a Comment</h3>
      <motion.input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        whileFocus={{ scale: 1.05 }}
        style={{
          width: '95%',
          padding: '8px',
          margin: '10px 0',
          border: '1px solid #ccc',
          borderRadius: '8px',
          fontFamily: 'Arial, sans-serif',
        }}
      />
      <motion.textarea
        placeholder="Comment"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
        whileFocus={{ scale: 1.05 }}
        style={{
          width: '95%',
          padding: '8px',
          margin: '10px 0',
          border: '1px solid #ccc',
          borderRadius: '8px',
          fontFamily: 'Arial, sans-serif',
        }}
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.1 }}
        style={{
          background: '#fda085',
          border: 'none',
          padding: '12px 24px',
          color: 'white',
          borderRadius: '8px',
          cursor: 'pointer',
          fontFamily: 'Arial, sans-serif',
          display: 'block',
          margin: '0 auto',
        }}
      >
        Add Comment
      </motion.button>
    </motion.form>
  );
};

export default CommentForm;