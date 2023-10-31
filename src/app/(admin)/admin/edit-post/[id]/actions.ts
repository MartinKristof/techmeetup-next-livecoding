'use server';

import { STATUSES } from '@techmeetup/libs/constants';
import { updatePostById } from '@techmeetup/libs/postsQuery';
import { revalidatePath } from 'next/cache';

export const editPostAction = async (
  id: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData,
): Promise<{ status: string; message: string } | undefined> => {
  // const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;

  try {
    const response = await updatePostById({ id, title, description });
    if (response) {
      revalidatePath('/posts', 'page');
      revalidatePath('/admin', 'page');
      revalidatePath('/(user)/posts/[id]', 'page');

      return { status: STATUSES.Success, message: response.message };
    }
  } catch (error) {
    if (error instanceof Error) {
      return { status: STATUSES.Error, message: error.message };
    }

    return { status: STATUSES.Error, message: 'Something went wrong during update' };
  }
};
