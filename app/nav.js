import Link from "next/link"

export default function Nav(){
    return(
        <div className="flex flex-row justify-around w-2/5 ">
           <Link href="/">Home</Link>
           <Link href="/Meny">FAQ</Link>
           <Link href="/Meny">Meny</Link>
        </div>
    )
}