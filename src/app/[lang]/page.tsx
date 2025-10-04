import {redirect} from "next/navigation";
import {getSession} from "@/lib/session";

export default async function LangHome({ params }: { params: { lang: string } }) {
    const session = await getSession();
    const lang = params.lang;

    if (!session) {
        redirect(`/${lang}/login`);
    }

    redirect(`/${lang}/dashboard`);
}

