'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const BabyWithCircles = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      width: '100%',
      height: '100%',
    }}>
      {/* Circles positioned relative to baby container */}
      <Box sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0,
        '& .circle': {
          position: 'absolute',
          borderRadius: '50%',
          opacity: 0.1,
        },
        '& .circle1': {
          width: '350px',
          height: '350px',
          backgroundColor: '#694DD5',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '& .circle2': {
          width: '550px',
          height: '550px',
          backgroundColor: '#311F7D',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '& .circle3': {
          width: '750px',
          height: '750px',
          backgroundColor: '#432183',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }
      }}>
        <div className="circle circle3"></div>
        <div className="circle circle2"></div>
        <div className="circle circle1"></div>
      </Box>

      <motion.div
        initial={{ x: '50%', opacity: 0.5 }}
        animate={{
          x: animationComplete ? '0%' : '50%',
          opacity: 1
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ maxWidth: '1326px', height: 'auto', zIndex: 1, position: 'relative' }}
      >
        <Image
          src="/assets/silhouette-0.png"
          alt="Baby Silhouette"
          width={1326}
          height={1326}
          priority
          style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
        />
      </motion.div>
    </Box>
  );
};

export default BabyWithCircles;
