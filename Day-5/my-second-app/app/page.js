import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <div>
    <Link href="/login" className="text-center text-2xl bg-blue-500 px-3 py-1 rounded-md text-white mx-auto">Login first</Link>
   </div>
   </>
  );
}
