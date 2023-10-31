'use client';

import { Input } from '@techmeetup/app/_components/ui/Input';
import { addPostAction } from './actions';
import { SubmitButton } from '@techmeetup/app/_components/ui/SubmitButton';
import { Form } from '@techmeetup/app/_components/ui/Form';
import { useFormState } from 'react-dom';
import { useNotification } from '@techmeetup/app/_hooks/useNotification';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { STATUSES } from '@techmeetup/libs/constants';

const initialState = {
  message: null,
  status: null,
};

const AddPostPage = () => {
  const [state, formAction] = useFormState(addPostAction, initialState);
  const { showError, showSuccess } = useNotification();
  const router = useRouter();

  useEffect(() => {
    if (state.status === STATUSES.Success) {
      showSuccess(state.message, true);

      router.push('/admin');
      router.refresh();
    } else if (state.status === STATUSES.Error) {
      showError(state.message);
    }
  }, [router, showError, showSuccess, state, state.message, state.status]);

  return (
    <Form action={formAction}>
      <Input name="title" placeholder="Post Title" />
      <Input name="description" placeholder="Description Title" />
      <SubmitButton>Add Post</SubmitButton>
    </Form>
  );
};
export default AddPostPage;
