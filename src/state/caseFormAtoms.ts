import {atom} from 'jotai';

export const currentStepAtom = atom<number>(0);

export const caseFormDataAtom = atom<CaseFormData>({
    // Step 1: Author info
    title: '',
    name: '',
    specialization: '',
    workplace: '',

    // Step 2: Case info (will be added later)
    caseName: '',
    patientAgeMonths: '',
    gender: '',
    affectedSystems: [],
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
};

