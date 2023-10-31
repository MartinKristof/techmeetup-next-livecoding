import { FC } from 'react';
import { EditPostForm } from './_components/EditPostForm';
import { Metadata } from 'next';
import { getPostById } from '@techmeetup/libs/postsQuery';
import { notFound } from 'next/navigation';
import { FavoritesStatus } from './_components/FavoritesStatus';

interface EditPostPageProps {
  params: { id: string };
}

export const generateMetadata = async ({ params: { id } }: EditPostPageProps): Promise<Metadata> => {
  const { post } = await getPostById(id);

  return {
    title: `Post! TechMeetup - Edit Post ${post?.title || id}`,
  };
};

const EditPostPage: FC<EditPostPageProps> = async ({ params: { id } }) => {
  const { post } = await getPostById(id);

  return post ? (
    <EditPostForm id={id} title={post?.title || ''} description={post?.description || ''}>
      <FavoritesStatus id={id} />
    </EditPostForm>
  ) : (
    notFound()
  );
};

export default EditPostPage;
