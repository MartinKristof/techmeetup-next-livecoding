'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { TrashIcon } from '@heroicons/react/24/outline';
import { deletePostById } from '@techmeetup/libs/posts';

export const RemoveButton: FC<{ id: string }> = ({ id }) => {
  const router = useRouter();

  const handleRemovePost = async () => {
    const response = await deletePostById(id);

    if (response) {
      router.refresh();
    } else {
      alert('Something went wrong during deletion');
    }
  };

  return (
    <button onClick={handleRemovePost} className="text-red-400">
      <TrashIcon className="h-6 w-6" />
    </button>
  );
};
