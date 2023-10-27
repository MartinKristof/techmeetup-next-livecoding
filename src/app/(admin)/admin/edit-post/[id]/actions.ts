'use server';

import { updatePostById } from '@techmeetup/libs/postsQuery';
import { redirect } from 'next/navigation';

export const editPostAction = async (
  id: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData,
): Promise<{ message: string } | undefined> => {
  // const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;

  let success = false;
  try {
    const response = await updatePostById({ id, title, description });
    if (response) {
      success = true;
    }
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message };
    }

    return { message: 'Something went wrong during update' };
  } finally {
    if (success) {
      redirect('/admin');
    }
  }
};
