import { FC, ReactNode } from 'react';

export const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <section className="py-3 container mx-auto px-4">{children}</section>
);
