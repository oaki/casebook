'use client';

import {FC} from 'react';
import {Box, Typography} from '@mui/material';

export const Step7SubmissionMessage: FC = () => {
    return (
        <Box sx={{pt: 2}}>
            <Typography
                sx={{
                    fontSize: 20,
                    fontWeight: 600,
                    textAlign: 'center',
                    color: '#1F2A55',
                    mb: 3,
                }}
            >
                Ďakujeme, Vaša kazuistika bola úspešne odoslaná na schválenie.
            </Typography>
            <Typography
                sx={{
                    fontSize: 16,
                    lineHeight: 1.5,
                    textAlign: 'center',
                    color: '#3C3C3C',
                    maxWidth: 720,
                    mx: 'auto',
                }}
            >
                Naši administrátori teraz podrobia Vašu kazuistiku kontrole. Pokiaľ bude všetko v poriadku,
                kazuistika bude publikovaná a dostupná k nahliadnutiu v našej aplikácii.
            </Typography>
        </Box>
    );
};

