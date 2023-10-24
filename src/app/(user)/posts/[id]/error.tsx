'use client'; // Error components must be Client Components

import Link from 'next/link';
import { useEffect } from 'react';

const Error = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>User! Something went wrong!</h1>
      <p>{error.message}</p>
      <Link href="/">Go back</Link>
    </div>
  );
};

export default Error;
