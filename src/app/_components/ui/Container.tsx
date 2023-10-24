import { FC, ReactNode } from 'react';

export const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <section className="py-3 container mx-auto">{children}</section>
);
