import {redirect} from "next/navigation";
import {getSession} from "@/lib/session";

export default async function LangHome({params}: { params: Promise<{ lang: string }> }) {
    const session = await getSession();
    const {lang} = await params;

    if (!session) {
        redirect(`/${lang}/login`);
    }

    redirect(`/${lang}/dashboard`);
}

