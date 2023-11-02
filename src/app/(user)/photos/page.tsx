import { FC } from 'react';
import { Metadata } from 'next';
import { Photo } from './types';
import { Card } from './_components/Card';

export const metadata: Metadata = {
  title: 'Post! TechMeetup - Photos',
};

const getPhotos = async (): Promise<{ photos: Photo[] }> => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/photos',
      { cache: 'force-cache' }, // DEFAULT
    );

    if (!response.ok) {
      throw new Error('Failed to fetch photos');
    }

    const result = await response.json();

    return { photos: result.slice(0, 21) };
  } catch (error) {
    console.error('Error loading photos: ', error);
    return { photos: [] };
  }
};
const PhotosPage: FC = async () => {
  const { photos } = await getPhotos();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map(({ id, title, url }) => (
        <Card key={id} title={title} url={url} />
      ))}
    </div>
  );
};

export default PhotosPage;
