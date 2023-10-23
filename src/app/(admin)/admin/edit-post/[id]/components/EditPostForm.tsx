'use client';

import { FC, SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { updatePost } from '@techmeetup/libs/posts';

export const EditPostForm: FC<{ id: string; title: string; description: string }> = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await updatePost(id, { title: newTitle, description: newDescription });

    if (response) {
      router.push('/admin');
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        name="title"
        onChange={event => setNewTitle(event.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Post Title"
      />

      <input
        name="description"
        onChange={event => setNewDescription(event.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Post Description"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update Post</button>
    </form>
  );
};
