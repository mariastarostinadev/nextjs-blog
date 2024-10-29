import { createPost } from "@/actions/actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function page() {
  
  return (
    <main className="text-center py-16 ">
      <h1 className="text-4xl md:text-5xl font-bold mb-5"> Create Post</h1>
      <form 
        action={createPost}
        className="flex flex-col max-w-[500px] mx-auto gap-2 my-10">
        <input 
            type="text"
            name="title"
            placeholder="Title for new post"
            className="border rounded px-3 h-10"
            required
            />
            <textarea 
              name="body"
              placeholder="Body content for new post"
              className="border rounded px-3 py-2"
              rows={6}
              required
              >
            </textarea>
        <button className="h-10 bg-slate-600 px-5 rounded text-white">Submit</button>
      </form>

      <LogoutLink className="bg-slate-100 px-3 py-2 rounded">
        Log out
      </LogoutLink>
    </main>
  );
}
