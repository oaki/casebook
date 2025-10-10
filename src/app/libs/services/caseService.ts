import {prisma} from "@/app/libs/services/databaseConnection";
import {generateImageToken} from "@/lib/imageAuth";

export type CaseData = {
    id: number;
    author: string;
    specialization: string;
    workplace: string;
    case_name: string;
    affected_systems: string[];
}

export async function getCasesIds(categories?: string[]) {
    const cases = await getCases(categories);
    const res= cases.map(o => o.id);
    return res;
}

export async function getCases(categories?: string[]): Promise<CaseData[]> {
    const cases = await prisma.cases.findMany({
        where: {
            deleted_at: null
        },
        orderBy: {
            created_at: "desc"
        },
        select: {
            id: true,
            case_name: true,
            affected_systems: true,
            user: {
                select: {
                    name: true,
                    specialization: true,
                    workplace: true,

                }
            }
        }
    });

    // Transform the data
    const transformedCases = cases.map(caseItem => ({
        id: caseItem.id,
        author: caseItem.user.name || '',
        specialization: caseItem.user.specialization || '',
        workplace: caseItem.user.workplace || '',
        case_name: caseItem.case_name,
        affected_systems: Array.isArray(caseItem.affected_systems)
            ? caseItem.affected_systems as string[]
            : []
    }));

    // Filter by categories if provided
    if (categories && categories.length > 0) {
        return transformedCases.filter(caseItem =>
            caseItem.affected_systems.some(system =>
                categories.includes(system)
            )
        );
    }

    return transformedCases;
}


export type CaseDetailData = {
    id: number;
    author: string;
    specialization: string;
    workplace: string;
    case_name: string;
    patient_age_months: string;
    gender: string;
    affected_systems: string[];
    family_history: string;
    microbiome_factors: string[];
    nutritional_history: string;
    clinical_symptoms: string[];
    other_symptoms: string | null;
    diagnosis: string;
    used_product: string;
    treatment_description: string;
    attachments: {
        id: number;
        file_path: string;
        token: string;
    }[];
}

export async function getCaseDetail(id: number): Promise<CaseDetailData | null> {
    const caseData = await prisma.cases.findUnique({
        where: {
            id: id,
            deleted_at: null
        },
        select: {
            id: true,
            case_name: true,
            patient_age_months: true,
            gender: true,
            affected_systems: true,
            family_history: true,
            microbiome_factors: true,
            nutritional_history: true,
            clinical_symptoms: true,
            other_symptoms: true,
            diagnosis: true,
            used_product: true,
            treatment_description: true,
            user: {
                select: {
                    name: true,
                    specialization: true,
                    workplace: true,
                }
            },
            attachments: {
                select: {
                    id: true,
                    file_path: true,
                }
            }
        }
    });

    if (!caseData) {
        return null;
    }

    return {
        id: caseData.id,
        author: caseData.user.name || '',
        specialization: caseData.user.specialization || '',
        workplace: caseData.user.workplace || '',
        case_name: caseData.case_name,
        patient_age_months: caseData.patient_age_months,
        gender: caseData.gender,
        affected_systems: Array.isArray(caseData.affected_systems)
            ? caseData.affected_systems as string[]
            : [],
        family_history: caseData.family_history,
        microbiome_factors: Array.isArray(caseData.microbiome_factors)
            ? caseData.microbiome_factors as string[]
            : [],
        nutritional_history: caseData.nutritional_history,
        clinical_symptoms: Array.isArray(caseData.clinical_symptoms)
            ? caseData.clinical_symptoms as string[]
            : [],
        other_symptoms: caseData.other_symptoms,
        diagnosis: caseData.diagnosis,
        used_product: caseData.used_product,
        treatment_description: caseData.treatment_description,
        attachments: caseData.attachments.map((attachment) => ({
            ...attachment,
            token: generateImageToken(attachment.file_path),
        }))
    };
}
