import React from 'react';
import {Grid} from '@mui/material';
import BabyWithCircles from './BabyWithCircles';
import {CategoryTeasers} from "@/components/CategoryTeasers";
import {Provider} from "jotai";



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
