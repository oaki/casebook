'use client';

import {FC} from 'react';
import {Button, Box, Typography, MenuItem} from '@mui/material';
import {FormGroupTitle} from '@/components/form/FormGroupTitle';
import {FormFieldWrapper} from '@/components/form/FormFieldWrapper';
import {FormSelect} from '@/components/form/FormSelect';
import {FormTextArea} from '@/components/form/FormTextArea';
import {RequiredAsterisk} from '@/components/form/RequiredAsterisk';
import {CaseFormData} from '@/state/caseFormAtoms';

const productOptions = [
    {value: 'neocate_syneo', label: 'Neocate Syneo'},
    {value: 'neocate_lcp', label: 'Neocate LCP'},
    {value: 'neocate_advance', label: 'Neocate Advance'},
    {value: 'neocate_junior', label: 'Neocate Junior'},
];

export const Step5TreatmentAttachments: FC<Step5TreatmentAttachmentsProps> = ({
    formData,
    errors,
    onChange,
    onBlur,
}) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const fileArray = Array.from(files);
            onChange('attachments', [...formData.attachments, ...fileArray]);
        }
    };

    const handleRemoveFile = (index: number) => {
        const newFiles = formData.attachments.filter((_, i) => i !== index);
        onChange('attachments', newFiles);
    };

    return (
        <Box sx={{pt: 2}}>
            <FormGroupTitle>
                Liečba a prílohy
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
                        Použitý produkt<RequiredAsterisk />
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
                        <MenuItem value="" disabled>Neocate Syneo</MenuItem>
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
                        Popis liečby<RequiredAsterisk />
                    </Typography>
                    <FormTextArea
                        name="treatmentDescription"
                        value={formData.treatmentDescription}
                        onChange={(e) => onChange('treatmentDescription', e.target.value)}
                        onBlur={() => onBlur('treatmentDescription')}
                        placeholder="Popíšte liečbu"
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
                        Prílohy
                    </Typography>
                    <Box>
                        <Button
                            component="label"
                            variant="outlined"
                            sx={{
                                color: '#51338B',
                                borderColor: '#51338B',
                                borderRadius: '28px',
                                textTransform: 'none',
                                px: 3,
                                py: 1.5,
                                border: '2px solid #51338B',
                                '&:hover': {
                                    borderColor: '#51338B',
                                    backgroundColor: 'rgba(81, 51, 139, 0.04)',
                                    border: '2px solid #51338B',
                                },
                            }}
                        >
                            Vybrať súbory
                            <input
                                type="file"
                                hidden
                                multiple
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </Button>

                        {formData.attachments && formData.attachments.length > 0 && (
                            <Box sx={{mt: 2}}>
                                {formData.attachments.map((file, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            p: 1,
                                            mb: 1,
                                            backgroundColor: '#f5f5f5',
                                            borderRadius: '8px',
                                        }}
                                    >
                                        <Typography sx={{color: '#3C3C3C', fontSize: '14px'}}>
                                            {file.name}
                                        </Typography>
                                        <Button
                                            onClick={() => handleRemoveFile(index)}
                                            sx={{
                                                color: '#f44336',
                                                minWidth: 'auto',
                                                p: 0.5,
                                            }}
                                        >
                                            ×
                                        </Button>
                                    </Box>
                                ))}
                            </Box>
                        )}
                    </Box>
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
