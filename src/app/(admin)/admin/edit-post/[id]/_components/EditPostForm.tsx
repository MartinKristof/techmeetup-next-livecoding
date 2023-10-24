'use client';

import { FC, SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { updatePostById } from '@techmeetup/libs/postsService';
import { Input } from '@techmeetup/app/_components/ui/Input';
import { SubmitButton } from '@techmeetup/app/_components/ui/SubmitButton';
import { Form } from '@techmeetup/app/_components/ui/Form';

export const EditPostForm: FC<{ id: string; title: string; description: string }> = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await updatePostById(id, { title: newTitle, description: newDescription });

    if (response) {
      router.push('/admin');
      router.refresh();
    }
  };

  return (
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
  );
};
