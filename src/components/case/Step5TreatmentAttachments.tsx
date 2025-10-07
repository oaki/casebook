'use client';

import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Typography, MenuItem} from '@mui/material';
import {FormGroupTitle} from '@/components/form/FormGroupTitle';
import {FormFieldWrapper} from '@/components/form/FormFieldWrapper';
import {FormSelect} from '@/components/form/FormSelect';
import {FormTextArea} from '@/components/form/FormTextArea';
import {RequiredAsterisk} from '@/components/form/RequiredAsterisk';
import {ImageUpload} from '@/components/form/ImageUpload';
import {CaseFormData} from '@/state/caseFormAtoms';
import {productOptions} from '@/lib/productOptions';

export const Step5TreatmentAttachments: FC<Step5TreatmentAttachmentsProps> = ({
    formData,
    errors,
    onChange,
    onBlur,
}) => {
    const {t} = useTranslation();

    return (
        <Box sx={{pt: 2}}>
            <FormGroupTitle>
                {t('caseForm.treatment.title')}
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
                        {t('caseForm.treatment.usedProductLabel')}<RequiredAsterisk />
                    </Typography>
                    <FormSelect
                        name="usedProduct"
                        value={formData.usedProduct}
                        onChange={(e) => onChange('usedProduct', e.target.value as string)}
                        onBlur={() => onBlur('usedProduct')}
                        displayEmpty
                        error={!!errors.usedProduct}
                        helperText={errors.usedProduct}
                    >
                        <MenuItem value="" disabled>{t('caseForm.treatment.usedProductPlaceholder')}</MenuItem>
                        {productOptions.map((option) => (
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
                        {t('caseForm.treatment.treatmentDescriptionLabel')}<RequiredAsterisk />
                    </Typography>
                    <FormTextArea
                        name="treatmentDescription"
                        value={formData.treatmentDescription}
                        onChange={(e) => onChange('treatmentDescription', e.target.value)}
                        onBlur={() => onBlur('treatmentDescription')}
                        placeholder={t('caseForm.treatment.treatmentDescriptionPlaceholder')}
                        rows={6}
                        error={!!errors.treatmentDescription}
                        helperText={errors.treatmentDescription}
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
                        {t('caseForm.treatment.attachmentsLabel')}
                    </Typography>
                    <ImageUpload
                        files={formData.attachments}
                        onChange={(files) => onChange('attachments', files)}
                    />
                </FormFieldWrapper>
            </Box>
        </Box>
    );
};

type Step5TreatmentAttachmentsProps = {
    formData: CaseFormData;
    errors: Record<string, string>;
    onChange: (field: string, value: string | string[] | File[]) => void;
    onBlur: (field: string) => void;
};
