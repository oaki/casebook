'use client';
import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

interface CaseContentProps {
    diagnosis: string;
    treatment_description: string;
    other_symptoms?: string | null;
}

const CaseContent: React.FC<CaseContentProps> = ({ diagnosis, treatment_description, other_symptoms }) => {
    const { t } = useTranslation();

    return (
        <>
            {other_symptoms && (
                <Typography variant="body1" sx={{ mt: 2 }}>
                    <strong>{t('caseDetail.otherSymptoms')}:</strong> {other_symptoms}
                </Typography>
            )}

            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
                {t('caseDetail.introduction')}
            </Typography>
            <Box sx={{ mb: 4 }}>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                    {diagnosis}
                </Typography>
            </Box>

            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
                {t('caseDetail.patientManagement')}
            </Typography>
            <Box sx={{ mb: 4 }}>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                    {treatment_description}
                </Typography>
            </Box>
        </>
    );
};

export default CaseContent;

