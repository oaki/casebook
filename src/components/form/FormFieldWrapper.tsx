'use client';

import {FC, ReactNode} from 'react';
import {Box} from '@mui/material';

export const FormFieldWrapper: FC<FormFieldWrapperProps> = ({children}) => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: '220px 1fr',
                },
                alignItems: 'flex-start',
                gap: 2,
            }}
        >
            {children}
        </Box>
    );
};

type FormFieldWrapperProps = {
    children: ReactNode;
};

