import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaRegComment, FaStar } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

export default function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Yael Adamson-Brown",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      headstamp: "Activity happened on 4th Dec 2023",
      timestamp: "First posted at 16:13 on 11th December 2023",
      editedTimestamp: "Last edited at 16:13 on 11th Dec 2023",
      content:
        "New update by Yael Adamson-Brown working on the Using football to teach life skills to children for An Organisation Demo with Sofia",
      tag: "Weekly Register",
      comments: 0,
      favorites: 0,
    },
  ]);

  const [liked, setLiked] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newContent, setNewContent] = useState('');
  const [newImage, setNewImage] = useState(null);

  const toggleLike = (postId) => {
    setLiked((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const handlePostSubmit = () => {
    const newPost = {
      id: posts.length + 1,
      author: "Yael Adamson-Brown",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      headstamp: "Activity happened on 4th Dec 2023",
      timestamp: "First posted at 16:13 on 11th December 2023",
      editedTimestamp: "Last edited at 16:13 on 11th Dec 2023",
      content: newContent,
      tag: "Weekly Register",
      comments: 0,
      favorites: 0,
    };

    setPosts([newPost, ...posts]);
    setIsModalOpen(false);
    setNewContent('');
    setNewImage(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Post input section */}
      <div className="flex gap-3 items-center rounded-lg bg-white p-3">
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            placeholder="Yael Adamson-Brown Share Some progress"
            className="flex-1 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
            onClick={() => setIsModalOpen(true)}
          />
          <button
            className="px-3 py-1 bg-red-500 text-white hover:bg-red-600"
            onClick={() => setIsModalOpen(true)}
          >
            Post
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
            <textarea
              placeholder="Share your update..."
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              rows="4"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewImage(e.target.files[0])}
              className="mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                className="px-3 py-1 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handlePostSubmit}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Newsfeed */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">NEWSFEED</h1>
        <button className="px-3 py-1 text-sm hover:text-blue-500">
          Story Filters ▼
        </button>
      </div>

      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow p-4 space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-lg" />
              <div>
                <h2 className="font-medium text-blue-600">{post.author}</h2>
                <p className="text-xs text-gray-500">{post.headstamp}</p>
                <p className="text-xs text-gray-500">{post.timestamp}</p>
                <p className="text-xs text-gray-500">{post.editedTimestamp}</p>
                <span className="inline-block px-3 py-1 my-2 text-xs text-white hover:bg-blue-900 bg-blue-400 rounded-full">
                  {post.tag}
                </span>
              </div>
            </div>
            <button className="text-blue-500 hover:text-blue-700">
              <IoMdSettings />
            </button>
          </div>
          <p className="text-gray-700 text-sm">{post.content}</p>
          <div className="flex justify-center items-center gap-4">
            <button className="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700">
              Expand Story
            </button>
          </div>
          <div className="flex items-center justify-between pt-3 pb-3 border-b">
            <button
              className="text-red-500"
              onClick={() => toggleLike(post.id)}
            >
              {liked[post.id] ? <FaHeart className="w-5 h-5" /> : <FaRegHeart className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                <FaRegComment className="w-4 h-4" />
                <span className="text-sm">{post.comments} Comments</span>
              </button>
              <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                <FaStar className="w-4 h-4" />
                <span className="text-sm">{post.favorites} Favourites</span>
              </button>
            </div>
          </div>

          {/* Comment input section */}
          <div className="flex gap-3 items-center">
            <img src={post.avatar} alt="Your avatar" className="w-8 h-8 rounded-lg" />
            <div className="flex-1 flex gap-2">
              <input 
                type="text"
                placeholder="Write a comment..." 
                className="flex-1 px-3 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-2 py-1 bg-red-500 text-white hover:bg-red-600">
                Post
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
