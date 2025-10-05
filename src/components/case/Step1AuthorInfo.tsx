'use client';

import {FC} from 'react';
import {Box} from '@mui/material';
import {LabeledInput} from '@/components/form/LabeledInput';
import {FormGroupTitle} from '@/components/form/FormGroupTitle';
import {CaseFormData} from '@/state/caseFormAtoms';
import {useTranslation} from "react-i18next";

export const Step1AuthorInfo: FC<Step1AuthorInfoProps> = ({formData, errors, onChange, onBlur}) => {
    const { t } = useTranslation();
    return (
        <Box sx={{pt: 2}}>
            <FormGroupTitle>
                {t('caseForm.authorInfo.title')}
            </FormGroupTitle>
            <Box sx={{display: 'grid', gap: 2}}>
                <LabeledInput
                    name="name"
                    label={t('caseForm.authorInfo.nameLabel')}
                    placeholder={t('caseForm.authorInfo.namePlaceholder')}
                    required
                    value={formData.name}
                    onChange={(e) => onChange('name', e.target.value)}
                    onBlur={() => onBlur('name')}
                    error={!!errors.name}
                    helperText={errors.name}
                />
                <LabeledInput
                    name="specialization"
                    label={t('caseForm.authorInfo.specializationLabel')}
                    placeholder={t('caseForm.authorInfo.specializationPlaceholder')}
                    required
                    value={formData.specialization}
                    onChange={(e) => onChange('specialization', e.target.value)}
                    onBlur={() => onBlur('specialization')}
                    error={!!errors.specialization}
                    helperText={errors.specialization}
                />
                <LabeledInput
                    name="workplace"
                    label={t('caseForm.authorInfo.workplaceLabel')}
                    placeholder={t('caseForm.authorInfo.workplacePlaceholder')}
                    required
                    value={formData.workplace}
                    onChange={(e) => onChange('workplace', e.target.value)}
                    onBlur={() => onBlur('workplace')}
                    error={!!errors.workplace}
                    helperText={errors.workplace}
                />
            </Box>
        </Box>
    );
};

type Step1AuthorInfoProps = {
    formData: CaseFormData;
    errors: Record<string, string>;
    onChange: (field: string, value: string | string[] | File[]) => void;
    onBlur: (field: string) => void;
};
