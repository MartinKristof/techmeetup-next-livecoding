import { getPostById, getPosts } from '@techmeetup/libs/posts';
import { Metadata } from 'next';
import React, { FC } from 'react';

interface PostDetailPageProps {
  params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: PostDetailPageProps): Promise<Metadata> => {
  const { post } = await getPostById(id, { next: { revalidate: 15 } });

  return {
    title: `Post ${post?.title || id} detail`,
  };
};

export const generateStaticParams = async () => {
  const { posts } = await getPosts();

  return posts?.map(({ _id }) => ({
    id: _id,
  }));
};

const PostDetailPage: FC<PostDetailPageProps> = async ({ params: { id } }) => {
  const { post } = await getPostById(id, {
    next: { revalidate: 15 },
  });

  return (
    post && (
      <div className="container mx-auto">
        <h1 className="text-2xl">{post.title}</h1>
        <div className="mt-2">
          <p>{post.description}</p>
        </div>
      </div>
    )
  );
};

export default PostDetailPage;