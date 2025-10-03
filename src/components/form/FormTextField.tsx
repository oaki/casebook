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
                    backgroundColor: '#f5f5f5',
                    color: '#3C3C3C',
                    paddingLeft: '0.5rem',
                    paddingRight: '0.5rem',
                    '&:hover': {
                        backgroundColor: '#eeeeee',
                    },
                    '&.Mui-focused': {
                        backgroundColor: '#f5f5f5',
                    },
                },
                '& .MuiFilledInput-input': {
                    paddingTop: '16px',
                    paddingBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                },
                '& .MuiInputLabel-root': {
                    paddingLeft: '0.5rem',
                },
                ...props.sx,
            }}
        />
    );
};

type FormTextFieldProps = Omit<TextFieldProps, 'variant'>;
