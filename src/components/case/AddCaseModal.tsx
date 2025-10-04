'use client';

import {FC, useMemo, useState} from 'react';
import {Box, Dialog, DialogActions, DialogContent,} from '@mui/material';
import {DialogTitleWithClose} from '@/components/dialog/DialogTitleWithClose';
import {NextButton} from '@/components/form/NextButton';
import {CancelButton} from '@/components/form/CancelButton';
import {BackButton} from '@/components/form/BackButton';
import {Step1AuthorInfo} from '@/components/case/Step1AuthorInfo';
import {Step2CaseInfo} from '@/components/case/Step2CaseInfo';
import {Step3ExaminationFindings} from '@/components/case/Step3ExaminationFindings';
import {Step4Diagnosis} from '@/components/case/Step4Diagnosis';
import {Step5TreatmentAttachments} from '@/components/case/Step5TreatmentAttachments';
import {Step6Summary} from '@/components/case/Step6Summary';
import {Step7SubmissionMessage} from '@/components/case/Step7SubmissionMessage';
import {Provider as JotaiProvider, useAtom} from 'jotai';
import {caseFormDataAtom, currentStepAtom} from '@/state/caseFormAtoms';
import {step1Schema, step2Schema, step3Schema, step4Schema, step5Schema} from '@/components/case/validation';

// const TOTAL_STEPS = 7; // Steps 0-4 (form), 5 (summary), 6 (submission message)

const AddCaseModalContent: FC<AddCaseModalContentProps> = ({open, onCloseAction}) => {
    const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
    const [formData, setFormData] = useAtom(caseFormDataAtom);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const currentSchema = useMemo(() => {
        switch (currentStep) {
            case 0:
                return step1Schema;
            case 1:
                return step2Schema;
            case 2:
                return step3Schema;
            case 3:
                return step4Schema;
            case 4:
                return step5Schema;
            default:
                return step1Schema;
        }
    }, [currentStep]);

    const handleFormChange = (field: string, value: string | string[] | File[]) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));

        // Clear error for this field when user types
        if (errors[field]) {
            setErrors((prev) => {
                const newErrors = {...prev};
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const validateCurrentStep = () => {
        const result = currentSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            result.error.errors.forEach((err) => {
                const fieldName = err.path[0] as string;
                fieldErrors[fieldName] = err.message;
            });
            setErrors(fieldErrors);
            return false;
        }

        setErrors({});
        return true;
    };

    const handleNext = () => {
        // For steps with editable inputs (0..4) validate
        if (currentStep <= 4) {
            if (!validateCurrentStep()) return;
        }
        // Step 5 (summary) -> submit (log) and advance to final message
        if (currentStep === 5) {
            console.log('Submitting case form data:', formData);
            setCurrentStep(6);
            return;
        }
        // Final message step closes
        if (currentStep === 6) {
            handleClose();
            return;
        }
        // Advance normally
        setCurrentStep(currentStep + 1);
    };

    const handleClose = () => {
        setCurrentStep(0);
        setFormData({
            title: '',
            name: '',
            specialization: '',
            workplace: '',
            caseName: '',
            patientAgeMonths: '',
            gender: 'male',
            affectedSystems: [],
            familyHistory: 'nie',
            microbiomeFactors: [],
            nutritionalHistory: '',
            clinicalSymptoms: [],
            problemDescription: '',
            diagnosis: '',
            usedProduct: 'neocate_syneo',
            treatmentDescription: '',
            attachments: [],
        });
        setErrors({});
        onCloseAction();
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            setErrors({});
        } else {
            handleClose();
        }
    };

    const handleFieldBlur = (field: string) => {
        // Validate single field on blur
        const result = currentSchema.safeParse(formData);

        if (!result.success) {
            const fieldError = result.error.errors.find((err) => err.path[0] === field);
            if (fieldError) {
                setErrors((prev) => ({
                    ...prev,
                    [field]: fieldError.message,
                }));
            }
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 0:
                return (
                    <Step1AuthorInfo
                        formData={formData}
                        errors={errors}
                        onChange={handleFormChange}
                        onBlur={handleFieldBlur}
                    />
                );
            case 1:
                return (
                    <Step2CaseInfo
                        formData={formData}
                        errors={errors}
                        onChange={handleFormChange}
                        onBlur={handleFieldBlur}
                    />
                );
            case 2:
                return (
                    <Step3ExaminationFindings
                        formData={formData}
                        errors={errors}
                        onChange={handleFormChange}
                        onBlur={handleFieldBlur}
                    />
                );
            case 3:
                return (
                    <Step4Diagnosis
                        formData={formData}
                        errors={errors}
                        onChange={handleFormChange}
                        onBlur={handleFieldBlur}
                    />
                );
            case 4:
                return (
                    <Step5TreatmentAttachments
                        formData={formData}
                        errors={errors}
                        onChange={handleFormChange as (field: string, value: string | string[] | File[]) => void}
                        onBlur={handleFieldBlur}
                    />
                );
            case 5:
                return <Step6Summary formData={formData} />;
            case 6:
                return <Step7SubmissionMessage />;
            default:
                return <Box sx={{pt: 2}}>Krok {currentStep + 1} - Coming soon</Box>;
        }
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="md"
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: 3,
                        border: '1px solid #e0e0e0',
                    }
                }
            }}
        >
            <DialogTitleWithClose onClose={handleClose}>
                Pridať novú kazuistiku
            </DialogTitleWithClose>
            <DialogContent dividers>
                {renderStepContent()}
            </DialogContent>
            <DialogActions sx={{p: 2, justifyContent: 'space-between'}}>
                {currentStep < 6 && (
                    <Box>
                        {currentStep === 0 ? (
                            <CancelButton onClick={handleClose}>Zrušiť</CancelButton>
                        ) : (
                            <BackButton onClick={handleBack}>Späť</BackButton>
                        )}
                    </Box>
                )}
                <Box sx={{ml: 'auto'}}>
                    <NextButton onClick={handleNext}>
                        {currentStep === 5 && 'Odoslať'}
                        {currentStep < 5 && 'Pokračovať'}
                        {currentStep === 6 && 'Zavrieť'}
                    </NextButton>
                </Box>
            </DialogActions>
        </Dialog>
    );
};

export const AddCaseModal: FC<AddCaseModalProps> = ({open, onCloseAction}) => {
    if (!open) {
        return null;
    }

    return (
        <JotaiProvider>
            <AddCaseModalContent open={open} onCloseAction={onCloseAction}/>
        </JotaiProvider>
    );
};

type AddCaseModalProps = {
    open: boolean;
    onCloseAction: () => void;
};

type AddCaseModalContentProps = {
    open: boolean;
    onCloseAction: () => void;
};
