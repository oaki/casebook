'use client';

import {FC, useState} from 'react';
import {Select, SelectProps, FormControl, FormHelperText, MenuItem, Chip, Box} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const FormMultiSelect: FC<FormMultiSelectProps> = ({
    error,
    helperText,
    value = [],
    options,
    placeholder = 'Vyberte...',
    onChange,
    ...props
}) => {
    const [open, setOpen] = useState(false);

    const handleChange = (event: any) => {
        onChange?.(event);
        // Close dropdown after selection
        setOpen(false);
    };

    return (
        <Box>
            <FormControl fullWidth error={error}>
                <Select
                    {...props}
                    multiple
                    value={value}
                    onChange={handleChange}
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    displayEmpty
                    IconComponent={KeyboardArrowDownIcon}
                    renderValue={(selected) => {
                        if (!selected || selected.length === 0) {
                            return <Box sx={{color: '#999'}}>{placeholder}</Box>;
                        }
                        return <Box sx={{color: '#3C3C3C'}}>{placeholder}</Box>;
                    }}
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
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                {helperText && (
                    <FormHelperText>{helperText}</FormHelperText>
                )}
            </FormControl>

            {/* Selected chips displayed below the select */}
            {value && value.length > 0 && (
                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1}}>
                    {value.map((val) => (
                        <Chip
                            key={val}
                            label={options.find(opt => opt.value === val)?.label || val}
                            onDelete={(e) => {
                                e.stopPropagation();
                                const newValue = value.filter((item) => item !== val);
                                onChange?.({target: {value: newValue}} as any);
                            }}
                            sx={{
                                height: '32px',
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #E0E0E0',
                                borderRadius: '16px',
                                '& .MuiChip-label': {
                                    color: '#3C3C3C',
                                    fontSize: '14px',
                                },
                                '& .MuiChip-deleteIcon': {
                                    color: '#3C3C3C',
                                    fontSize: '18px',
                                    '&:hover': {
                                        color: '#000000',
                                    },
                                },
                            }}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
};

type FormMultiSelectProps = Omit<SelectProps<string[]>, 'multiple' | 'renderValue'> & {
    error?: boolean;
    helperText?: string;
    options: Array<{value: string; label: string}>;
    placeholder?: string;
    value?: string[];
    onChange?: (event: any) => void;
};
