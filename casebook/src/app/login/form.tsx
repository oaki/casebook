'use client'
import {FC, useActionState, useEffect} from "react";
import {
    Alert,
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import {useRouter} from "next/navigation";
import {Controller, useForm} from "react-hook-form";
import {superstructResolver} from "@hookform/resolvers/superstruct";
import {useTranslation} from 'react-i18next';
import PrimaryButton from "../../components/PrimaryButton";
import {sendLoginEmailAction} from "./actions";
import {createLoginSchema, LoginFormData} from "./validation";
import "@/lib/i18n";
import { useFormStatus } from "react-dom";


const SubmitButton: FC = () => {
    const { pending } = useFormStatus();
    const { t } = useTranslation();

    console.log('Submit button pending:', {pending});

    return (
        <PrimaryButton type="submit" disabled={pending} loading={pending}>
            {t('form.submit.continue')}
            <span style={{paddingLeft: 6, fontSize: 18}}>›</span>
        </PrimaryButton>
    );
};

const LoginForm: FC = () => {
    const router = useRouter();
    const {t} = useTranslation();

    const loginSchema = createLoginSchema(t);

    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm<LoginFormData>({
        resolver: superstructResolver(loginSchema),
        defaultValues: {
            email: "",
            agree: false
        },
        mode: "onBlur"
    });

    const [state, formAction] = useActionState(sendLoginEmailAction, {
        error: undefined,
        message: undefined,
    });

    useEffect(() => {
        if (state.message === "Success") {
            router.push("/verify-request");
        }
    }, [state.message, router]);

    const onSubmit = (data: LoginFormData) => {
        const formData = new FormData();
        formData.append('email', data.email);
        formAction(formData);
    };

    return (
        <Box sx={{width: "100%", maxWidth: 680, textAlign: "center"}}>
            <Typography variant="h2" component="h1" gutterBottom>
                {t('page.title')}
            </Typography>
            <Typography variant="body1" sx={{maxWidth: 720, mx: "auto", mb: 5}}>
                {t('page.subtitle')}
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth sx={{mb: 3}}>
                    <Controller
                        name="email"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                id="email"
                                label={t('form.email.label')}
                                type="email"
                                variant="filled"
                                fullWidth
                                autoComplete="email"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        )}
                    />
                </FormControl>

                <FormControl error={!!errors.agree} sx={{mb: 2}}>
                    <Controller
                        name="agree"
                        control={control}
                        render={({field}) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        {...field}
                                        checked={field.value}
                                        sx={{color: "#5a47ff"}}
                                    />
                                }
                                label={
                                    <Typography component="span">
                                        {t('form.agreement.label')}{" "}
                                        <Link href="/terms" target="_blank" rel="noopener">
                                            {t('form.agreement.termsLink')}
                                        </Link>
                                    </Typography>
                                }
                            />
                        )}
                    />
                    {errors.agree && (
                        <FormHelperText>{errors.agree.message}</FormHelperText>
                    )}
                </FormControl>

                {state.error && (
                    <Alert severity="error" sx={{mt: 2}}>
                        {state.error}
                    </Alert>
                )}

                <Box sx={{mt: 4}}>
                    <SubmitButton />
                </Box>
            </form>
        </Box>
    );
};

export default LoginForm;
