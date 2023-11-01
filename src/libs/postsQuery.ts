import { Post, TPost } from '@techmeetup/models/post';
import connectMongoDB from './mongodb';

export const getPosts = async () => {
  try {
    await connectMongoDB();
    const posts = await Post.find<TPost>();

    return { posts };
  } catch (error) {
    throw new Error('Failed to get posts');
  }
};

export const addPost = async ({
  title,
  description,
}: Pick<TPost, 'title' | 'description'>): Promise<{ message: string } | null> => {
  try {
    await connectMongoDB();
    await Post.create<TPost>({ title, description });

    return { message: 'Post added!' };
  } catch (error) {
    throw new Error('Failed to add post');
  }
};

export const deletePostById = async (id: string): Promise<{ message: string }> => {
  try {
    await connectMongoDB();
    await Post.findByIdAndDelete<TPost>(id);

    return { message: 'Post deleted' };
  } catch (error) {
    throw new Error('Failed to delete post');
  }
};
