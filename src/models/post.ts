import { Schema, models, model, InferSchemaType, HydratedDocument } from 'mongoose';

const postSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  },
);

export type TPost = HydratedDocument<InferSchemaType<typeof postSchema>>;

export const Post = models.Post || model<TPost>('Post', postSchema);
