import { FC, ReactNode } from 'react';

export const SubmitButton: FC<{ children: ReactNode }> = ({ children }) => (
  <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
    {children}
  </button>
);
