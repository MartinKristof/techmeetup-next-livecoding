'use client';

import { FC, ReactNode, SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@techmeetup/app/_components/ui/Input';
import { SubmitButton } from '@techmeetup/app/_components/ui/SubmitButton';
import { Form } from '@techmeetup/app/_components/ui/Form';

export const EditPostForm: FC<{
  children: ReactNode;
  id: string;
  title: string;
  description: string;
  onSubmit: ({
    id,
    title,
    description,
  }: {
    id: string;
    title: string;
    description: string;
  }) => Promise<{ message: string }>;
}> = ({ children, id, title, description, onSubmit }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await onSubmit({ id, title: newTitle, description: newDescription });

    if (response) {
      router.push('/admin');
      router.refresh();
    } else {
      alert('Something went wrong during editing');
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input name="title" onChange={value => setNewTitle(value)} value={newTitle} placeholder="Post Title" />
        <Input
          name="description"
          onChange={value => setNewDescription(value)}
          value={newDescription}
          placeholder="Description Title"
        />
        <SubmitButton>Update Post</SubmitButton>
      </Form>
      {children}
    </>
  );
};
