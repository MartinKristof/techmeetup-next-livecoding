'use client';

import { FC } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useNotification } from '../../../_hooks/useNotification';

export const RemoveButton: FC<{ id: string; onClick: (id: string) => Promise<void> }> = ({ id, onClick }) => {
  const { showSuccess, showError } = useNotification();

  const handleRemovePost = async () => {
    try {
      await onClick(id);
      showSuccess('Post removed', true);
    } catch (error) {
      showError('Something went wrong during deletion');
    }
  };

  return (
    <button type="button" onClick={handleRemovePost} className="text-red-400">
      <TrashIcon className="h-6 w-6" />
    </button>
  );
};
