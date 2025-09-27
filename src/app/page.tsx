import {getServerSession} from "next-auth/next"
import {authOptions} from "@/lib/auth/config"
import {redirect} from "next/navigation"

export default async function Home() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/login')
    }

    redirect('/dashboard')
}
