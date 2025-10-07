'use client';

import {FC} from 'react';
import {Box, MenuItem, FormHelperText} from '@mui/material';
import {LabeledInput} from '@/components/form/LabeledInput';
import {FormGroupTitle} from '@/components/form/FormGroupTitle';
import {FormSelect} from '@/components/form/FormSelect';
import {FormFieldWrapper} from '@/components/form/FormFieldWrapper';
import {AffectedSystemsToggle} from '@/components/form/AffectedSystemsToggle';
import {RequiredAsterisk} from '@/components/form/RequiredAsterisk';
import {FormLabel} from '@/components/form/FormLabel';
import {CaseFormData} from '@/state/caseFormAtoms';
import {useTranslation} from "react-i18next";

export const Step2CaseInfo: FC<Step2CaseInfoProps> = ({formData, errors, onChange, onBlur}) => {
    const { t } = useTranslation();
    return (
        <Box sx={{pt: 2}}>
            <FormGroupTitle>
                {t('caseForm.caseInfo.title')}
            </FormGroupTitle>
            <Box sx={{display: 'grid', gap: 2}}>
                <LabeledInput
                    name="caseName"
                    label={t('caseForm.caseInfo.caseNameLabel')}
                    placeholder={t('caseForm.caseInfo.caseNamePlaceholder')}
                    required
                    value={formData.caseName}
                    onChange={(e) => onChange('caseName', e.target.value)}
                    onBlur={() => onBlur('caseName')}
                    error={!!errors.caseName}
                    helperText={errors.caseName}
                />
                <LabeledInput
                    name="patientAgeMonths"
                    label={t('caseForm.caseInfo.patientAgeLabel')}
                    placeholder={t('caseForm.caseInfo.patientAgePlaceholder')}
                    type="number"
                    required
                    value={formData.patientAgeMonths}
                    onChange={(e) => onChange('patientAgeMonths', e.target.value)}
                    onBlur={() => onBlur('patientAgeMonths')}
                    error={!!errors.patientAgeMonths}
                    helperText={errors.patientAgeMonths}
                />
                <FormFieldWrapper>
                    <FormLabel>
                        {t('caseForm.caseInfo.genderLabel')}<RequiredAsterisk />
                    </FormLabel>
                    <FormSelect
                        name="gender"
                        value={formData.gender}
                        onChange={(e) => onChange('gender', e.target.value as string)}
                        onBlur={() => onBlur('gender')}
                        error={!!errors.gender}
                        helperText={errors.gender}
                    >
                        <MenuItem value="male">{t('caseForm.caseInfo.genderMale')}</MenuItem>
                        <MenuItem value="female">{t('caseForm.caseInfo.genderFemale')}</MenuItem>
                    </FormSelect>
                </FormFieldWrapper>
                <FormFieldWrapper>
                    <FormLabel>
                        {t('caseForm.caseInfo.affectedSystemsLabel')}<RequiredAsterisk />
                    </FormLabel>
                    <Box>
                        <AffectedSystemsToggle
                            value={formData.affectedSystems}
                            onChange={(e, newValue) => onChange('affectedSystems', newValue)}
                        />
                        {errors.affectedSystems && (
                            <FormHelperText error>{errors.affectedSystems}</FormHelperText>
                        )}
                    </Box>
                </FormFieldWrapper>
            </Box>
        </Box>
    );
};

type Step2CaseInfoProps = {
    formData: CaseFormData;
    errors: Record<string, string>;
    onChange: (field: string, value: string | string[] | File[]) => void;
    onBlur: (field: string) => void;
};
