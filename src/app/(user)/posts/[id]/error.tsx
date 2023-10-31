'use client'; // Error components must be Client Components

import Link from 'next/link';
import { useErrorLog } from '@techmeetup/app/_hooks/useErrorLog';

const Error = ({ error }: { error: Error & { digest?: string } }) => {
  useErrorLog(error);

  return (
    <div>
      <h1>User! Something went wrong!</h1>
      <p>{error.message}</p>
      <Link href="/posts">Go back</Link>
    </div>
  );
};

export default Error;
