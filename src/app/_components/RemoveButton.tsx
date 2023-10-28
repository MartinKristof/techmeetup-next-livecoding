'use client';

import { FC } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

export const RemoveButton: FC<{ id: string; onClick: (id: string) => Promise<void> }> = ({ id, onClick }) => {
  const handleRemovePost = async () => {
    try {
      await onClick(id);
    } catch (error) {
      alert('Something went wrong during deletion');
    }
  };

  return (
    <button type="button" onClick={handleRemovePost} className="text-red-400">
      <TrashIcon className="h-6 w-6" />
    </button>
  );
};
