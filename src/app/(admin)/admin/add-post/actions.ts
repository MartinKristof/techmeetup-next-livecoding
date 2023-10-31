'use server';

import { revalidatePath } from 'next/cache';
import { STATUSES } from '@techmeetup/libs/constants';
import { addPost } from '@techmeetup/libs/postsQuery';

export const addPostAction = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData,
): Promise<{ status: string; message: string } | undefined> => {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;

  try {
    const response = await addPost({ title, description });
    if (response) {
      revalidatePath('/posts', 'page');
      revalidatePath('/admin', 'page');

      return { status: STATUSES.Success, message: response.message };
    }
  } catch (error) {
    if (error instanceof Error) {
      return { status: STATUSES.Error, message: error.message };
    }

    return { status: STATUSES.Error, message: 'Something went wrong during adding' };
  }
};
