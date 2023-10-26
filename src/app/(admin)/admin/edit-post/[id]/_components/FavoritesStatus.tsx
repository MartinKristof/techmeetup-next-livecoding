import { FC } from 'react';
import { isInFavorites } from '@techmeetup/libs/favorites';
import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

export const FavoritesStatus: FC<{ id: string }> = ({ id }) => (
  <div className="mt-5">
    {isInFavorites(id) ? <StarIconSolid className="h-6 w-6" /> : <StarIcon className="h-6 w-6" />}
  </div>
);
