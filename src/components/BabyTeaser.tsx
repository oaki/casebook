'use client';

import React from 'react';
import {Box, Grid} from '@mui/material';
import BabyWithCircles from './BabyWithCircles';
import CategoryTeasers from "@/components/CategoryTeasers";

const BabyTeaser = () => {
    return (
        <>
            <Box sx={{
                position: 'relative',
                maxWidth: '1440px',
            }}>
                <BabyWithCircles/>
                <Grid container sx={{ zIndex: 1}}>
                    <CategoryTeasers/>
                </Grid>
            </Box>
        </>
    );
};

export default BabyTeaser;
