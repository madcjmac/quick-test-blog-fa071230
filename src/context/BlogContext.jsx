import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Getting Started with Professional Blogging",
      excerpt: "Learn how to create engaging content that resonates with your audience and builds a loyal following.",
      content: "Full content here...",
      author: "Alex Johnson",
      createdAt: new Date().toISOString(),
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies that are shaping the future of web development.",
      content: "Full content here...",
      author: "Sarah Chen",
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    }
  ]);
  
  const [loading, setLoading] = useState(false);
  
  const fetchPosts = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  
  const createPost = (post) => {
    const newPost = {
      ...post,
      id: posts.length + 1,
      createdAt: new Date().toISOString()
    };
    setPosts([newPost, ...posts]);
  };
  
  const getPostById = (id) => {
    return posts.find(post => post.id === parseInt(id));
  };
  
  return (
    <BlogContext.Provider value={{
      posts,
      loading,
      fetchPosts,
      createPost,
      getPostById
    }}>
      {children}
    </BlogContext.Provider>
  );
};