'use client';
import { FC } from "react";
import { Table, TableBody, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { InfoRow } from "@/components/case/caseDetail/InfoRow";
import {CaseDetailData} from "@/app/libs/services/caseService";

export const PatientInfo: FC<PatientInfoProps> = ({ caseData }) => {
    const { t } = useTranslation();

    const patientInfoRows = [
        {
            label: t('caseDetail.age'),
            value: `${caseData.patient_age_months} ${caseData.patient_age_months === '1' ? t('caseDetail.months') : t('caseDetail.monthsPlural')}`
        },
        {
            label: t('caseDetail.gender'),
            value: caseData.gender === 'male' ? t('caseDetail.genderMale') : t('caseDetail.genderFemale')
        },
        {
            label: t('caseDetail.familyHistory'),
            value: caseData.family_history
        },
        {
            label: t('caseDetail.riskFactors'),
            value: caseData.microbiome_factors.join(', ')
        },
        {
            label: t('caseDetail.clinicalSymptoms'),
            value: <Typography variant="body1">{caseData.clinical_symptoms.join(', ')}</Typography>
        },
        {
            label: t('caseDetail.usedProduct'),
            value: <Typography variant="body1">{caseData.used_product}</Typography>
        }
    ];

    return (
        <>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
                {t('caseDetail.patient')}
            </Typography>
            <Table sx={{ mb: 4 }}>
                <TableBody>
                    {patientInfoRows.map((row, index) => (
                        <InfoRow key={index} label={row.label} value={row.value} />
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

type PatientInfoProps = {
    caseData: CaseDetailData;
};
