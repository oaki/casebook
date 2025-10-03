'use client';

import {FC, useState, useMemo} from 'react';
import {
    Dialog,
    DialogContent,
    DialogActions,
    Box,
    Stepper,
    StepLabel,
} from '@mui/material';
import {DialogTitleWithClose} from '@/components/dialog/DialogTitleWithClose';
import {NextButton} from '@/components/form/NextButton';
import {CancelButton} from '@/components/form/CancelButton';
import {BackButton} from '@/components/form/BackButton';
import {Step1AuthorInfo} from '@/components/case/Step1AuthorInfo';
import {Step2CaseInfo} from '@/components/case/Step2CaseInfo';
import {Provider as JotaiProvider, useAtom} from 'jotai';
import {currentStepAtom, caseFormDataAtom} from '@/state/caseFormAtoms';
import {step1Schema, step2Schema} from '@/components/case/validation';

const TOTAL_STEPS = 5;

const stepLabels = [
    'Základné údaje prípadu',
    'Informácie o pacientovi',
    'Anamnéza',
    'Diagnostika',
    'Liečba a výsledky',
];

const AddCaseModalContent: FC<AddCaseModalContentProps> = ({open, onClose}) => {
    const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
    const [formData, setFormData] = useAtom(caseFormDataAtom);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const currentSchema = useMemo(() => {
        switch (currentStep) {
            case 0:
                return step1Schema;
            case 1:
                return step2Schema;
            default:
                return step1Schema;
        }
    }, [currentStep]);

    const handleFormChange = (field: string, value: string | string[]) => {
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
        if (!validateCurrentStep()) {
            return;
        }

        if (currentStep < TOTAL_STEPS - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Final step - submit form
            console.log('Form submitted:', formData);
            handleClose();
        }
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
            gender: '',
            affectedSystems: [],
        });
        setErrors({});
        onClose();
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
                <Box>
                    {currentStep === 0 ? (
                        <CancelButton onClick={handleClose}>
                            Zrušiť
                        </CancelButton>
                    ) : (
                        <BackButton onClick={handleBack}>
                            Späť
                        </BackButton>
                    )}
                </Box>
                <NextButton onClick={handleNext}>
                    {currentStep === TOTAL_STEPS - 1 ? 'Odoslať' : 'Pokračovať'}
                </NextButton>
            </DialogActions>
        </Dialog>
    );
};

export const AddCaseModal: FC<AddCaseModalProps> = ({open, onClose}) => {
    if (!open) {
        return null;
    }

    return (
        <JotaiProvider>
            <AddCaseModalContent open={open} onClose={onClose} />
        </JotaiProvider>
    );
};

type AddCaseModalProps = {
    open: boolean;
    onClose: () => void;
};

type AddCaseModalContentProps = {
    open: boolean;
    onClose: () => void;
};
