import { motion } from 'framer-motion';
import Link from 'next/link';

interface PostCardProps {
  id: number;
  title: string;
  body: string;
  author: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, body, author }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="post-card"
      style={{
        background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        padding: '20px',
        margin: '10px 0',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease-in-out',
      }}
    >
      <h2 style={{ marginBottom: '10px', fontFamily: 'Georgia, serif', color: '#333' }}>{title}</h2>
      <p style={{ marginBottom: '10px', fontFamily: 'Arial, sans-serif', color: '#555' }}>{body.substring(0, 100)}...</p>
      <p style={{ marginBottom: '10px', fontFamily: 'Courier New, monospace', color: '#777' }}><strong>{author}</strong></p>
      <Link href={`/posts/${id}`}>
        <span style={{ color: '#fff', textDecoration: 'underline', cursor: 'pointer' }}>Read More</span>
      </Link>
    </motion.div>
  );
};

export default PostCard;