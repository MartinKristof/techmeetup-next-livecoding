import { FC, ReactNode } from 'react';

export const Nav: FC<{ children: ReactNode; color: 'red' | 'blue' }> = ({ children, color }) => (
  <nav className={`flex justify-between items-center bg-${color}-950 px-8 py-3 h-20`}>{children}</nav>
);
