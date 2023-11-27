
import Link from "next/link"
import { ModeToggle } from "../ui/mode"
import UserMenu from "../parts/user"
import { getServerSession } from "next-auth"

export default async function AuthNav() {
  const session = await getServerSession()
  return (
    <div className="self-center space-x-3 hidden lg:flex ">
      {
        session && session.user ?
        <UserMenu />
        :
      <div className="flex space-x-3">
        <Link href="/login" className="border px-5 py-2 rounded hover:bg-primary-foreground">Login</Link>
        <Link href="/register" className="border px-5 py-2 rounded hover:bg-primary-foreground">Register</Link>
      </div>
      }
      <ModeToggle />
    </div>
  )
}