import {z} from 'zod';

export const step1Schema = z.object({
    name: z.string().min(1, 'Vaše meno je povinné'),
    specialization: z.string().min(1, 'Vaša špecializácia je povinná'),
    workplace: z.string().min(1, 'Vaše pracovisko je povinné'),
});

export const step2Schema = z.object({
    caseName: z.string().min(3, 'Názov kazuistiky musí mať aspoň 3 znaky'),
    patientAgeMonths: z.string().min(1, 'Vek pacienta je povinný'),
    gender: z.string().min(1, 'Pohlavie je povinné'),
    affectedSystems: z.array(z.string()).min(1, 'Vyberte aspoň jeden postihnutý systém'),
});

export const step3Schema = z.object({
    familyHistory: z.string().min(1, 'Rodinná anamnéza je povinná'),
    microbiomeFactors: z.array(z.string()).min(1, 'Vyberte aspoň jeden mikrbiómový faktor'),
    nutritionalHistory: z.string().min(1, 'Nutričná história je povinná'),
    clinicalSymptoms: z.array(z.string()).min(1, 'Vyberte aspoň jeden klinický symptóm'),
    problemDescription: z.string().min(10, 'Popis problému musí mať aspoň 10 znakov'),
});

export const step4Schema = z.object({
    diagnosis: z.string().min(10, 'Diagnóza musí mať aspoň 10 znakov'),
});

export const step5Schema = z.object({
    usedProduct: z.string().min(1, 'Použitý produkt je povinný'),
    treatmentDescription: z.string().min(10, 'Popis liečby musí mať aspoň 10 znakov'),
});

export type Step1FormData = z.infer<typeof step1Schema>;
export type Step2FormData = z.infer<typeof step2Schema>;
export type Step3FormData = z.infer<typeof step3Schema>;
export type Step4FormData = z.infer<typeof step4Schema>;
export type Step5FormData = z.infer<typeof step5Schema>;
