import Header from "@/app/header";
import CategoryFilter from "@/components/CategoryFilter";
import {Container, Grid} from "@mui/material";
import {requireAuth} from "@/lib/auth";
import {AddCaseButton} from "@/components/case/AddCaseButton";
import {prisma} from "@/app/libs/services/databaseConnection";

const DashboardPage = async () => {
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
    return (
        <div>
            <Header/>
            <Container maxWidth="lg">

                <Grid container justifyContent="flex-end">
                    {canAddCase && (
                        <div style={{zIndex: 1, marginRight: '2rem'}}>
                            <AddCaseButton userData={userData}/>
                        </div>
                    )}
                </Grid>
                <Grid spacing={2} container>
                    <CategoryFilter/>
                </Grid>


            </Container>
        </div>
    );
};

export type UserData = {
    name: string | null;
    specialization?: string | null;
    workplace?: string | null;
} | null;

export default DashboardPage;
