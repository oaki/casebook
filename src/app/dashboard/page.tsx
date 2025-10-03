import Header from "@/app/header";
import CategoryFilter from "@/components/CategoryFilter";
import {Container, Grid} from "@mui/material";
import {requireAuth} from "@/lib/auth";

const DashboardPage = async () => {
    const session = await requireAuth();
    const isAdmin = session.user?.roles?.includes('admin') ?? false;

    return (
        <div>
            <Header/>
            <Container maxWidth="lg">
                <Grid spacing={2} container>
                    <CategoryFilter isAdmin={isAdmin}/>
                </Grid>
            </Container>
        </div>
    );
};

export default DashboardPage;
