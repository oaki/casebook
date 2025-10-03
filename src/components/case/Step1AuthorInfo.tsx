'use client';

import {FC} from 'react';
import {Box} from '@mui/material';
import {LabeledInput} from '@/components/form/LabeledInput';
import {FormGroupTitle} from '@/components/form/FormGroupTitle';
import {CaseFormData} from '@/state/caseFormAtoms';

export const Step1AuthorInfo: FC<Step1AuthorInfoProps> = ({formData, errors, onChange, onBlur}) => {
    return (
        <Box sx={{pt: 2}}>
            <FormGroupTitle>
                Základné údaje o autorovi
            </FormGroupTitle>
            <Box sx={{display: 'grid', gap: 2}}>
                <LabeledInput
                    name="title"
                    label="Váš titul"
                    placeholder="Mudr."
                    value={formData.title}
                    onChange={(e) => onChange('title', e.target.value)}
                    onBlur={() => onBlur('title')}
                    error={!!errors.title}
                    helperText={errors.title}
                />
                <LabeledInput
                    name="name"
                    label="Vaše meno"
                    placeholder="Ján Novák"
                    required
                    value={formData.name}
                    onChange={(e) => onChange('name', e.target.value)}
                    onBlur={() => onBlur('name')}
                    error={!!errors.name}
                    helperText={errors.name}
                />
                <LabeledInput
                    name="specialization"
                    label="Vaša špecializácia"
                    placeholder="Pediater"
                    required
                    value={formData.specialization}
                    onChange={(e) => onChange('specialization', e.target.value)}
                    onBlur={() => onBlur('specialization')}
                    error={!!errors.specialization}
                    helperText={errors.specialization}
                />
                <LabeledInput
                    name="workplace"
                    label="Vaše pracovisko"
                    placeholder="Univerzitná Nemocnica Bratislava"
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
    onChange: (field: string, value: string | string[]) => void;
    onBlur: (field: string) => void;
};
