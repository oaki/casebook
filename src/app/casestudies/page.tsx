import Header from "@/app/header";
import { Container, Grid } from "@mui/material";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

const CaseStudies = async () => {
    const session = await getSession();

    if (!session || !session.user) {
        redirect("/");
    }
    return (
        <div>
            <Header/>
            <Container maxWidth="lg">
                <Grid spacing={2} container>
                    CaseStudies
                </Grid>
            </Container>
        </div>
    );
};


export default CaseStudies;
