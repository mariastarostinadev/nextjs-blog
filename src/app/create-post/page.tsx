import Form from "@/components/form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Page() {
  
  return (
    <main className="text-center py-16 ">
      <h1 className="text-4xl md:text-5xl font-bold mb-5"> Create Post</h1>
      <Form />
      <LogoutLink className="bg-slate-100 px-3 py-2 rounded">
        Log out
      </LogoutLink>
    </main>
  );
}
