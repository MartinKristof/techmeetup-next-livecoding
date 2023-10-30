'use client';

import { FC, ReactNode, createContext, useCallback, useReducer } from 'react';
import { STATUSES } from '@techmeetup/libs/constants';

export const NotificationContext = createContext<{
  status: STATUSES | null;
  message: string | null;
  showSuccess: (text: string, autoClose?: boolean) => void;
  showError: (text: string, autoClose?: boolean) => void;
  clear: () => void;
  autoClose: boolean;
}>({
  status: null,
  message: null,
  showSuccess: () => {},
  showError: () => {},
  clear: () => {},
  autoClose: false,
});

type InitialState = {
  status: STATUSES | null;
  message: string | null;
  autoClose: boolean;
};

const initialState = {
  status: null,
  message: null,
  autoClose: false,
};

type ActionType =
  | { type: 'showSuccess'; payload: string }
  | { type: 'showError'; payload: string }
  | { type: 'setAutoclose'; payload: null }
  | { type: 'clear'; payload: null };

const reducer = (state: InitialState, { type, payload }: ActionType) => {
  switch (type) {
    case 'showSuccess':
      return { ...state, status: STATUSES.Success, message: payload };

    case 'showError':
      return { ...state, status: STATUSES.Error, message: payload };

    case 'setAutoclose':
      return { ...state, autoClose: true };

    case 'clear':
      return { ...state, ...initialState };

    default:
      throw new Error();
  }
};

export const NotificationProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [{ status, message, autoClose }, dispatch] = useReducer(reducer, initialState);

  const showSuccess = useCallback((text: string, autoClose = false) => {
    window.scroll(0, 0);
    dispatch({ type: 'showSuccess', payload: text });

    if (autoClose) {
      dispatch({ type: 'setAutoclose', payload: null });
    }
  }, []);

  const showError = useCallback((text: string, autoClose = false) => {
    window.scroll(0, 0);
    dispatch({ type: 'showError', payload: text });

    if (autoClose) {
      dispatch({ type: 'setAutoclose', payload: null });
    }
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: 'clear', payload: null });
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        status,
        message,
        autoClose,
        showSuccess,
        showError,
        clear,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
