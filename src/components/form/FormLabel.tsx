'use client';

import {FC, ReactNode} from 'react';
import {Typography} from '@mui/material';

export const FormLabel: FC<FormLabelProps> = ({children}) => {
    return (
        <Typography
            sx={{
                color: '#3C3C3C',
                fontSize: '16px',
                fontWeight: 600,
                pt: {
                    xs: 0,
                    sm: '16px',
                },
            }}
        >
            {children}
        </Typography>
    );
};

type FormLabelProps = {
    children: ReactNode;
};

