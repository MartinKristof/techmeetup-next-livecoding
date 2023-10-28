import Link from 'next/link';
import { RemoveButton } from '../RemoveButton';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import { Favorite } from './Favorite';
import { isInFavorites } from '@techmeetup/libs/favorites';
import { deletePost, toggleFavorite } from './actions';

export const PostsItem: FC<{
  id: string;
  title?: string;
  description?: string;
  isAdmin: boolean;
}> = ({ id, title, description, isAdmin }) => (
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
          <RemoveButton id={id.toString()} onClick={deletePost} />
          <Link href={`/admin/edit-post/${id.toString()}`}>
            <PencilSquareIcon className="h-6 w-6" />
          </Link>
        </>
      ) : (
        <Favorite toggleFavorite={toggleFavorite} id={id} isFavorite={isInFavorites(id)} />
      )}
    </div>
  </div>
);
