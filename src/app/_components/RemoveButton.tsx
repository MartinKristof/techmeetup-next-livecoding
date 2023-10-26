'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { TrashIcon } from '@heroicons/react/24/outline';

export const RemoveButton: FC<{ id: string; onClick: (id: string) => Promise<{ message: string }> }> = ({
  id,
  onClick,
}) => {
  const router = useRouter();

  const handleRemovePost = async () => {
    const response = await onClick(id);

    if (response) {
      router.refresh();
    } else {
      alert('Something went wrong during deletion');
    }
  };

  return (
    <button type="button" onClick={handleRemovePost} className="text-red-400">
      <TrashIcon className="h-6 w-6" />
    </button>
  );
};
