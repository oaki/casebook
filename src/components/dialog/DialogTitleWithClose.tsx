'use client';

import {FC, ReactNode} from 'react';
import {DialogTitle, IconButton} from '@mui/material';
import Image from 'next/image';

export const DialogTitleWithClose: FC<DialogTitleWithCloseProps> = ({
                                                                        children,
                                                                        onClose,
                                                                        centered = true,
                                                                    }) => {
    return (
        <DialogTitle
            sx={{
                textAlign: centered ? 'center' : 'left',
                pt: 3,
                pb: 2,
                position: 'relative',
                color: '#2B3C90',
                fontWeight: 700,
                fontSize: '28px'
            }}
        >
            {children}
            {onClose && (
                <IconButton
                    onClick={onClose}
                    size="small"
                    sx={{
                        border: '1px solid #E0E0E0',
                        borderRadius: '50%',
                        backgroundColor: '#F9FAFB',
                        '&:hover': {
                            backgroundColor: '#F4F6F8',
                        },
                        position: 'absolute',
                        right: '1.3rem',
                        top: '1.3rem',
                    }}
                >
                    <Image
                        src="/assets/icons/close.svg"
                        alt="Close"
                        width={24}
                        height={24}
                    />
                </IconButton>
            )}
        </DialogTitle>
    );
};

type DialogTitleWithCloseProps = {
    children: ReactNode;
    onClose?: () => void;
    centered?: boolean;
};

