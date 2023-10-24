import { FC } from 'react';
import { TPost } from '@techmeetup/models/post';
import { PostsItem } from './PostsItem';

export const PostList: FC<{ posts: TPost[]; isAdmin?: boolean }> = ({ posts, isAdmin = false }) => (
  <>
    {posts.map(({ _id: id, title, description }) => (
      <PostsItem key={id.toString()} id={id.toString()} title={title} description={description} isAdmin={isAdmin} />
    ))}
  </>
);
