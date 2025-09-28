'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {Box} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

// Define a map for organ data to easily manage them
const organMap = {
    'koza': { src: '/assets/body/organ-koza.svg', alt: 'Organ Koza' },
    'traviaci-trakt': { src: '/assets/body/organ-traviaci-trakt.svg', alt: 'Organ Traviaci trakt' },
};

// Define the type for the keys of organMap
type OrganKey = keyof typeof organMap;

interface BabyProps {
    visibleOrgans?: OrganKey[];
}

const BabyWithCircles = () => {
    const [visibleOrgans, setVisibleOrgans] = useState<OrganKey[]>([]);

    return (
        <Baby visibleOrgans={visibleOrgans} />
    );
};

const Circles = () => {
    return (
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
                width: '450px',
                height: '450px',
                backgroundColor: '#694DD5',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            },
            '& .circle2': {
                width: '650px',
                height: '650px',
                backgroundColor: '#311F7D',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            },
            '& .circle3': {
                width: '850px',
                height: '850px',
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
    )
}
const Baby = ({ visibleOrgans = [] }: BabyProps) => {
    const fadeAnimation = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '90px',
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 0,
                overflow: 'hidden',
            }}
        >
            <Circles />
            {/* Base body image, always visible */}
            <Image
                src="/assets/body/body-default.png"
                alt="Background"
                fill
                priority
                style={{
                    objectFit: 'contain',
                }}
            />

            {/* Animated organ layers */}
            <AnimatePresence>
                {visibleOrgans.map((organKey) => {
                    const organ = organMap[organKey];
                    if (!organ) return null;

                    return (
                        <motion.div
                            key={organKey}
                            initial={fadeAnimation.initial}
                            animate={fadeAnimation.animate}
                            exit={fadeAnimation.exit}
                            transition={fadeAnimation.transition}
                            style={{ position: 'absolute', width: '100%', height: '100%' }}
                        >
                            <Image
                                src={organ.src}
                                alt={organ.alt}
                                fill
                                priority
                                style={{
                                    objectFit: 'contain',
                                }}
                            />
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </Box>
    );
};

export default BabyWithCircles;
