import { useEffect } from 'react';

export const useErrorLog = (error: Error) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
};
