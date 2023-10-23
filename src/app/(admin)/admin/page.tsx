import { FC } from 'react';
import { PostList } from '@techmeetup/app/components/PostsList';
import { getPosts } from '@techmeetup/libs/posts';

const AdminPostsPage: FC = async () => {
  const { posts } = await getPosts({
    cache: 'no-store',
  });

  return <PostList posts={posts} isAdmin />;
};

export default AdminPostsPage;
