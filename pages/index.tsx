import { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import { motion } from 'framer-motion';

const PostsList = () => {
  interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
  }

  interface User {
    id: number;
    name: string;
  }

  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
      setPosts(postsResponse.data);
      setUsers(usersResponse.data);
    };
    fetchData();
  }, []);

  const filteredPosts = selectedUser
    ? posts.filter(post => post.userId === parseInt(selectedUser))
    : posts;

  return (
    <div className="background-gradient">
      <div className="dot-effect"></div>
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="title"
          style={{ textAlign: 'center', color: '#ff6347' }}
        >
          BLOG DASHBOARD
        </motion.h1>
        <motion.select
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onChange={(e) => setSelectedUser(e.target.value)}
          value={selectedUser}
          className="user-select"
          style={{ display: 'block', margin: '0 auto', color: '#4682b4' }}
        >
          <option value="">All Users</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </motion.select>
        <motion.div
          className="posts-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center' }}
        >
          {filteredPosts.map(post => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <PostCard
                id={post.id}
                title={post.title}
                body={post.body}
                author={users.find(user => user.id === post.userId)?.name || 'Unknown'}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PostsList;