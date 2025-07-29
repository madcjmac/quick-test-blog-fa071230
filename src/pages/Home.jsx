import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../context/BlogContext';
import PostCard from '../components/PostCard';

const Home = () => {
  const { posts, fetchPosts, loading } = useContext(BlogContext);
  
  useEffect(() => {
    fetchPosts();
  }, []);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Professional Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing stories, insights, and ideas from our community of writers.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No posts yet. Be the first to write one!</p>
        </div>
      )}
    </div>
  );
};

export default Home;