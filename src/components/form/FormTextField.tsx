'use client';

import {FC} from 'react';
import {TextField, TextFieldProps} from '@mui/material';

export const FormTextField: FC<FormTextFieldProps> = (props) => {
    return (
        <TextField
            {...props}
            variant="filled"
            fullWidth
            sx={{
                '& .MuiFilledInput-root': {
                    backgroundColor: '#f5f5f5', paddingLeft: '16px',
                    paddingRight: '16px',
                    borderRadius: '16px',
                    '&:hover': {
                        backgroundColor: '#eeeeee',
                    },
                    '&.Mui-focused': {
                        backgroundColor: '#f5f5f5',
                    },
                    '&::before, &::after': {
                        display: 'none',
                    },
                },
                '& .MuiFilledInput-input': {
                    paddingTop: '16px',
                    paddingBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                },
                '& .MuiInputLabel-root': {
                    paddingLeft: '16px',
                },
                ...props.sx,
            }}
        />
    );
};

type FormTextFieldProps = Omit<TextFieldProps, 'variant'>;
