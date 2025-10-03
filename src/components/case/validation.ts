import {z} from 'zod';

export const step1Schema = z.object({
    title: z.string().optional(),
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

export type Step1FormData = z.infer<typeof step1Schema>;
export type Step2FormData = z.infer<typeof step2Schema>;

