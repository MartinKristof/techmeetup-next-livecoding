import { FC } from 'react';
import { Metadata } from 'next';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Post! TechMeetup - Admin posts',
};

const AdminPostsPage: FC = () => {
  return <p>Admin post page</p>;
};

export default AdminPostsPage;
