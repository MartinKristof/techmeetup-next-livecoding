import Link from 'next/link';
import { RemoveButton } from '../RemoveButton';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import { Favorite } from './Favorite';
import { cookies } from 'next/headers';

const toggleFavorite = async (id: string) => {
  'use server';
  const favorites = cookies().has('favorites')
    ? JSON.parse(cookies().get('favorites')?.value || '{favorites: []}')
    : { favorites: [] };

  if (favorites.favorites.includes(id)) {
    const newFavorites = favorites.favorites.filter((fav: string) => fav !== id);
    cookies().set('favorites', JSON.stringify({ favorites: newFavorites }));
    return;
  } else {
    const newFavorites = [...favorites.favorites, id];
    cookies().set('favorites', JSON.stringify({ favorites: newFavorites }));
    return;
  }
};

export const PostsItem: FC<{
  id: string;
  title?: string;
  description?: string;
  isAdmin: boolean;
}> = ({ id, title, description, isAdmin }) => {
  const favorites = cookies().has('favorites')
    ? JSON.parse(cookies().get('favorites')?.value || '{favorites: []}')
    : { favorites: [] };
  const isFavorite = favorites.favorites.includes(id);

  return (
    <div className="p-4 border border-stone-700 rounded my-3 flex justify-between gap-5 items-start">
      {isAdmin ? (
        <div>
          {title && <h2 className="font-bold text-2xl">{title}</h2>}
          {description && <div>{description}</div>}
        </div>
      ) : (
        <Link href={`/posts/${id.toString()}`}>
          <div>
            {title && <h2 className="font-bold text-2xl">{title}</h2>}
            {description && <div>{description}</div>}
          </div>
        </Link>
      )}

      <div className="flex gap-2">
        {isAdmin ? (
          <>
            <RemoveButton id={id.toString()} />
            <Link href={`/admin/edit-post/${id.toString()}`}>
              <PencilSquareIcon className="h-6 w-6" />
            </Link>
          </>
        ) : (
          <Favorite toggleFavorite={toggleFavorite} id={id} isFavorite={isFavorite} />
        )}
      </div>
    </div>
  );
};
