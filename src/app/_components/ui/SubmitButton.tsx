import { FC, ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

export const SubmitButton: FC<{ children: ReactNode }> = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`bg-green-600 font-bold text-white py-3 px-6 w-fit ${pending ? 'disabled:opacity-50' : ''}`}
      aria-disabled={pending}
      disabled={pending}
    >
      {children}
    </button>
  );
};
