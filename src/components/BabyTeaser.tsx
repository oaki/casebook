'use client';

import React from 'react';
import {Box, Grid} from '@mui/material';
import BabyWithCircles from './BabyWithCircles';
import CategoryTeasers from './CategoryTeasers';

const BabyTeaser = () => {
    return (
        <Box sx={{
            position: 'relative',
            height: 'calc(100vh - 80px)',
            overflow: 'hidden',
            backgroundColor: 'background.default'
        }}>
            <BabyWithCircles/>
            <Grid container sx={{height: '100%', position: 'relative', zIndex: 1}}>
                <Grid item xs={12} md={6}>
                    <CategoryTeasers/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BabyTeaser;
