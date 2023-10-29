import { STATUSES } from '@techmeetup/app/_contexts/NotificationContext';
import { useNotification } from '@techmeetup/app/_hooks/useNotification';
import { FC, useEffect } from 'react';

const AUTOCLOSE_TIMEOUT = 3000;

export const Alert: FC<{ status: STATUSES; message: string; closeEnabled?: boolean }> = ({
  status,
  message,
  closeEnabled = true,
}) => {
  const { clear, autoClose } = useNotification();

  let colors;
  let title;

  if (status === STATUSES.Success) {
    title = 'Success!';
    colors = 'bg-green-100 border-green-400 text-green-700';
  } else {
    title = 'Error!';
    colors = 'bg-red-100 border-red-400 text-red-700';
  }

  useEffect(() => {
    if (!autoClose) {
      return;
    }

    const timeoutId = setTimeout(() => {
      clear();
    }, AUTOCLOSE_TIMEOUT);

    return () => clearTimeout(timeoutId);
  }, [autoClose, clear]);

  return (
    <div className={`${colors} border px-4 py-3 rounded relative`} role="alert">
      <strong className="font-bold mr-3">{title}</strong>
      <span className="block sm:inline">{message}</span>
      {closeEnabled && (
        <button type="button" className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={clear}>
          <svg
            className="fill-current h-6 w-6 text-black-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </button>
      )}
    </div>
  );
};
