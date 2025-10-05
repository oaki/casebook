'use client';

import {FC} from 'react';
import {Box} from '@mui/material';
import {FormGroupTitle} from '@/components/form/FormGroupTitle';
import {FormTextArea} from '@/components/form/FormTextArea';
import {CaseFormData} from '@/state/caseFormAtoms';
import {useTranslation} from "react-i18next";

export const Step4Diagnosis: FC<Step4DiagnosisProps> = ({
                                                            formData,
                                                            errors,
                                                            onChange,
                                                            onBlur,
                                                        }) => {
    const {t} = useTranslation();
    return (
        <Box sx={{pt: 2}}>
            <FormGroupTitle>
                {t('caseForm.diagnosis.title')}
            </FormGroupTitle>
            <Box sx={{display: 'grid', gap: 2}}>
                <FormTextArea
                    name="diagnosis"
                    label={t('caseForm.diagnosis.diagnosisLabel')}
                    value={formData.diagnosis}
                    onChange={(e) => onChange('diagnosis', e.target.value)}
                    onBlur={() => onBlur('diagnosis')}
                    placeholder={t('caseForm.diagnosis.diagnosisPlaceholder')}
                    rows={8}
                    error={!!errors.diagnosis}
                    helperText={errors.diagnosis}
                    required
                />
            </Box>
        </Box>
    );
};

type Step4DiagnosisProps = {
    formData: CaseFormData;
    errors: Record<string, string>;
    onChange: (field: string, value: string | string[] | File[]) => void;
    onBlur: (field: string) => void;
};
