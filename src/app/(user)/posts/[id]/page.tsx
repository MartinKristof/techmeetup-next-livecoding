import { Container } from '@techmeetup/app/_components/ui/Container';
import { getPostById, getPosts } from '@techmeetup/libs/postsQuery';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React, { FC } from 'react';

interface PostDetailPageProps {
  params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: PostDetailPageProps): Promise<Metadata> => {
  const { post } = await getPostById(id);

  return {
    title: `Post ${post?.title || id} detail`,
  };
};

// SSG
export const generateStaticParams = async () => {
  const { posts } = await getPosts();

  return posts?.map(({ _id: id }) => ({
    id: id.toString(),
  }));
};

const PostDetailPage: FC<PostDetailPageProps> = async ({ params: { id } }) => {
  const { post } = await getPostById(id);

  return post ? (
    <Container>
      <h1 className="text-2xl">{post.title}</h1>
      <div className="mt-2">
        <p>{post.description}</p>
      </div>
    </Container>
  ) : (
    notFound()
  );
};

export default PostDetailPage;
