import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@techmeetup/libs/mongodb';
import { Post, TPost } from '@techmeetup/models/post';

export const POST = async (request: NextRequest) => {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Post.create<TPost>({ title, description });

  return NextResponse.json({ message: 'Post Created' }, { status: 201 });
};

export const GET = async () => {
  await connectMongoDB();
  const posts = await Post.find<TPost[]>();

  return NextResponse.json({ posts });
};

export const DELETE = async (request: NextRequest) => {
  const id = request.nextUrl.searchParams.get('id');

  if (!id) {
    return NextResponse.json({ message: 'Post not deleted' }, { status: 422 });
  }

  await connectMongoDB();
  await Post.findByIdAndDelete<TPost>(id);

  return NextResponse.json({ message: 'Post deleted' }, { status: 200 });
};
