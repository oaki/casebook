import React from 'react';
import {Grid} from '@mui/material';
import BabyWithCircles from './BabyWithCircles';
import {CategoryTeasers} from "@/components/CategoryTeasers";
import {Provider} from "jotai";

interface CategoryFilterProps {
    isAdmin?: boolean;
}

const CategoryFilter = ({ isAdmin = false }: CategoryFilterProps) => {

    return (
        <Provider>
            <Grid size={4} sx={{
                position: 'relative',
            }}>
                <BabyWithCircles/>
            </Grid>
            <Grid size={8}>
                <CategoryTeasers isAdmin={isAdmin} />
            </Grid>
        </Provider>
    );
};

export default CategoryFilter;
