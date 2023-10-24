import { FC } from 'react';
import { EditPostForm } from './_components/EditPostForm';
import { Metadata } from 'next';
import { getPostById } from '@techmeetup/libs/postsService';

interface EditPostPageProps {
  params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: EditPostPageProps): Promise<Metadata> => {
  const { post } = await getPostById(id);

  return {
    title: `Edit Post ${post?.title || id}`,
  };
};

const EditPostPage: FC<EditPostPageProps> = async ({ params: { id } }) => {
  const { post } = await getPostById(id);

  return <EditPostForm id={id} title={post?.title || ''} description={post?.description || ''} />;
};

export default EditPostPage;
