interface Comment {
  id: number;
  name: string;
  body: string;
}

interface CommentListProps {
  comments: Comment[];
  onDeleteComment: (id: number) => void;
}

const CommentList: React.FC<CommentListProps> = ({ comments, onDeleteComment }) => {
  return (
    <div>
      <h3>Comments</h3>
      {comments.map(comment => (
        <div
          key={comment.id}
          className="comment-card"
          style={{
            background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
            padding: '20px',
            margin: '10px 0',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)';
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          }}
        >
          <p style={{ fontSize: '1.2em', marginBottom: '10px', textAlign: 'center' }}><strong>{comment.name}</strong></p>
          <p style={{ fontSize: '1em', marginBottom: '10px', textAlign: 'center' }}>{comment.body}</p>
          <button
            onClick={() => onDeleteComment(comment.id)}
            style={{
              background: '#ff6b6b',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = '#ff4c4c';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = '#ff6b6b';
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CommentList;