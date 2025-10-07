import {z} from 'zod';
import {TFunction} from 'i18next';

export const getStep1Schema = (t: TFunction) => z.object({
    name: z.string().min(1, t('caseForm.validation.nameRequired')),
    specialization: z.string().min(1, t('caseForm.validation.specializationRequired')),
    workplace: z.string().min(1, t('caseForm.validation.workplaceRequired')),
});

export const getStep2Schema = (t: TFunction) => z.object({
    caseName: z.string().min(15, t('caseForm.validation.caseNameMin')),
    patientAgeMonths: z.string().min(1, t('caseForm.validation.patientAgeRequired')),
    gender: z.string().min(1, t('caseForm.validation.genderRequired')),
    affectedSystems: z.array(z.string()).min(1, t('caseForm.validation.affectedSystemsMin')),
});

export const getStep3Schema = (t: TFunction) => z.object({
    familyHistory: z.string().min(1, t('caseForm.validation.familyHistoryRequired')),
    microbiomeFactors: z.array(z.string()).min(1, t('caseForm.validation.microbiomeFactorsMin')),
    nutritionalHistory: z.string().min(1, t('caseForm.validation.nutritionalHistoryRequired')),
    clinicalSymptoms: z.array(z.string()).min(1, t('caseForm.validation.clinicalSymptomsMin')),
});

export const getStep4Schema = (t: TFunction) => z.object({
    diagnosis: z.string().min(200, t('caseForm.validation.diagnosisMin')),
});

export const getStep5Schema = (t: TFunction) => z.object({
    usedProduct: z.string().min(1, t('caseForm.validation.usedProductRequired')),
    treatmentDescription: z.string().min(200, t('caseForm.validation.treatmentDescriptionMin')),
});

export type Step1FormData = z.infer<ReturnType<typeof getStep1Schema>>;
export type Step2FormData = z.infer<ReturnType<typeof getStep2Schema>>;
export type Step3FormData = z.infer<ReturnType<typeof getStep3Schema>>;
export type Step4FormData = z.infer<ReturnType<typeof getStep4Schema>>;
export type Step5FormData = z.infer<ReturnType<typeof getStep5Schema>>;
