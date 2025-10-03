'use client';

import {FC, useState} from 'react';
import PrimaryButton from '@/components/PrimaryButton';
import {AddCaseModal} from '@/components/case/AddCaseModal';

export const AddCaseButton: FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <PrimaryButton
                onClick={() => setOpen(true)}
                startIcon={<span style={{fontSize: '20px', fontWeight: 'bold'}}>+</span>}
            >
                Pridať novú kazuistiku
            </PrimaryButton>
            <AddCaseModal
                open={open}
                onCloseAction={() => setOpen(false)}
            />
        </>
    );
};
