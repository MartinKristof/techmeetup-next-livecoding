'use server';

import { revalidatePath } from 'next/cache';
import { getFavoritesFromCookies, isInFavorites, setFavoritesToCookies } from '@techmeetup/libs/favorites';
import { deletePostById } from '@techmeetup/libs/postsQuery';

export const toggleFavorite = async (id: string) => {
  const favorites = getFavoritesFromCookies();

  let newFavorites = [...favorites.favorites, id];

  if (isInFavorites(id)) {
    newFavorites = favorites.favorites.filter((favId: string) => favId !== id);
  }

  setFavoritesToCookies(newFavorites);
};

export const deletePost = async (id: string) => {
  await deletePostById(id);
  revalidatePath('/admin');
  revalidatePath('/');

  if (isInFavorites(id)) {
    toggleFavorite(id);
  }
};
