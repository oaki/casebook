'use client';

import React from 'react';
import {Container, Grid, useTheme} from '@mui/material';
import BabyWithCircles from './BabyWithCircles';
import CategoryTeasers from "@/components/CategoryTeasers";

const CategoryFilter = () => {
    const theme = useTheme();
    return (
        <>
            <Grid size={4}  sx={{
                position: 'relative',
            }}>
                <BabyWithCircles/>
            </Grid>
            <Grid size={8}>
                <CategoryTeasers/>
            </Grid>
        </>
    );
};

export default CategoryFilter;
