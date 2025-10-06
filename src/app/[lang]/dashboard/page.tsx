import Header from "@/app/header";
import CategoryFilter from "@/components/CategoryFilter";
import {Container, Grid} from "@mui/material";
import {requireAuth} from "@/lib/auth";
import {AddCaseButton} from "@/components/case/AddCaseButton";
import {prisma} from "@/app/libs/services/databaseConnection";

const DashboardPage = async () => {
    const session = await requireAuth();
    const isAdmin = session.user?.roles?.includes('admin') ?? false;

    let userData:UserData = null;
    if (session?.user?.email) {
        userData = await prisma.users.findUnique({
            where: { email: session.user.email },
            select: {
                name: true,
                specialization: true,
                workplace: true
            }
        });
    }
    console.log({userData, session})
    return (
        <div>
            <Header/>
            <Container maxWidth="lg">
                <Grid spacing={2} container>
                    <CategoryFilter/>
                </Grid>
                {isAdmin && (
                    <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '2rem'}}>
                        <AddCaseButton userData={userData} />
                    </div>
                )}
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
