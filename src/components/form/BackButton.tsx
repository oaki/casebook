'use client';

import {FC} from 'react';
import {Button, ButtonProps} from '@mui/material';

export const BackButton: FC<BackButtonProps> = ({children, ...props}) => {
    return (
        <Button
            {...props}
            variant="outlined"
            sx={{
                backgroundColor: '#ffffff',
                color: '#51338B',
                borderColor: '#51338B',
                borderRadius: 28,
                fontWeight: 'bold',
                width: 220,
                height: 56,
                border: '2px solid #51338B',
                '&.Mui-disabled': {
                    opacity: 1,
                    backgroundColor: '#f5f5f5',
                    color: '#62646eff',
                    borderColor: '#d0d0d0ff',
                },
                '&:hover': {
                    backgroundColor: '#f5f5f5',
                    borderColor: '#51338B',
                    border: '2px solid #51338B',
                },
                ...props.sx,
            }}
        >
            {children}
        </Button>
    );
};

type BackButtonProps = ButtonProps;

