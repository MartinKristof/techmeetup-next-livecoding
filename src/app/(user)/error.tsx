'use client';
import { useErrorLog } from '@techmeetup/app/_hooks/useErrorLog';

// Error components must be Client Components

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useErrorLog(error);

  return (
    <div>
      <h1>User! Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
