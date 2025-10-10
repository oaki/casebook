'use client'
import {FC, useActionState} from "react";
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
import {useTranslation} from 'react-i18next';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import {sendLoginEmailAction} from "./actions";
import {createLoginSchema} from "./validation";
import "@/lib/i18n";
import { useFormStatus } from "react-dom";
import PrimaryButton from "@/components/buttons/PrimaryButton";


const SubmitButton: FC = () => {
    const { pending } = useFormStatus();
    const { t } = useTranslation();

    return (
        <PrimaryButton type="submit" disabled={pending} loading={pending}>
            {t('form.submit.continue')}
            <span style={{paddingLeft: 6, fontSize: 18}}>›</span>
        </PrimaryButton>
    );
};

const LoginForm: FC<{ lang: string }> = ({ lang }) => {

    const {t} = useTranslation();

    const loginSchema = createLoginSchema(t);

    const [lastResult, formAction] = useActionState(sendLoginEmailAction, undefined);

    const [form, fields] = useForm({
        lastResult,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: loginSchema });
        },
        shouldValidate: 'onBlur',
        shouldRevalidate: 'onInput',
    });

    return (
        <Box sx={{width: "100%", maxWidth: 680, textAlign: "center"}}>
            <Typography variant="h2" component="h1" gutterBottom>
                {t('page.title')}
            </Typography>
            <Typography variant="body1" sx={{maxWidth: 720, mx: "auto", mb: 5}}>
                {t('page.subtitle')}
            </Typography>

            <form id={form.id} onSubmit={form.onSubmit} action={formAction} noValidate>
                <input type="hidden" name="lang" value={lang} />
                <FormControl fullWidth sx={{mb: 3}}>
                    <TextField
                        key={fields.email.key}
                        name={fields.email.name}
                        id="email"
                        label={t('form.email.label')}
                        type="email"
                        variant="filled"
                        fullWidth
                        autoComplete="email"
                        defaultValue={fields.email.initialValue}
                        error={!fields.email.valid}
                        helperText={fields.email.errors?.[0]}
                        required
                    />
                </FormControl>

                <FormControl error={!fields.agree.valid} sx={{mb: 2}}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                key={fields.agree.key}
                                name={fields.agree.name}
                                sx={{color: "#5a47ff"}}
                                required
                            />
                        }
                        label={
                            <Typography component="span">
                                {t('form.agreement.label')}{" "}
                                <Link href={`/${lang}/terms`} target="_blank" rel="noopener">
                                    {t('form.agreement.termsLink')}
                                </Link>
                            </Typography>
                        }
                    />
                    {fields.agree.errors && (
                        <FormHelperText>{fields.agree.errors[0]}</FormHelperText>
                    )}
                </FormControl>

                {form.errors && (
                    <Alert severity="error" sx={{mb: 2}}>
                        {form.errors}
                    </Alert>
                )}

                <Box sx={{mt: 4}}>
                    <SubmitButton />
                </Box>
            </form>
        </Box>
    );
};

export { LoginForm };
