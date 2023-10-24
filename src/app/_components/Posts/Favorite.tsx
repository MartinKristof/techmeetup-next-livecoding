'use client';

import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { FC } from 'react';

export const Favorite: FC<{ toggleFavorite: (id: string) => void; id: string; isFavorite?: boolean }> = ({
  toggleFavorite,
  id,
  isFavorite = false,
}) => {
  const handleClick = async () => {
    toggleFavorite(id);
  };

  return (
    <button type="button" onClick={handleClick}>
      {isFavorite ? <StarIconSolid className="h-6 w-6" /> : <StarIcon className="h-6 w-6" />}
    </button>
  );
};
