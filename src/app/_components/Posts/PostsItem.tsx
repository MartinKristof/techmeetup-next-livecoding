import { RemoveButton } from '../../(admin)/admin/_components/RemoveButton';
import { FC } from 'react';
import { deletePostById } from '@techmeetup/libs/postsQuery';
import { revalidatePath } from 'next/cache';

const deletePost = async (id: string) => {
  'use server';
  await deletePostById(id);

  revalidatePath('/posts', 'page');
  revalidatePath('/admin', 'page');
  revalidatePath('/(user)/posts/[id]', 'page');
};

export const PostsItem: FC<{
  id: string;
  title?: string;
  description?: string;
}> = ({ id, title, description }) => (
  <div className="p-4 border border-stone-700 rounded my-3 flex justify-between gap-5 items-start">
    <div>
      {title && <h2 className="font-bold text-2xl">{title}</h2>}
      {description && <div>{description}</div>}
    </div>
    <div className="flex gap-2">
      <RemoveButton id={id.toString()} onClick={deletePost} />
    </div>
  </div>
);
