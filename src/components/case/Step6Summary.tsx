'use client';

import {FC, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Chip, Typography} from '@mui/material';
import {FormGroupTitle} from '@/components/form/FormGroupTitle';
import {CaseFormData} from '@/state/caseFormAtoms';
import {productOptions} from '@/lib/productOptions';

export const Step6Summary: FC<Step6SummaryProps> = ({formData}) => {
    const {t} = useTranslation();

    const genderLabel = formData.gender === 'male' ? t('caseForm.caseInfo.genderMale') : formData.gender === 'female' ? t('caseForm.caseInfo.genderFemale') : formData.gender;
    const familyHistoryLabel = formData.familyHistory?.startsWith('ano') ? t('caseForm.examinationFindings.familyHistoryOptions.yes') : t('caseForm.examinationFindings.familyHistoryOptions.no');

    const affectedSystems = useMemo(() => formData.affectedSystems.map((v) => t(`caseForm.caseInfo.affectedSystemsOptions.${v}`)), [formData.affectedSystems, t]);
    const microbiome = useMemo(() => formData.microbiomeFactors.map((v) => t(`caseForm.examinationFindings.microbiomeFactorsOptions.${v}`)), [formData.microbiomeFactors, t]);
    const nutrition = t(`caseForm.examinationFindings.nutritionalHistoryOptions.${formData.nutritionalHistory}`) || formData.nutritionalHistory || '-';
    const symptoms = useMemo(() => formData.clinicalSymptoms.map((v) => t(`caseForm.examinationFindings.clinicalSymptomsOptions.${v}`)), [formData.clinicalSymptoms, t]);
    const product = productOptions.find(p => p.value === formData.usedProduct)?.label || formData.usedProduct || '-';

    return (
        <Box sx={{pt: 2}}>
            <FormGroupTitle>{t('caseForm.summary.title')}</FormGroupTitle>
            <Box sx={{
                mt: 1,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '280px 1fr' },
                rowGap: 2,
                columnGap: 3,
                alignItems: 'start',
            }}>
                <LabelCell text={t('caseForm.summary.caseNameLabel')} />
                <ValueCell>{formData.caseName || '-'}</ValueCell>

                <LabelCell text={t('caseForm.summary.patientAgeLabel')} />
                <ValueCell>{formData.patientAgeMonths ? `${formData.patientAgeMonths} ${t('caseForm.summary.patientAgeMonths')}` : '-'}</ValueCell>

                <LabelCell text={t('caseForm.summary.genderLabel')} />
                <ValueCell>{genderLabel}</ValueCell>

                <LabelCell text={t('caseForm.summary.affectedSystemsLabel')} />
                <ValueCell>
                    {affectedSystems.length ? (
                        <Box sx={{display: 'flex', gap: 1, flexWrap: 'wrap'}}>
                            {affectedSystems.map((label) => (
                                <Chip key={label} label={label} sx={{borderRadius: '16px', backgroundColor: '#FFFFFF', border: '2px solid #3C3C3C4D', color: '#3C3C3C'}} />
                            ))}
                        </Box>
                    ) : ('-')}
                </ValueCell>

                <LabelCell text={t('caseForm.summary.familyHistoryLabel')} />
                <ValueCell>{familyHistoryLabel}</ValueCell>

                <LabelCell text={t('caseForm.summary.microbiomeFactorsLabel')} />
                <ValueCell>
                    {microbiome.length ? (
                        <Box sx={{display: 'flex', gap: 1, flexWrap: 'wrap'}}>
                            {microbiome.map(label => (
                                <Chip key={label} label={label} sx={{borderRadius: '16px', backgroundColor: '#FFFFFF', border: '2px solid #3C3C3C4D', color: '#3C3C3C'}} />
                            ))}
                        </Box>
                    ) : ('-')}
                </ValueCell>

                <LabelCell text={t('caseForm.summary.nutritionalHistoryLabel')} />
                <ValueCell>{nutrition}</ValueCell>

                <LabelCell text={t('caseForm.summary.clinicalSymptomsLabel')} />
                <ValueCell>
                    {symptoms.length ? (
                        <Box sx={{display: 'flex', gap: 1, flexWrap: 'wrap'}}>
                            {symptoms.map(label => (
                                <Chip key={label} label={label} sx={{borderRadius: '16px', backgroundColor: '#FFFFFF', border: '2px solid #3C3C3C4D', color: '#3C3C3C'}} />
                            ))}
                        </Box>
                    ) : ('-')}
                </ValueCell>

                <LabelCell text={t('caseForm.summary.diagnosisLabel')} />
                <ValueCell>
                    <Typography sx={{whiteSpace: 'pre-wrap', color: '#3C3C3C', lineHeight: 1.4}}>{formData.diagnosis || '-'}</Typography>
                </ValueCell>

                <LabelCell text={t('caseForm.summary.usedProductLabel')} />
                <ValueCell>{product}</ValueCell>

                <LabelCell text={t('caseForm.summary.treatmentDescriptionLabel')} />
                <ValueCell>
                    <Typography sx={{whiteSpace: 'pre-wrap', color: '#3C3C3C', lineHeight: 1.4}}>{formData.treatmentDescription || '-'}</Typography>
                </ValueCell>
            </Box>
        </Box>
    );
};

const LabelCell: FC<{text: string}> = ({text}) => (
    <Typography sx={{color: '#3C3C3C', fontSize: 14, fontWeight: 600, pt: {xs: 0, sm: '8px'}}}>{text}</Typography>
);

const ValueCell: FC<{children: React.ReactNode}> = ({children}) => (
    <Box sx={{color: '#3C3C3C', fontSize: 16}}>{children}</Box>
);

type Step6SummaryProps = { formData: CaseFormData };
