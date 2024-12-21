'use client';

import { useState } from 'react';
import AddBlogForm from './components/AddBlogForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from 'next/image';

// Define interfaces for the blog and comments
interface Blog {
  title: string;
  content: string;
  image: string;
  slug: string;
  comments: string[];
}

const HomePage = () => {
  // Initial blogs state
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      title: 'Sample Blog 1',
      content: 'This is a sample blog content.',
      image: 'log4.png',
      slug: 'sample-blog-1',
      comments: [], // Add comments property
    },
  ]);

  // Function to handle adding a new blog
  const handleAddBlog = (blog: Omit<Blog, 'comments'>) => {
    setBlogs((prevBlogs) => [...prevBlogs, { ...blog, comments: [] }]);
  };

  // Function to handle adding a comment
  const handleAddComment = (slug: string, comment: string) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.slug === slug
          ? { ...blog, comments: [...blog.comments, comment] }
          : blog
      )
    );
  };

  return (
    <div className="flex w-full flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow bg-blue-100 shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Welcome to Our Blog</h1>

        {/* Add Blog Form */}
        <AddBlogForm onAdd={handleAddBlog} />

        {/* Blog List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blogs.map((blog) => (
            <div key={blog.slug} className="border rounded-lg shadow-md p-4 bg-gray-50">
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-md mb-4"
                width={400}
                height={200}
              />
              <h2 className="text-lg font-bold text-gray-800">{blog.title}</h2>
              <p className="text-gray-700">{blog.content.substring(0, 100)}...</p>

              {/* Comments Section */}
              <div className="mt-4">
                <h3 className="font-bold text-gray-800">Comments</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  {blog.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                  ))}
                </ul>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const commentInput = form.elements.namedItem('comment') as HTMLInputElement;
                    const comment = commentInput.value;
                    handleAddComment(blog.slug, comment);
                    form.reset();
                  }}
                  className="mt-2"
                >
                  <input
                    type="text"
                    name="comment"
                    placeholder="Add a comment"
                    className="border rounded-md p-2 w-full"
                    required
                  />
                  <button
                    type="submit"
                    className="mt-2 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
