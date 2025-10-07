import Header from "@/app/header";
import {Container, Grid} from "@mui/material";
import {getSession} from "@/lib/session";
import {redirect} from "next/navigation";
import BabyWithCircles from "@/components/BabyWithCircles";
import React from "react";
import {prisma} from "@/app/libs/services/databaseConnection";
import List from "@/components/list/List";

export type CaseData = {
    id: number;
    author: string;
    specialization: string;
    workplace: string;
    case_name: string;
    affected_systems: string[];
}

async function getCases(categories?: string[]): Promise<CaseData[]> {
    const cases = await prisma.cases.findMany({
        where: {
            deleted_at: null
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

const CaseStudies = async ({
                               searchParams,
                               params,
                           }: {
    params: Promise<{lang: string}>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
    const session = await getSession();
    const {lang} = await params;

    if (!session || !session.user) {
        redirect("/");
    }

    const sp = await searchParams;
    const categoryParam = sp['category[]'];
    const categories = categoryParam
        ? (Array.isArray(categoryParam) ? categoryParam : [categoryParam])
        : undefined;

    const cases = await getCases(categories);

    return (
        <div>
            <Header/>
            <Container maxWidth="lg">
                <Grid spacing={2} container>
                    <Grid size={{sm: 4}} sx={{
                        display: {xs: 'none', sm: 'flex'},
                        position: 'relative',
                    }}>
                        <BabyWithCircles/>
                    </Grid>

                    <Grid size={{xs: 12, sm: 8}} spacing={2} container>
                        <List cases={cases} lang={lang}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default CaseStudies;
