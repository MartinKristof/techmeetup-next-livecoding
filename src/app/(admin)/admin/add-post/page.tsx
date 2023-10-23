import { addPostAction } from './action';

const AddPostPage = () => (
  <form action={addPostAction} className="flex flex-col gap-3">
    <input name="title" className="border border-slate-500 px-8 py-2" type="text" placeholder="Post Title" required />
    <input
      name="description"
      className="border border-slate-500 px-8 py-2"
      type="text"
      placeholder="Post Description"
      required
    />
    <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
      Add Post
    </button>
  </form>
);
export default AddPostPage;
