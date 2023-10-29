import { useContext } from 'react';
import { NotificationContext } from '../_contexts/NotificationContext';

export const useNotification = () => {
  const currentNotificationContext = useContext(NotificationContext);

  if (!currentNotificationContext) {
    throw new Error('useNotification has to be used within <NotificationContext.Provider>');
  }

  return currentNotificationContext;
};
