'use client';

import {FC, ReactNode} from 'react';
import {Select, SelectProps, FormControl, FormHelperText} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const FormSelect: FC<FormSelectProps> = ({
    error,
    helperText,
    children,
    ...props
}) => {
    return (
        <FormControl fullWidth error={error}>
            <Select
                {...props}
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                    backgroundColor: '#f5f5f5',
                    color: '#3C3C3C',
                    paddingLeft: '0.5rem',
                    paddingRight: '0.5rem',
                    borderRadius: '16px',
                    '&:hover': {
                        backgroundColor: '#eeeeee',
                    },
                    '&.Mui-focused': {
                        backgroundColor: '#f5f5f5',
                    },
                    '& .MuiSelect-select': {
                        paddingTop: '16px',
                        paddingBottom: '16px',
                    },
                    '& .MuiSelect-icon': {
                        color: '#3C3C3C',
                        right: '12px',
                    },
                    '& fieldset': {
                        border: 'none',
                    },
                    '&::before, &::after': {
                        display: 'none',
                    },
                    ...props.sx,
                }}
            >
                {children}
            </Select>
            {helperText && (
                <FormHelperText>{helperText}</FormHelperText>
            )}
        </FormControl>
    );
};

type FormSelectProps = SelectProps & {
    error?: boolean;
    helperText?: string;
    children: ReactNode;
};
