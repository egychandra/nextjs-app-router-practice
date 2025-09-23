import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const pathname = usePathname();
  // const router = useRouter();
    const { status }: { status: string } = useSession();

  return (
    <nav className="flex justify-between items-center bg-gray-800 py-5 px-5">
      <div className="flex">
        <h1 className="text-white">Navbar</h1>  
        <ul className="flex ml-5">
          <Link href="/">
            <li
              className={`mr-3 ${pathname === "/" ? "text-blue-300" : "text-white"} cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-3 ${pathname === "/about" ? "text-blue-300" : "text-white"} cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`mr-3 ${pathname === "/about/profile" ? "text-blue-300" : "text-white"} cursor-pointer`}
            >
              Profile
            </li>
          </Link>
        </ul>
      </div>
      <div>
        {status === "authenticated" ? (
          <button
            className="bg-white rounded-md py-2 px-3 cursor-pointer"
            onClick={() => signOut()}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-white rounded-md py-2 px-3 cursor-pointer"
            // onClick={() => router.push("/login")}
            onClick={() => signIn()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  )
}