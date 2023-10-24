import { Input } from '@techmeetup/app/_components/ui/Input';
import { addPostAction } from './actions';
import { SubmitButton } from '@techmeetup/app/_components/ui/SubmitButton';
import { Form } from '@techmeetup/app/_components/ui/Form';

const AddPostPage = () => (
  <Form action={addPostAction}>
    <Input name="title" placeholder="Post Title" />
    <Input name="description" placeholder="Description Title" />
    <SubmitButton>Add Post</SubmitButton>
  </Form>
);
export default AddPostPage;
