'use client';

import Header from "@/app/header";
import CategoryFilter from "@/components/CategoryFilter";
import { Container, Grid } from "@mui/material";

const DashboardPage = () => {
    return (
        <div>
            <Header/>
            <Container maxWidth="lg">
                <Grid spacing={2} container>
                    <CategoryFilter/>
                </Grid>
            </Container>
        </div>
    );
};


export default DashboardPage;
