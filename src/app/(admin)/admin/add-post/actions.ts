'use server';
import { addPost } from '@techmeetup/libs/postsService';
import { redirect } from 'next/navigation';

export const addPostAction = async (formData: FormData) => {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const response = await addPost({ title, description });

  if (response) {
    redirect('/admin');
  }
};
