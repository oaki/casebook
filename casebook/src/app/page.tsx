import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth/config"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to NUTRICIA Casebook</h1>
      <p>Hello, {session.user?.email}</p>
      <p>You are successfully authenticated!</p>
    </div>
  )
}
