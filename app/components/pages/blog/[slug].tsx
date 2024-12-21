'use client';

import { useRouter } from 'next/router';
import Layout from '../../Layout';
import CommentSection from '../../CommentSection';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Blog Post: {slug}</h1>
        <p>This is a detailed page for the blog post.</p>
        <CommentSection />
      </div>
    </Layout>
  );
};

export default BlogPost;
