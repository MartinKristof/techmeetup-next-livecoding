import { FC, ReactNode, SyntheticEvent } from 'react';

export const Form: FC<{
  children: ReactNode;
  onSubmit?: (event: SyntheticEvent<HTMLFormElement>) => void;
  action?: (formData: FormData) => Promise<void>;
}> = ({ children, onSubmit = undefined, action = undefined }) => (
  <form action={action} onSubmit={onSubmit} className="flex flex-col gap-3">
    {children}
  </form>
);
