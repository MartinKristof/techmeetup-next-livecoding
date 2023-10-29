'use client';

import { Input } from '@techmeetup/app/_components/ui/Input';
import { addPostAction } from './actions';
import { SubmitButton } from '@techmeetup/app/_components/ui/SubmitButton';
import { Form } from '@techmeetup/app/_components/ui/Form';
import { useFormState } from 'react-dom';
import { Alert } from '@techmeetup/app/_components/ui/Alert';
import { STATUSES } from '@techmeetup/app/_contexts/NotificationContext';

const initialState = {
  message: null,
};

const AddPostPage = () => {
  const [state, formAction] = useFormState(addPostAction, initialState);

  return (
    <>
      {state.message && (
        <div className="my-5">
          <Alert status={STATUSES.Error} message={state.message} closeEnabled={false} />
        </div>
      )}
      <Form action={formAction}>
        <Input name="title" placeholder="Post Title" />
        <Input name="description" placeholder="Description Title" />
        <SubmitButton>Add Post</SubmitButton>
      </Form>
    </>
  );
};
export default AddPostPage;
