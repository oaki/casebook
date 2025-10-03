'use client';

import {FC} from 'react';
import {Box, MenuItem, FormHelperText, ToggleButtonGroup, ToggleButton, Typography} from '@mui/material';
import {LabeledInput} from '@/components/form/LabeledInput';
import {FormGroupTitle} from '@/components/form/FormGroupTitle';
import {FormSelect} from '@/components/form/FormSelect';
import {FormFieldWrapper} from '@/components/form/FormFieldWrapper';
import {CaseFormData} from '@/state/caseFormAtoms';

export const Step2CaseInfo: FC<Step2CaseInfoProps> = ({formData, errors, onChange, onBlur}) => {
    return (
        <Box sx={{pt: 2}}>
            <FormGroupTitle>
                Základné údaje prípadu
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
                        Pohlavie <span style={{color: '#4c4c4c'}}>*</span>
                    </Typography>
                    <FormSelect
                        name="gender"
                        value={formData.gender}
                        onChange={(e) => onChange('gender', e.target.value as string)}
                        onBlur={() => onBlur('gender')}
                        displayEmpty
                        error={!!errors.gender}
                        helperText={errors.gender}
                    >
                        <MenuItem value="" disabled>Chlapec</MenuItem>
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
                        Postihnuté sústavy <span style={{color: '#4c4c4c'}}>*</span>
                    </Typography>
                    <Box>
                        <ToggleButtonGroup
                            value={formData.affectedSystems}
                            onChange={(e, newValue) => onChange('affectedSystems', newValue)}
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 1,
                            }}
                        >
                            <ToggleButton
                                value="digestive"
                                sx={{
                                    border: '2px solid #000',
                                    borderRadius: '24px',
                                    px: 3,
                                    py: 1.5,
                                    textTransform: 'none',
                                    '&.Mui-selected': {
                                        backgroundColor: '#51338B',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#3d2569',
                                        },
                                    },
                                }}
                            >
                                🫁 Tráviaci trakt
                            </ToggleButton>
                            <ToggleButton
                                value="skin"
                                sx={{
                                    border: '2px solid #000',
                                    borderRadius: '24px',
                                    px: 3,
                                    py: 1.5,
                                    textTransform: 'none',
                                    '&.Mui-selected': {
                                        backgroundColor: '#51338B',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#3d2569',
                                        },
                                    },
                                }}
                            >
                                🤲 Koža
                            </ToggleButton>
                            <ToggleButton
                                value="respiratory"
                                sx={{
                                    border: '2px solid #000',
                                    borderRadius: '24px',
                                    px: 3,
                                    py: 1.5,
                                    textTransform: 'none',
                                    '&.Mui-selected': {
                                        backgroundColor: '#51338B',
                                        color: '#fff',
                                        '&:hover': {
                                            backgroundColor: '#3d2569',
                                        },
                                    },
                                }}
                            >
                                🫁 Respiračný trakt
                            </ToggleButton>
                        </ToggleButtonGroup>
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
    onChange: (field: string, value: string | string[]) => void;
    onBlur: (field: string) => void;
};
