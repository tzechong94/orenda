import { ClerkProvider, SignIn } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/Sidebar";
import NextBreadcrumb from "@/components/NextBreadcrumb";
import Tailwind from "primereact/passthrough/tailwind";
import { auth } from "@clerk/nextjs/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Settleblocks",
  description: "Reconciliation solution",
};

export const maxDuration = 300;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (process.env.NODE_ENV === "development") {
    console.log("Running in development environment");
  } else if (process.env.NODE_ENV === "production") {
    console.log("Running in production environment");
  } else if (process.env.NODE_ENV === "test") {
    console.log("Running in test environment");
  } else {
    console.log("NODE_ENV is set to:", process.env.NODE_ENV);
  }

  return (
    <StoreProvider userId={userId}>
      <ClerkProvider>
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
          <html lang="en">
            <body suppressHydrationWarning={true} className={inter.className}>
              {userId !== null ? (
                <div className="flex w-full max-h-screen overflow-auto">
                  <div className="flex-[1] max-w-xs">
                    <Sidebar />
                  </div>
                  <div className="max-h-screen p-4 overflow-auto flex-[5]">
                    <NextBreadcrumb
                      homeElement={"Home"}
                      separator={<span> | </span>}
                      activeClasses="text-gray-500 font-underline"
                      containerClasses="flex py-5"
                      listClasses="hover:underline mx-2 "
                      capitalizeLinks
                    />
                    {children}
                  </div>
                </div>
              ) : (
                <>{children}</>
              )}
              <Toaster />
            </body>
          </html>
        </PrimeReactProvider>
      </ClerkProvider>
    </StoreProvider>
  );
}
