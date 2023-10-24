import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@techmeetup/libs/mongodb';
import { Post, TPost } from '@techmeetup/models/post';

export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;
  const { title, description } = await request.json();
  await connectMongoDB();
  await Post.findByIdAndUpdate<TPost>(id, { title, description });

  return NextResponse.json({ message: 'Post updated' }, { status: 200 });
};
