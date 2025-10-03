'use client';

import {FC} from 'react';
import {Button, ButtonProps} from '@mui/material';

export const CancelButton: FC<CancelButtonProps> = ({children, ...props}) => {
    return (
        <Button
            {...props}
            variant="text"
            sx={{
                color: '#2B3C90',
                textTransform: 'none',
                fontSize: 16,
                fontWeight: 400,
                textDecoration: 'none',
                padding: '8px 16px',
                minWidth: 'auto',
                '&:hover': {
                    backgroundColor: 'transparent',
                    textDecoration: 'underline',
                },
                '&.Mui-disabled': {
                    color: '#62646eff',
                },
                ...props.sx,
            }}
        >
            {children}
        </Button>
    );
};

type CancelButtonProps = ButtonProps;

