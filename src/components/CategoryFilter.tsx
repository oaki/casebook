import React from 'react';
import {Grid} from '@mui/material';
import {CategoryTeasers} from "@/components/CategoryTeasers";
import {Provider} from "jotai";
import BabyWithCircles from "@/components/baby/BabyWithCircles";



const CategoryFilter = () => {

    return (
        <Provider>
            <Grid size={{ sm: 4 }} sx={{
                display: {xs: 'none', sm: 'flex'},
                position: 'relative',
            }}>
                <BabyWithCircles/>
            </Grid>
            <Grid size={{ xs: 12, sm: 8 }}>
                <CategoryTeasers />
            </Grid>
        </Provider>
    );
};

export default CategoryFilter;
