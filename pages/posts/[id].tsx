import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<{ title: string; body: string } | null>(null);
  const [comments, setComments] = useState<{ id: number; name: string; body: string }[]>([]);
  const [newComment, setNewComment] = useState({ name: '', body: '' });

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        setPost(postResponse.data);
        setComments(commentsResponse.data);
      };
      fetchPost();
    }
  }, [id]);

  const handleAddComment = async (name: string, body: string) => {
    const response = await axios.post(`https://jsonplaceholder.typicode.com/comments`, {
      postId: id,
      name,
      body,
    });
    setComments([response.data, ...comments]);
  };

  const handleDeleteComment = (commentId: number) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <CommentList comments={comments} onDeleteComment={handleDeleteComment} />
      <CommentForm onAddComment={handleAddComment} />
    </div>
  );
};

export default PostDetail;