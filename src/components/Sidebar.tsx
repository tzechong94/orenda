"use client";
import { Files, Phone, PlusCircle } from "lucide-react";
import React from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const segment = usePathname();

  return (
    <div className="w-full h-screen p-4 text-gray-200 bg-gray-900 relative">
      <Button className="w-full border-dashed border-white border">
        <PlusCircle className="mr-2 w-4 h-4" />
        create
      </Button>

      {/* <Link href="/transform">
        <div
          className={cn("rounded-lg p-3 text-slate-300 flex items-center", {
            "bg-blue-600 text-white": segment === "/transform",
            "hover:text-white": segment !== "/transform",
          })}
        >
          <Files className="mr-2" />
          <p className="w-full overflow-hidden text-sm truncate whitespace-nowrap text-ellipsis">
            Transform
          </p>
        </div>
      </Link> */}

      {/* <Link href="/sources">
        <div
          className={cn("rounded-lg p-3 text-slate-300 flex items-center", {
            "bg-blue-600 text-white": segment === "/sources",
            "hover:text-white": segment !== "/sources",
          })}
        >
          <Files className="mr-2" />
          <p className="w-full overflow-hidden text-sm truncate whitespace-nowrap text-ellipsis">
            Sources
          </p>
        </div>
      </Link>
      <Link href="/recon">
        <div
          className={cn("rounded-lg p-3 text-slate-300 flex items-center", {
            "bg-blue-600 text-white": segment === "/recon",
            "hover:text-white": segment !== "/recon",
          })}
        >
          <Files className="mr-2" />
          <p className="w-full overflow-hidden text-sm truncate whitespace-nowrap text-ellipsis">
            Reconciliation
          </p>
        </div>
      </Link> */}
      <div className="absolute bottom-6 left-6">
        {/* <Link href="/contact">
          <Button className="w-full border-white border mb-4">
            <Phone className="mr-2 w-4 h-4" />
            <p className="w-full overflow-hidden text-sm truncate whitespace-nowrap text-ellipsis">
              Contact Us
            </p>
          </Button>
        </Link>
 */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Sidebar;
