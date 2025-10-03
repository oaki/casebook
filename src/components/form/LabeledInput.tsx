'use client';

import {FC} from 'react';
import {Typography} from '@mui/material';
import {FormTextField} from '@/components/form/FormTextField';
import {FormFieldWrapper} from '@/components/form/FormFieldWrapper';
import {RequiredAsterisk} from '@/components/form/RequiredAsterisk';

export const LabeledInput: FC<LabeledInputProps> = ({
    label,
    required,
    error,
    helperText,
    value,
    onChange,
    onBlur,
    ...textFieldProps
}) => {
    return (
        <FormFieldWrapper>
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
                {label}
                {required && <RequiredAsterisk />}
            </Typography>
            <FormTextField
                {...textFieldProps}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={error}
                helperText={helperText}
            />
        </FormFieldWrapper>
    );
};

type LabeledInputProps = {
    label: string;
    required?: boolean;
    error?: boolean;
    helperText?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    type?: string;
    key?: string;
};
