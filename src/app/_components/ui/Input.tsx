import { ChangeEvent, FC } from 'react';

export const Input: FC<{
  label: string;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: 'text' | 'hidden';
}> = ({ label, name, value, onChange, placeholder = '', required = true, type = 'text' }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <input
        id={name}
        name={name}
        onChange={onChange ? handleChange : undefined}
        value={value}
        className="border border-slate-500 px-8 py-4 rounded"
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};
