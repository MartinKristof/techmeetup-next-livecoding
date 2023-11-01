'use client';

import { Input } from '@techmeetup/app/_components/ui/Input';
import { addPostAction } from './actions';
import { SubmitButton } from '@techmeetup/app/_components/ui/SubmitButton';
import { Form } from '@techmeetup/app/_components/ui/Form';
import { useFormState } from 'react-dom';
import { useNotification } from '@techmeetup/app/_hooks/useNotification';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { STATUSES } from '@techmeetup/libs/constants';

const initialState = {
  message: null,
  status: null,
};

const AddPostPage = () => {
  const [state, formAction] = useFormState(addPostAction, initialState);
  const { showError, showSuccess } = useNotification();

  useEffect(() => {
    if (state.status === STATUSES.Success) {
      showSuccess(state.message, true);

      redirect('/admin');
    } else if (state.status === STATUSES.Error) {
      showError(state.message);
    }
  }, [showError, showSuccess, state, state.message, state.status]);

  return (
    <Form action={formAction}>
      <Input label="Post title" name="title" placeholder="Foo" />
      <Input label="Post description" name="description" placeholder="Bar" />
      <SubmitButton>Add Post</SubmitButton>
    </Form>
  );
};
export default AddPostPage;
