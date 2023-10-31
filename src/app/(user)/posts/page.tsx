import { FC } from 'react';
import { PostList } from '@techmeetup/app/_components/Posts/PostsList';
import { getPosts } from '@techmeetup/libs/postsQuery';

const UserPostsPage: FC = async () => {
  const { posts } = await getPosts();

  return <PostList posts={posts} />;
};

export default UserPostsPage;