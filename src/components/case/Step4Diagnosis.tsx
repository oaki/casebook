'use client';

import {FC} from 'react';
import {Box} from '@mui/material';
import {FormGroupTitle} from '@/components/form/FormGroupTitle';
import {FormFieldWrapper} from '@/components/form/FormFieldWrapper';
import {FormTextArea} from '@/components/form/FormTextArea';
import {RequiredAsterisk} from '@/components/form/RequiredAsterisk';
import {CaseFormData} from '@/state/caseFormAtoms';

export const Step4Diagnosis: FC<Step4DiagnosisProps> = ({
    formData,
    errors,
    onChange,
    onBlur,
}) => {
    return (
        <Box sx={{pt: 2}}>
            <FormGroupTitle>
                Krok 3/5: Diagnóza
            </FormGroupTitle>
            <Box sx={{display: 'grid', gap: 2}}>
                <FormFieldWrapper>
                    <Box
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
                        Diagnóza<RequiredAsterisk />
                    </Box>
                    <FormTextArea
                        name="diagnosis"
                        value={formData.diagnosis}
                        onChange={(e) => onChange('diagnosis', e.target.value)}
                        onBlur={() => onBlur('diagnosis')}
                        placeholder="2x UZ vyšetrenie pre vylúčenie pylorostenózy a invaginácie. Po zavedení Neocate Syneo rýchly ústup ťažkostí do 48 hodín..."
                        rows={8}
                        error={!!errors.diagnosis}
                        helperText={errors.diagnosis}
                    />
                </FormFieldWrapper>
            </Box>
        </Box>
    );
};

type Step4DiagnosisProps = {
    formData: CaseFormData;
    errors: Record<string, string>;
    onChange: (field: string, value: string | string[]) => void;
    onBlur: (field: string) => void;
};

