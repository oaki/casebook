import {Box} from "@mui/material";
import Logo from "../../../components/Logo";

import {getTranslations} from "@/lib/i18n-server";
import {LoginForm} from "@/app/[lang]/login/form";

type LoginPageProps = {
    params: Promise<{ lang: string }>;
};

export default async function LoginPage({params}: LoginPageProps) {
    const {lang} = await params;
    const {t} = await getTranslations(lang);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: 3,
                py: 6,
            }}
        >
            <Logo/>
            <LoginForm lang={lang} />
        </Box>
    );
};
