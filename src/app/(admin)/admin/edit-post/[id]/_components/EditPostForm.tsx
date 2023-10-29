'use client';

import { useFormState } from 'react-dom';
import { FC, ReactNode, useState } from 'react';
import { Input } from '@techmeetup/app/_components/ui/Input';
import { SubmitButton } from '@techmeetup/app/_components/ui/SubmitButton';
import { Form } from '@techmeetup/app/_components/ui/Form';
import { editPostAction } from '../actions';
import { useNotification } from '@techmeetup/app/_hooks/useNotification';

const initialState = {
  message: null,
};

export const EditPostForm: FC<{
  children: ReactNode;
  id: string;
  title: string;
  description: string;
}> = ({ children, id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [state, formAction] = useFormState(editPostAction.bind(null, id), initialState);
  const { showError, showSuccess } = useNotification();

  return (
    <>
      <Form
        action={async (formData: FormData) => {
          formAction(formData);

          if (state.status === 'error') {
            showError(state.message);
          } else {
            showSuccess('Post updated!', true);
          }
        }}
      >
        {/* <Input type="hidden" name="id" value={id} /> */}
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
