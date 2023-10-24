import { FC } from 'react';
import { PostList } from '@techmeetup/app/_components/Posts/PostsList';
import { getPosts } from '@techmeetup/libs/postsService';

const AdminPostsPage: FC = async () => {
  const { posts } = await getPosts({
    cache: 'no-store',
  });

  return <PostList posts={posts} isAdmin />;
};

export default AdminPostsPage;
