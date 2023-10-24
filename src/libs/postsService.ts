import { TPost } from '@techmeetup/models/post';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const getPosts = async (options: RequestInit = {}): Promise<{ posts: TPost[] }> => {
  try {
    const response = await fetch(API_URL, options);

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    return response.json();
  } catch (error) {
    console.error('Error loading posts: ', error);
    return { posts: [] };
  }
};

export const getPostById = async (id: string, options: RequestInit = {}): Promise<{ post: TPost | null }> => {
  try {
    const response = await fetch(`${API_URL}${id}`, options);

    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return { post: null };
  }
};

export const deletePostById = async (id: string): Promise<{ message: string } | null> => {
  try {
    const response = await fetch(`${API_URL}?id=${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete post');
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const addPost = async ({
  title,
  description,
}: Pick<TPost, 'title' | 'description'>): Promise<{ message: string } | null> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    });

    if (!response.ok) {
      throw new Error('Failed to add post');
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updatePostById = async (
  id: string,
  { title, description }: Pick<TPost, 'title' | 'description'>,
): Promise<{ message: string } | null> => {
  try {
    const response = await fetch(`${API_URL}${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    });

    if (!response.ok) {
      throw new Error('Failed to update topic');
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
