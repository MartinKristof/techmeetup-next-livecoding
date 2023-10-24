import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '@techmeetup/libs/mongodb';
import { Post, TPost } from '@techmeetup/models/post';

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;
  await connectMongoDB();
  const post = await Post.findOne<TPost>({ _id: id });

  return NextResponse.json({ post }, { status: 200 });
};
