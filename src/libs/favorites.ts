import { cookies } from 'next/headers';

export const getFavoritesFromCookies = () =>
  cookies().has('favorites') ? JSON.parse(cookies().get('favorites')?.value || '{favorites: []}') : { favorites: [] };

export const isInFavorites = (id: string) => {
  const { favorites } = getFavoritesFromCookies();

  return favorites.includes(id);
};

export const setFavoritesToCookies = (favorites: string[]) => {
  cookies().set('favorites', JSON.stringify({ favorites }));
};
