'use client';

import {FC, ReactNode} from 'react';
import {Typography, SxProps} from '@mui/material';

export const FormGroupTitle: FC<FormGroupTitleProps> = ({children, sx}) => {
    return (
        <Typography
            variant="h6"
            sx={{
                mb: 5,
                fontSize: '22px',
                fontWeight: 700,
                color: '#2B3C90',
                ...sx,
            }}
        >
            {children}
        </Typography>
    );
};

type FormGroupTitleProps = {
    children: ReactNode;
    sx?: SxProps;
};

