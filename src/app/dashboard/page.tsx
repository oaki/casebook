import Header from "@/app/header";
import CategoryFilter from "@/components/CategoryFilter";
import {Container, Grid} from "@mui/material";
import {requireAuth} from "@/lib/auth";
import PrimaryButton from "@/components/PrimaryButton";

const DashboardPage = async () => {
    const session = await requireAuth();
    const isAdmin = session.user?.roles?.includes('admin') ?? false;

    return (
        <div>
            <Header/>
            <Container maxWidth="lg">
                <Grid spacing={2} container>
                    <CategoryFilter/>
                </Grid>
                {isAdmin && (
                    <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: '2rem'}}>
                        <PrimaryButton startIcon={<span style={{fontSize: '20px', fontWeight: 'bold'}}>+</span>}>
                            Pridať novú kazuistiku
                        </PrimaryButton>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default DashboardPage;
