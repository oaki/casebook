'use client';

import {FC} from 'react';
import {Box, Typography, MenuItem} from '@mui/material';
import {FormGroupTitle} from '@/components/form/FormGroupTitle';
import {FormFieldWrapper} from '@/components/form/FormFieldWrapper';
import {FormSelect} from '@/components/form/FormSelect';
import {FormMultiSelect} from '@/components/form/FormMultiSelect';
import {FormTextArea} from '@/components/form/FormTextArea';
import {RequiredAsterisk} from '@/components/form/RequiredAsterisk';
import {CaseFormData} from '@/state/caseFormAtoms';
import {useTranslation} from "react-i18next";
import {i18nConfig} from "@/lib/i18n-config";

export const Step3ExaminationFindings: FC<Step3ExaminationFindingsProps> = ({
                                                                                 formData,
                                                                                 errors,
                                                                                 onChange,
                                                                                 onBlur,
                                                                             }) => {
    const {t} = useTranslation();

    const familyHistoryOptions = Object.entries(i18nConfig.resources.sk.translation.caseForm.examinationFindings.familyHistoryOptions).map(([value]) => ({ value, label: t(`caseForm.examinationFindings.familyHistoryOptions.${value}`) }));
    const microbiomeFactorsOptions = Object.entries(i18nConfig.resources.sk.translation.caseForm.examinationFindings.microbiomeFactorsOptions).map(([value ]) => ({ value, label: t(`caseForm.examinationFindings.microbiomeFactorsOptions.${value}`) }));
    const nutritionalHistoryOptions = Object.entries(i18nConfig.resources.sk.translation.caseForm.examinationFindings.nutritionalHistoryOptions).map(([value]) => ({ value, label: t(`caseForm.examinationFindings.nutritionalHistoryOptions.${value}`) }));
    const clinicalSymptomsOptions = Object.entries(i18nConfig.resources.sk.translation.caseForm.examinationFindings.clinicalSymptomsOptions).map(([value]) => ({ value, label: t(`caseForm.examinationFindings.clinicalSymptomsOptions.${value}`) }));

    return (
        <Box sx={{pt: 2}}>
            <FormGroupTitle>
                {t('caseForm.examinationFindings.title')}
            </FormGroupTitle>
            <Box sx={{display: 'grid', gap: 2}}>
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
                        {t('caseForm.examinationFindings.familyHistoryLabel')}<RequiredAsterisk/>
                    </Typography>
                    <FormSelect
                        name="familyHistory"
                        value={formData.familyHistory}
                        onChange={(e) => onChange('familyHistory', e.target.value as string)}
                        onBlur={() => onBlur('familyHistory')}
                        error={!!errors.familyHistory}
                        helperText={errors.familyHistory}
                    >
                        {familyHistoryOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </FormSelect>
                </FormFieldWrapper>

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
                        {t('caseForm.examinationFindings.microbiomeFactorsLabel')}<RequiredAsterisk/>
                    </Typography>
                    <FormMultiSelect
                        name="microbiomeFactors"
                        value={formData.microbiomeFactors}
                        onChange={(e) => onChange('microbiomeFactors', e.target.value as string[])}
                        onBlur={() => onBlur('microbiomeFactors')}
                        error={!!errors.microbiomeFactors}
                        helperText={errors.microbiomeFactors}
                        options={microbiomeFactorsOptions}
                    />
                </FormFieldWrapper>

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
                        {t('caseForm.examinationFindings.nutritionalHistoryLabel')}<RequiredAsterisk/>
                    </Typography>
                    <FormSelect
                        name="nutritionalHistory"
                        value={formData.nutritionalHistory}
                        onChange={(e) => onChange('nutritionalHistory', e.target.value as string)}
                        onBlur={() => onBlur('nutritionalHistory')}
                        error={!!errors.nutritionalHistory}
                        helperText={errors.nutritionalHistory}
                    >
                        {nutritionalHistoryOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </FormSelect>
                </FormFieldWrapper>

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
                        {t('caseForm.examinationFindings.clinicalSymptomsLabel')}<RequiredAsterisk/>
                    </Typography>
                    <FormMultiSelect
                        name="clinicalSymptoms"
                        value={formData.clinicalSymptoms}
                        onChange={(e) => onChange('clinicalSymptoms', e.target.value as string[])}
                        onBlur={() => onBlur('clinicalSymptoms')}
                        error={!!errors.clinicalSymptoms}
                        helperText={errors.clinicalSymptoms}
                        options={clinicalSymptomsOptions}
                    />
                </FormFieldWrapper>

                <FormTextArea
                    name="otherSymptoms"
                    label={t('caseForm.examinationFindings.otherSymptomsLabel')}
                    value={formData.otherSymptoms}
                    onChange={(e) => onChange('otherSymptoms', e.target.value)}
                    onBlur={() => onBlur('otherSymptoms')}
                    error={!!errors.otherSymptoms}
                    helperText={errors.otherSymptoms}
                />
            </Box>
        </Box>
    );
};

type Step3ExaminationFindingsProps = {
    formData: CaseFormData;
    errors: Record<string, string>;
    onChange: (field: string, value: string | string[] | File[]) => void;
    onBlur: (field: string) => void;
};
