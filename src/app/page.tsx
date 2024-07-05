import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LogIn } from "lucide-react";
// import { createUserAction } from "./_actions";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;

  if (userId) {
    // createUserAction(userId!.toString());
  }

  return isAuth ? (
    <div className="w-full flex justify-center content-center">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center">
          <h1 className="mt-10 text-5xl font-semibold">
            customize knowledge base for chatgpt
          </h1>
        </div>
        <p className="max-w-xl my-10 text-lg text-slate-600">
          get more relevant responses
        </p>
        <div className="w-full mt-4">
          <Link href="/sources">
            <Button className="mx-2">create</Button>
          </Link>
          <Link href="/recon">
            <Button className="mx-2">update</Button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">
              customize knowledge base for chatgpt
            </h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <p className="max-w-xl mt-1 text-lg text-slate-600">
            get more relevant responses
          </p>
          <div className="w-full mt-4">
            {isAuth ? (
              <Link href="/recon">
                <Button>Recon now</Button>
              </Link>
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
