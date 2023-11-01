import { FC } from 'react';
import Link from 'next/link';
import { TPost } from '@techmeetup/models/post';
import { PostsItem } from './PostsItem';

export const PostList: FC<{ posts: TPost[] }> = ({ posts }) => (
  <>
    {posts.length > 0 ? (
      posts.map(({ _id: id, title, description }) => (
        <PostsItem key={id.toString()} id={id.toString()} title={title} description={description} />
      ))
    ) : (
      <div className="max-w-4xl mx-auto px-10 py-4">
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-gray-600 text-lg font-semibold mb-4">No posts found!</p>
          <Link href="/admin/add-post">
            <button
              type="button"
              className="px-6 py-2 bg-blue-950 text-white rounded-md shadow-md hover:bg-blue-650 transition-colors duration-300"
            >
              Add new post
            </button>
          </Link>
        </div>
      </div>
    )}
  </>
);
