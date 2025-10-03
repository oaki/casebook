'use client';

import {FC} from 'react';
import {TextField, TextFieldProps} from '@mui/material';

export const FormTextArea: FC<FormTextAreaProps> = ({
                                                        error,
                                                        helperText,
                                                        rows = 6,
                                                        ...props
                                                    }) => {
    return (
        <TextField
            {...props}
            multiline
            rows={rows}
            variant="filled"
            fullWidth
            error={error}
            helperText={helperText}
            sx={{
                '& .MuiFilledInput-root': {
                    backgroundColor: '#f5f5f5',
                    color: '#3C3C3C',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    '&:hover': {
                        backgroundColor: '#eeeeee',
                    },
                    '&.Mui-focused': {
                        backgroundColor: '#f5f5f5',
                    },
                },
                '& .MuiFilledInput-input': {

                    paddingBottom: '16px',
                },
                ...props.sx,
            }}
        />
    );
};

type FormTextAreaProps = Omit<TextFieldProps, 'variant' | 'multiline'> & {
    error?: boolean;
    helperText?: string;
    rows?: number;
};
