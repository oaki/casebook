'use client';

import {FC} from 'react';
import {ToggleButtonGroup, ToggleButton, Box} from '@mui/material';
import Image from 'next/image';

const systemOptions = [
    {
        value: 'digestive',
        label: 'Tráviaci trakt',
        icon: '/assets/icons/intestine.svg',
        color: '#8B7BA8',
    },
    {
        value: 'skin',
        label: 'Koža',
        icon: '/assets/icons/skin.svg',
        color: '#D4916C',
    },
    {
        value: 'respiratory',
        label: 'Respiračný trakt',
        icon: '/assets/icons/lungs.svg',
        color: '#82A884',
    },
];

export const AffectedSystemsToggle: FC<AffectedSystemsToggleProps> = ({
    value,
    onChange,
}) => {
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
                        borderLeft: '2px solid #3C3C3C4D',
                        marginLeft: 0,
                    },
                    '&:first-of-type': {
                        borderRadius: '35px !important',
                    },
                },
            }}
        >
            {systemOptions.map((system) => (
                <ToggleButton
                    key={system.value}
                    value={system.value}
                    sx={{
                        border: '2px solid #3C3C3C4D !important',
                        borderRadius: '35px !important',
                        px: 2,
                        py: 1.5,
                        textTransform: 'none',
                        color: '#3C3C3C',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        '&:hover': {
                            backgroundColor: '#F5F5F5',
                            borderColor: '#3C3C3C4D !important',
                        },
                        '&.Mui-selected': {
                            backgroundColor: system.color,
                            color: '#FFFFFF',
                            border: `2px solid ${system.color} !important`,
                            '&:hover': {
                                backgroundColor: system.color,
                                opacity: 0.9,
                            },
                            '& img': {
                                filter: 'brightness(0) invert(1)',
                            },
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: 24,
                            height: 24,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            src={system.icon}
                            alt={system.label}
                            width={24}
                            height={24}
                            style={{
                                filter: value?.includes(system.value)
                                    ? 'brightness(0) invert(1)'
                                    : 'none',
                            }}
                        />
                    </Box>
                    {system.label}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};

type AffectedSystemsToggleProps = {
    value: string[];
    onChange: (event: React.MouseEvent<HTMLElement>, newValue: string[]) => void;
};
