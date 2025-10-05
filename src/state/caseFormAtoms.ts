import {atom} from 'jotai';

export const currentStepAtom = atom<number>(0);

export const caseFormDataAtom = atom<CaseFormData>({
    // Step 1: Author info
    title: '',
    name: '',
    specialization: '',
    workplace: '',

    // Step 2: Case info
    caseName: '',
    patientAgeMonths: '',
    gender: 'male', // Default to male
    affectedSystems: [],

    // Step 3: Examination and findings
    familyHistory: 'nie', // Default to "Nie"
    microbiomeFactors: [],
    nutritionalHistory: '',
    clinicalSymptoms: [],
    otherSymptoms: '',

    // Step 4: Diagnosis
    diagnosis: '',

    // Step 5: Treatment and attachments
    usedProduct: 'neocate_syneo',
    treatmentDescription: '',
    attachments: [],
});

export type CaseFormData = {
    // Step 1
    title: string;
    name: string;
    specialization: string;
    workplace: string;

    // Step 2
    caseName: string;
    patientAgeMonths: string;
    gender: string;
    affectedSystems: string[];

    // Step 3
    familyHistory: string;
    microbiomeFactors: string[];
    nutritionalHistory: string;
    clinicalSymptoms: string[];
    otherSymptoms: string;

    // Step 4
    diagnosis: string;

    // Step 5
    usedProduct: string;
    treatmentDescription: string;
    attachments: File[];
};
