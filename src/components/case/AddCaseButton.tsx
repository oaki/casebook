'use client';

import {FC, useState} from 'react';
import PrimaryButton from '@/components/PrimaryButton';
import {AddCaseModal} from '@/components/case/AddCaseModal';
import {useTranslation} from "react-i18next";

export const AddCaseButton: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const {t} = useTranslation();

    return (
        <>
            <PrimaryButton
                onClick={() => setOpen(true)}
                startIcon={<span style={{fontSize: '20px', fontWeight: 'bold'}}>+</span>}
            >
                {t('caseForm.addCaseTitle')}
            </PrimaryButton>
            <AddCaseModal
                open={open}
                onCloseAction={() => setOpen(false)}
            />
        </>
    );
};
