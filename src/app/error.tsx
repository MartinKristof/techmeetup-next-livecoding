'use client'; // Error components must be Client Components

import { useErrorLog } from '@techmeetup/app/_hooks/useErrorLog';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useErrorLog(error);

  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
