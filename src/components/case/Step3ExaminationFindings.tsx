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

const familyHistoryOptions = [
    {value: 'nie', label: 'Nie'},
    {value: 'ano_vyskyt_v_rodine', label: 'Áno, výskyt v rodine'},
];

const microbiomeFactorsOptions = [
    {value: 'predcasne_narodene_dieta', label: 'Predčasne narodené dieťa'},
    {value: 'porod_cisarskym_rezom', label: 'Pôrod cisárskym rezom'},
    {value: 'uzivanie_antibiotik', label: 'Užívanie antibiotík'},
    {value: 'surodenci_velka_domacnost', label: 'Súrodenci / Veľká domácnosť'},
    {value: 'zvierata', label: 'Zvieratá'},
    {value: 'uzivanie_atb_u_matky', label: 'Užívanie ATB u matky'},
    {value: 'uzivanie_atb_u_dietata', label: 'Užívanie ATB u dieťaťa'},
    {value: 'fajcenie', label: 'Fajčenie'},
];

const nutritionalHistoryOptions = [
    {value: 'mm_bez_eliminacnej_diery', label: 'MM (bez eliminačnej diéty matky)'},
    {value: 'mm_s_eliminacnej_diery', label: 'MM (s eliminačnej diéty matky)'},
    {value: 'standardna_formula', label: 'Štandardná formula (značka)'},
    {value: 'phf', label: 'pHF (značka)'},
    {value: 'ehf', label: 'eHF (značka)'},
    {value: 'aaf', label: 'AAF (značka)'},
];

const clinicalSymptomsOptions = [
    {value: 'ekzem', label: 'Ekzém'},
    {value: 'atopicka_dermatitida', label: 'Atopická dermatitída'},
    {value: 'urtikacia', label: 'Urtikácia'},
    {value: 'reflux', label: 'Reflux'},
    {value: 'regurgitacia', label: 'Regurgitácia'},
    {value: 'kolika', label: 'Kolika'},
    {value: 'zacpa', label: 'Zápcha'},
    {value: 'krv_hlien_v_stolici', label: 'Krv / Hlien v stolici'},
    {value: 'hnacka', label: 'Hnačka'},
    {value: 'plynatost', label: 'Plynatosť'},
    {value: 'dyschezia', label: 'Dyschézia'},
    {value: 'tvrda_stolica', label: 'Tvrdá stolica'},
    {value: 'sipot', label: 'Sipot'},
    {value: 'nadcha', label: 'Nádcha'},
    {value: 'respiracne_infekcie', label: 'Respiračné infekcie'},
    {value: 'neprospievanie', label: 'Neprospievanie'},
];

export const Step3ExaminationFindings: FC<Step3ExaminationFindingsProps> = ({
    formData,
    errors,
    onChange,
    onBlur,
}) => {
    return (
        <Box sx={{pt: 2}}>
            <FormGroupTitle>
                Krok 2/5: Vyšetrenie a nález
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
                        Rodinná anamnéza<RequiredAsterisk />
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
                        Mikrobiómové faktory<RequiredAsterisk />
                    </Typography>
                    <FormMultiSelect
                        name="microbiomeFactors"
                        value={formData.microbiomeFactors}
                        onChange={(e) => onChange('microbiomeFactors', e.target.value)}
                        options={microbiomeFactorsOptions}
                        placeholder="Vyberte..."
                        error={!!errors.microbiomeFactors}
                        helperText={errors.microbiomeFactors}
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
                        Nutričná história<RequiredAsterisk />
                    </Typography>
                    <FormSelect
                        name="nutritionalHistory"
                        value={formData.nutritionalHistory}
                        onChange={(e) => onChange('nutritionalHistory', e.target.value as string)}
                        onBlur={() => onBlur('nutritionalHistory')}
                        displayEmpty
                        error={!!errors.nutritionalHistory}
                        helperText={errors.nutritionalHistory}
                    >
                        <MenuItem value="" disabled>Vyberte...</MenuItem>
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
                        Klinické symptómy<RequiredAsterisk />
                    </Typography>
                    <FormMultiSelect
                        name="clinicalSymptoms"
                        value={formData.clinicalSymptoms}
                        onChange={(e) => onChange('clinicalSymptoms', e.target.value)}
                        options={clinicalSymptomsOptions}
                        placeholder="Krv / Hlien v stolici"
                        error={!!errors.clinicalSymptoms}
                        helperText={errors.clinicalSymptoms}
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
                        Popis problému<RequiredAsterisk />
                    </Typography>
                    <FormTextArea
                        name="problemDescription"
                        value={formData.problemDescription}
                        onChange={(e) => onChange('problemDescription', e.target.value)}
                        onBlur={() => onBlur('problemDescription')}
                        placeholder="Dieťa z 1. fyziologickej gravidity, pôrod v 41. týždni, zakalená plodová voda..."
                        rows={6}
                        error={!!errors.problemDescription}
                        helperText={errors.problemDescription}
                    />
                </FormFieldWrapper>
            </Box>
        </Box>
    );
};

type Step3ExaminationFindingsProps = {
    formData: CaseFormData;
    errors: Record<string, string>;
    onChange: (field: string, value: string | string[]) => void;
    onBlur: (field: string) => void;
};
