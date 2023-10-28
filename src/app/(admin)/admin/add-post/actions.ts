'use server';
import { addPost } from '@techmeetup/libs/postsQuery';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const addPostAction = async (formData: FormData) => {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const response = await addPost({ title, description });

  if (response) {
    revalidatePath('/admin');
    revalidatePath('/');
    redirect('/admin');
  } else {
    throw new Error('Something went wrong during adding');
  }
};
