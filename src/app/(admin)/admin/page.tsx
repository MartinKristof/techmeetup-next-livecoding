import { FC } from 'react';
import { PostList } from '@techmeetup/app/_components/Posts/PostsList';
import { getPosts } from '@techmeetup/libs/postsQuery';

export const revalidate = 0;

const AdminPostsPage: FC = async () => {
  const { posts } = await getPosts();

  return <PostList posts={posts} isAdmin />;
};

export default AdminPostsPage;
