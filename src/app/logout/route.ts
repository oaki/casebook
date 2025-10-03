import { logout } from "@/lib/session";
import { redirect } from "next/navigation";

export async function GET() {
    await logout();
    redirect("/");
}

