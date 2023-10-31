import { FC } from 'react';
import { Metadata } from 'next';
import { PostList } from '@techmeetup/app/_components/Posts/PostsList';
import { getPosts } from '@techmeetup/libs/postsQuery';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Post! TechMeetup - User posts',
};

const UserPostsPage: FC = async () => {
  const { posts } = await getPosts();

  return <PostList posts={posts} />;
};

export default UserPostsPage;
