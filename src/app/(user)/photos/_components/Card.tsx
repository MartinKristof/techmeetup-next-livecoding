import { FC } from 'react';
import Image from 'next/image';
import { Photo } from '../types';

export const Card: FC<Pick<Photo, 'title' | 'url'>> = ({ title, url }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <Image
      className="w-full h-auto max-w-full rounded-lg"
      src={url}
      alt="Sunset in the mountains"
      width={600}
      height={600}
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
    </div>
  </div>
);
