import { ChangeEvent, FC } from 'react';

export const Input: FC<{
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder: string;
  required?: boolean;
}> = ({ name, value, onChange, placeholder, required = true }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <input
      name={name}
      onChange={onChange ? handleChange : undefined}
      value={value}
      className="border border-slate-500 px-8 py-2"
      type="text"
      placeholder={placeholder}
      required={required}
    />
  );
};
