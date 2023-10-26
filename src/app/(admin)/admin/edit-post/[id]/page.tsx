import { FC } from 'react';
import { EditPostForm } from './_components/EditPostForm';
import { Metadata } from 'next';
import { getPostById, updatePostById } from '@techmeetup/libs/postsQuery';
import { FavoritesStatus } from './_components/FavoritesStatus';

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

  return (
    <EditPostForm id={id} title={post?.title || ''} description={post?.description || ''} onSubmit={updatePostById}>
      <FavoritesStatus id={id} />
    </EditPostForm>
  );
};

export default EditPostPage;
