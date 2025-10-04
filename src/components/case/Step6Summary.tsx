'use client';

import {FC, useMemo} from 'react';
import {Box, Chip, Typography} from '@mui/material';
import {FormGroupTitle} from '@/components/form/FormGroupTitle';
import {CaseFormData} from '@/state/caseFormAtoms';

const SYSTEM_LABELS: Record<string, string> = {
    digestive: 'Tráviaci trakt',
    skin: 'Koža',
    respiratory: 'Respiračný trakt',
};

const MICROBIOME_LABELS: Record<string, string> = {
    predcasne_narodene_dieta: 'Predčasne narodené dieťa',
    porod_cisarskym_rezom: 'Pôrod cisárskym rezom',
    uzivanie_antibiotik: 'Užívanie antibiotík',
    surodenci_velka_domacnost: 'Súrodenci / Veľká domácnosť',
    zvierata: 'Zvieratá',
    uzivanie_atb_u_matky: 'Užívanie ATB u matky',
    uzivanie_atb_u_dietata: 'Užívanie ATB u dieťaťa',
    fajcenie: 'Fajčenie',
};

const NUTRITION_LABELS: Record<string, string> = {
    mm_bez_eliminacnej_diery: 'MM (bez eliminačnej diéty matky)',
    mm_s_eliminacnej_diery: 'MM (s eliminačnej diéty matky)',
    standardna_formula: 'Štandardná formula (značka)',
    phf: 'pHF (značka)',
    ehf: 'eHF (značka)',
    aaf: 'AAF (značka)',
};

const SYMPTOM_LABELS: Record<string, string> = {
    ekzem: 'Ekzém',
    atopicka_dermatitida: 'Atopická dermatitída',
    urtikacia: 'Urtikácia',
    reflux: 'Reflux',
    regurgitacia: 'Regurgitácia',
    kolika: 'Kolika',
    zacpa: 'Zápcha',
    krv_hlien_v_stolici: 'Krv / Hlien v stolici',
    hnacka: 'Hnačka',
    plynatost: 'Plynatosť',
    dyschezia: 'Dyschézia',
    tvrda_stolica: 'Tvrdá stolica',
    sipot: 'Sipot',
    nadcha: 'Nádcha',
    respiracne_infekcie: 'Respiračné infekcie',
    neprospievanie: 'Neprospievanie',
};

const PRODUCT_LABELS: Record<string, string> = {
    neocate_syneo: 'Neocate Syneo',
    neocate_lcp: 'Neocate LCP',
    neocate_advance: 'Neocate Advance',
    neocate_junior: 'Neocate Junior',
};

export const Step6Summary: FC<Step6SummaryProps> = ({formData}) => {
    const genderLabel = formData.gender === 'male' ? 'Chlapec' : formData.gender === 'female' ? 'Dievča' : formData.gender;
    const familyHistoryLabel = formData.familyHistory?.startsWith('ano') ? 'Áno' : 'Nie';

    const affectedSystems = useMemo(() => formData.affectedSystems.map((v) => SYSTEM_LABELS[v] || v), [formData.affectedSystems]);
    const microbiome = useMemo(() => formData.microbiomeFactors.map((v) => MICROBIOME_LABELS[v] || v), [formData.microbiomeFactors]);
    const nutrition = NUTRITION_LABELS[formData.nutritionalHistory] || formData.nutritionalHistory || '-';
    const symptoms = useMemo(() => formData.clinicalSymptoms.map((v) => SYMPTOM_LABELS[v] || v), [formData.clinicalSymptoms]);
    const product = PRODUCT_LABELS[formData.usedProduct] || formData.usedProduct || '-';

    return (
        <Box sx={{pt: 2}}>
            <FormGroupTitle>Krok 5/5: Sumár</FormGroupTitle>
            <Box sx={{
                mt: 1,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '280px 1fr' },
                rowGap: 2,
                columnGap: 3,
                alignItems: 'start',
            }}>
                <LabelCell text="Názov kazuistiky" />
                <ValueCell>{formData.caseName || '-'}</ValueCell>

                <LabelCell text="Vek dieťaťa v mesiacoch" />
                <ValueCell>{formData.patientAgeMonths ? `${formData.patientAgeMonths} mesiace` : '-'}</ValueCell>

                <LabelCell text="Pohlavie" />
                <ValueCell>{genderLabel}</ValueCell>

                <LabelCell text="Postihnuté sústavy" />
                <ValueCell>
                    {affectedSystems.length ? (
                        <Box sx={{display: 'flex', gap: 1, flexWrap: 'wrap'}}>
                            {affectedSystems.map((label) => (
                                <Chip key={label} label={label} sx={{borderRadius: '16px', backgroundColor: '#FFFFFF', border: '2px solid #3C3C3C4D', color: '#3C3C3C'}} />
                            ))}
                        </Box>
                    ) : ('-')}
                </ValueCell>

                <LabelCell text="Rodinná anamnéza" />
                <ValueCell>{familyHistoryLabel}</ValueCell>

                <LabelCell text="Mikrobiómové faktory" />
                <ValueCell>
                    {microbiome.length ? (
                        <Box sx={{display: 'flex', gap: 1, flexWrap: 'wrap'}}>
                            {microbiome.map(label => (
                                <Chip key={label} label={label} sx={{borderRadius: '16px', backgroundColor: '#FFFFFF', border: '2px solid #3C3C3C4D', color: '#3C3C3C'}} />
                            ))}
                        </Box>
                    ) : ('-')}
                </ValueCell>

                <LabelCell text="Nutričná história" />
                <ValueCell>{nutrition}</ValueCell>

                <LabelCell text="Klinické symptómy" />
                <ValueCell>
                    {symptoms.length ? (
                        <Box sx={{display: 'flex', gap: 1, flexWrap: 'wrap'}}>
                            {symptoms.map(label => (
                                <Chip key={label} label={label} sx={{borderRadius: '16px', backgroundColor: '#FFFFFF', border: '2px solid #3C3C3C4D', color: '#3C3C3C'}} />
                            ))}
                        </Box>
                    ) : ('-')}
                </ValueCell>

                <LabelCell text="Popis problému" />
                <ValueCell>
                    <Typography sx={{whiteSpace: 'pre-wrap', color: '#3C3C3C', lineHeight: 1.4}}>{formData.problemDescription || '-'}</Typography>
                </ValueCell>

                <LabelCell text="Diagnóza" />
                <ValueCell>
                    <Typography sx={{whiteSpace: 'pre-wrap', color: '#3C3C3C', lineHeight: 1.4}}>{formData.diagnosis || '-'}</Typography>
                </ValueCell>

                <LabelCell text="Použitý produkt" />
                <ValueCell>{product}</ValueCell>

                <LabelCell text="Popis liečby" />
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
