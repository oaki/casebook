import { logout } from "@/lib/session";
import { redirect } from "next/navigation";

export async function GET(_request: Request, { params }: { params: { lang: string } }) {
    await logout();
    redirect(`/${params.lang}/login`);
}
