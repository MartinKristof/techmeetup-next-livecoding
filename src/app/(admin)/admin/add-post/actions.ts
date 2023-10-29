'use server';
import { addPost } from '@techmeetup/libs/postsQuery';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const addPostAction = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData,
): Promise<{ message: string } | undefined> => {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  let success = false;

  try {
    const response = await addPost({ title, description });

    if (response) {
      success = true;
    }
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message };
    }

    return { message: 'Something went wrong during adding' };
  } finally {
    if (success) {
      revalidatePath('/admin');
      revalidatePath('/');
      redirect('/admin');
    }
  }
};
