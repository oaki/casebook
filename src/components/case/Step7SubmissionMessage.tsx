'use client';

import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Typography} from '@mui/material';

export const Step7SubmissionMessage: FC = () => {
    const {t} = useTranslation();

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
                {t('caseForm.submission.title')}
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
                {t('caseForm.submission.message')}
            </Typography>
        </Box>
    );
};
