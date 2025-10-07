'use client';

import {FC, useEffect,useMemo, useState} from 'react';
import {Box, Dialog, DialogActions, DialogContent, CircularProgress, Alert} from '@mui/material';
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
import {getStep1Schema, getStep2Schema, getStep3Schema, getStep4Schema, getStep5Schema} from '@/components/case/validation';
import {useTranslation} from "react-i18next";
import {UserData} from "@/app/[lang]/dashboard/page";
import {saveCase, updateUserData} from '@/app/actions/caseActions';


const AddCaseModalContent: FC<AddCaseModalContentProps> = ({userData, open, onCloseAction}) => {
    const {t} = useTranslation();
    const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
    const [formData, setFormData] = useAtom(caseFormDataAtom);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    useEffect(() => {
        if (open && userData?.name && userData?.specialization && userData?.workplace) {
            setFormData(prev => ({
                ...prev,
                name: userData.name || '',
                specialization: userData.specialization || '',
                workplace: userData.workplace || ''
            }));

            setCurrentStep(1);
        }
    }, [open, userData, setFormData, setCurrentStep]);

    const currentSchema = useMemo(() => {
        switch (currentStep) {
            case 0:
                return getStep1Schema(t);
            case 1:
                return getStep2Schema(t);
            case 2:
                return getStep3Schema(t);
            case 3:
                return getStep4Schema(t);
            case 4:
                return getStep5Schema(t);
            default:
                return getStep1Schema(t);
        }
    }, [currentStep, t]);

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

    const handleNext = async () => {
        console.log('handleNext')
        // For steps with editable inputs (0..4) validate
        if (currentStep <= 4) {
            if (!validateCurrentStep()) return;
        }

        // Step 5 (summary) -> submit and advance to final message
        if (currentStep === 5) {
            setIsSubmitting(true);
            setSubmitError(null);

            try {
                // First update user data if fields were empty before
                if (!userData?.name || !userData?.specialization || !userData?.workplace) {
                    const userUpdateResult = await updateUserData({
                        name: formData.name || undefined,
                        specialization: formData.specialization || undefined,
                        workplace: formData.workplace || undefined
                    });

                    if (!userUpdateResult.success) {
                        throw new Error(userUpdateResult.error || 'Failed to update user data');
                    }
                }

                // Pass the atom state directly to saveCase
                const saveResult = await saveCase(formData);

                if (!saveResult.success) {
                    throw new Error(saveResult.error || 'Failed to save case');
                }
            } catch (error) {
                console.error('Error submitting case:', error);
                setSubmitError(error instanceof Error ? error.message : 'An error occurred while saving your case');
            } finally {
                setIsSubmitting(false);
            }
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
            otherSymptoms: '',
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
                return (
                    <>
                        <Step6Summary formData={formData}/>
                        {isSubmitting && (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3, mb: 2 }}>
                                <CircularProgress size={32} sx={{ mr: 2 }} />
                                <Box>{t('caseForm.messages.saving')}</Box>
                            </Box>
                        )}
                        {submitError && (
                            <Alert severity="error" sx={{ mt: 2 }}>
                                {submitError}
                            </Alert>
                        )}
                    </>
                );
            case 6:
                return <Step7SubmissionMessage/>;
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
                {t('caseForm.addCaseTitle')}
            </DialogTitleWithClose>
            <DialogContent dividers>
                {renderStepContent()}
            </DialogContent>
            <DialogActions sx={{p: 2, justifyContent: 'space-between'}}>
                {currentStep < 6 && (
                    <Box>
                        {currentStep === 0 ? (
                            <CancelButton onClick={handleClose}>{t('caseForm.buttons.cancel')}</CancelButton>
                        ) : (
                            <BackButton onClick={handleBack}>{t('caseForm.buttons.back')}</BackButton>
                        )}
                    </Box>
                )}
                <Box sx={{ml: 'auto'}}>
                    <NextButton onClick={handleNext}>
                        {currentStep === 5 && t('caseForm.buttons.submit')}
                        {currentStep < 5 && t('caseForm.buttons.continue')}
                        {currentStep === 6 && t('caseForm.buttons.close')}
                    </NextButton>
                </Box>
            </DialogActions>
        </Dialog>
    );
};

export const AddCaseModal: FC<AddCaseModalProps> = ({open, onCloseAction, userData}) => {
    if (!open) {
        return null;
    }

    return (
        <JotaiProvider>
            <AddCaseModalContent userData={userData} open={open} onCloseAction={onCloseAction}/>
        </JotaiProvider>
    );
};

type AddCaseModalProps = {
    open: boolean;
    userData: UserData;
    onCloseAction: () => void;
};

type AddCaseModalContentProps = {
    open: boolean;
    userData: UserData;
    onCloseAction: () => void;
};
