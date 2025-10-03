'use client';

import {FC} from 'react';
import {Button, ButtonProps, CircularProgress} from '@mui/material';

export const NextButton: FC<NextButtonProps> = ({loading, children, ...props}) => {
    return (
        <Button
            {...props}
            variant="contained"
            sx={{
                backgroundColor: props.disabled || loading ? '#d0d0d0ff' : '#51338B',
                color: '#ffffff',
                borderRadius: 28,
                fontWeight: 'bold',
                width: 220,
                height: 56,
                pointerEvents: props.disabled || loading ? 'none' : 'auto',
                '&.Mui-disabled': {
                    opacity: 1,
                    backgroundColor: '#d0d0d0ff',
                    color: '#62646eff',
                },
                '&:hover': {
                    backgroundColor: props.disabled || loading ? '#d0d0d0ff' : '#3d2569',
                },
                ...props.sx,
            }}
            disabled={props.disabled || loading}
        >
            {loading ? (
                <CircularProgress size={24} aria-label="loading" sx={{color: '#ffffff'}} />
            ) : (
                children
            )}
        </Button>
    );
};

type NextButtonProps = ButtonProps & {
    loading?: boolean;
};

