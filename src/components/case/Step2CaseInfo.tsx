'use client';

import {FC} from 'react';
import {Box, MenuItem, FormHelperText, Typography} from '@mui/material';
import {LabeledInput} from '@/components/form/LabeledInput';
import {FormGroupTitle} from '@/components/form/FormGroupTitle';
import {FormSelect} from '@/components/form/FormSelect';
import {FormFieldWrapper} from '@/components/form/FormFieldWrapper';
import {AffectedSystemsToggle} from '@/components/form/AffectedSystemsToggle';
import {RequiredAsterisk} from '@/components/form/RequiredAsterisk';
import {CaseFormData} from '@/state/caseFormAtoms';

export const Step2CaseInfo: FC<Step2CaseInfoProps> = ({formData, errors, onChange, onBlur}) => {
    return (
        <Box sx={{pt: 2}}>
            <FormGroupTitle>
                Krok 1/6: Základné údaje prípadu
            </FormGroupTitle>
            <Box sx={{display: 'grid', gap: 2}}>
                <LabeledInput
                    name="caseName"
                    label="Názov kazuistiky"
                    placeholder="Problémy so zažívaním dieťaťa po liečbe matky ATB"
                    required
                    value={formData.caseName}
                    onChange={(e) => onChange('caseName', e.target.value)}
                    onBlur={() => onBlur('caseName')}
                    error={!!errors.caseName}
                    helperText={errors.caseName}
                />
                <LabeledInput
                    name="patientAgeMonths"
                    label="Vek pacienta v mesiacoch"
                    placeholder="4"
                    type="number"
                    required
                    value={formData.patientAgeMonths}
                    onChange={(e) => onChange('patientAgeMonths', e.target.value)}
                    onBlur={() => onBlur('patientAgeMonths')}
                    error={!!errors.patientAgeMonths}
                    helperText={errors.patientAgeMonths}
                />
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
                        Pohlavie<RequiredAsterisk />
                    </Typography>
                    <FormSelect
                        name="gender"
                        value={formData.gender}
                        onChange={(e) => onChange('gender', e.target.value as string)}
                        onBlur={() => onBlur('gender')}
                        error={!!errors.gender}
                        helperText={errors.gender}
                    >
                        <MenuItem value="male">Chlapec</MenuItem>
                        <MenuItem value="female">Dievča</MenuItem>
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
                                sm: '8px',
                            },
                        }}
                    >
                        Postihnuté sústavy<RequiredAsterisk />
                    </Typography>
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
