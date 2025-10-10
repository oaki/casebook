// ProductsToggle.tsx
'use client';

import {FC} from 'react';
import {ToggleButtonGroup, ToggleButton} from '@mui/material';
import {productOptions, ProductValue} from '@/lib/productOptions';

export interface ProductsToggleProps {
    value: string[];
    onChange: (event: React.MouseEvent<HTMLElement>, newValue: ProductValue[]) => void;
}

export const ProductsToggle: FC<ProductsToggleProps> = ({ value, onChange }) => {
    return (
        <ToggleButtonGroup
            value={value}
            onChange={onChange}
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                '& .MuiToggleButtonGroup-grouped': {
                    margin: 0,
                    border: '2px solid #3C3C3C4D',
                    borderRadius: '35px !important',
                    '&:not(:first-of-type)': {
                        marginLeft: 0,
                    },
                    '&:first-of-type': {
                        borderRadius: '35px !important',
                    },
                },
            }}
        >
            {productOptions.map(option => (
                <ToggleButton
                    key={option.value}
                    value={option.value}
                    sx={{
                        background: 'none',
                        color: '#3C3C3C!important',
                        border: 'none',
                        borderRadius: '35px',
                        textTransform: 'none',
                        minWidth: 120,
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        padding: '12px 16px',
                        '&.Mui-selected': {
                            border: '2px solid #3C3C3C !important',
                            backgroundColor: '#f5f5f5'
                        },
                        '&:not(:first-of-type)': {
                            marginLeft: 0,
                        },
                        '&:first-of-type': {
                            borderRadius: '35px !important',
                        },
                    }}
                >
                    {option.label}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};

export default ProductsToggle;
