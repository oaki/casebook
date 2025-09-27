'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const CategoryTeaser = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  borderRadius: '10px',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  }
}));

const CategoryTeasers = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { title: "Kožné problémy", description: "Riešenia pre kožné ťažkosti a starostlivosť" },
    { title: "Pľúcne problémy", description: "Podpora dýchacieho systému a pľúc" },
    { title: "Črevné problémy", description: "Starostlivosť o trávenie a črevá" },
    { title: "Všeobecné problémy", description: "Celková zdravotná starostlivosť" }
  ];

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      p: 4,
      height: '100%'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: animationComplete ? 1 : 0, y: animationComplete ? 0 : 20 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
          Kategórie problémov
        </Typography>

        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: animationComplete ? 1 : 0, y: animationComplete ? 0 : 20 }}
            transition={{ delay: 1 + (index * 0.2), duration: 0.5 }}
          >
            <CategoryTeaser elevation={2}>
              <Typography variant="h5" gutterBottom>{category.title}</Typography>
              <Typography variant="body1" color="text.secondary">{category.description}</Typography>
            </CategoryTeaser>
          </motion.div>
        ))}
      </motion.div>
    </Box>
  );
};

export default CategoryTeasers;
