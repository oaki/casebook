import {redirect} from "next/navigation";

export default function Home() {
    // Redirect to default language (sk)
    redirect("/sk");
}
