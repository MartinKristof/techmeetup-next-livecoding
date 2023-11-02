// import { RemoveButton } from '../../(admin)/admin/_components/RemoveButton';
import { FC } from 'react';

const deletePost = async (id: string) => {};

export const PostsItem: FC<{
  id: string;
  title?: string;
  description?: string;
}> = ({ id, title, description }) => (
  <div className="p-4 border border-stone-700 rounded my-3 flex justify-between gap-5 items-start">
    <div>
      {title && <h2 className="font-bold text-2xl">{title}</h2>}
      {description && <div>{description}</div>}
    </div>
    <div className="flex gap-2">{/* <RemoveButton id={id.toString()} onClick={deletePost} /> */}</div>
  </div>
);
