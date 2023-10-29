'use client';

import { useNotification } from '../_hooks/useNotification';
import { Alert } from './ui/Alert';

export const Notification = () => {
  const { status, message } = useNotification();

  return (
    status &&
    message && (
      <div className="my-5">
        <Alert status={status} message={message} />
      </div>
    )
  );
};
