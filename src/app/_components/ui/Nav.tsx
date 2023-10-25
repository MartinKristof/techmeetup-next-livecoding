import { FC, ReactNode } from 'react';

export const Nav: FC<{ children: ReactNode; dark?: boolean }> = ({ children, dark }) => (
  <nav className={`flex justify-between items-center ${dark ? 'bg-blue-950' : 'bg-red-950'} px-8 py-3 h-20`}>
    {children}
  </nav>
);
