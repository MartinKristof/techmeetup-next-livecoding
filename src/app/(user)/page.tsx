import { FC } from 'react';
import { PostList } from '@techmeetup/app/_components/Posts/PostsList';
import { getPosts } from '@techmeetup/libs/postsService';

const UserPostsPage: FC = async () => {
  const { posts } = await getPosts({ next: { revalidate: 15 } });

  return <PostList posts={posts} />;
};

export default UserPostsPage;
