import { FC } from 'react';
import { TPost } from '@techmeetup/models/post';
import Link from 'next/link';
import { RemoveButton } from './RemoveBtn';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

export const PostList: FC<{ posts: TPost[]; isAdmin?: boolean }> = ({ posts, isAdmin = false }) => (
  <>
    {posts.map(({ _id: id, title, description }) => (
      <div
        key={id.toString()}
        className="p-4 border border-stone-700 rounded my-3 flex justify-between gap-5 items-start"
      >
        {isAdmin ? (
          <div>
            <h2 className="font-bold text-2xl">{title}</h2>
            <div>{description}</div>
          </div>
        ) : (
          <Link href={`/posts/${id.toString()}`}>
            <div>
              <h2 className="font-bold text-2xl">{title}</h2>
              <div>{description}</div>
            </div>
          </Link>
        )}

        {isAdmin && (
          <div className="flex gap-2">
            <RemoveButton id={id.toString()} />
            <Link href={`/admin/edit-post/${id.toString()}`}>
              <PencilSquareIcon className="h-6 w-6" />
            </Link>
          </div>
        )}
      </div>
    ))}
  </>
);
