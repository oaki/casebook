import Header from "@/app/header";
import {Box, Container, Grid} from "@mui/material";
import {redirect} from "next/navigation";
import BabyWithCircles from "@/components/baby/BabyWithCircles";

import {prisma} from "@/app/libs/services/databaseConnection";
import List from "@/components/list/List";

import FilterDialog from "@/components/filter/FilterDialog";
import {AddCaseButton} from "@/components/case/AddCaseButton";
import {requireAuth} from "@/lib/auth";
import {UserData} from "@/app/[lang]/dashboard/page";
import {getFiltersFromSearchParams} from "@/lib/getFiltersFromSearchParams";
import {getCases} from "@/app/libs/services/caseService";

const CaseStudies = async ({
                               searchParams,
                               params,
                           }: {
    params: Promise<{ lang: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {

    const session = await requireAuth();
    const canAddCase = session.user?.roles?.some(role => ['admin', 'moderator'].includes(role)) ?? false;
    let userData: UserData = null;

    if (session?.user?.email) {
        userData = await prisma.users.findUnique({
            where: {email: session.user.email},
            select: {
                name: true,
                specialization: true,
                workplace: true
            }
        });
    }

    const {lang} = await params;

    if (!session || !session.user) {
        redirect("/");
    }

    const sp = await searchParams;
    const {categories, products} = getFiltersFromSearchParams(sp);

    const cases = await getCases(categories);
    console.log({categories});

    return (
        <div>
            <Header/>
            <Container maxWidth="lg">
                <Grid spacing={2} container>
                    <Grid size={{sm: 4}} sx={{
                        display: {xs: 'none', sm: 'flex'},
                        position: 'relative',
                    }}>
                        <BabyWithCircles scaleFactor={1.06} animatedX={'-35%'} initialX={'-35%'}/>
                    </Grid>

                    <Grid size={{xs: 12, sm: 8}} spacing={2} container>
                        <Box sx={{display: 'flex', justifyContent: 'flex-end', width: '100%', gap: 2}}>

                            {canAddCase && (
                                <AddCaseButton userData={userData}/>
                            )}
                            <FilterDialog categories={categories} products={products}/>
                        </Box>
                        <List cases={cases} lang={lang}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default CaseStudies;
