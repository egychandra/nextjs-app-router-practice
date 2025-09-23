"use client";

import { useSession } from "next-auth/react"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else {
      if(session !== undefined && session?.user?.role !== "admin") {
        router.push("/");
      }
    }
  }, [status, session, session?.user?.role, router]);
  
  return (
    <div className="w-full h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
      <h1>Dashboard Page</h1>
    </div>
  )
}

export default DashboardPage