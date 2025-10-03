'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {Box} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {useAtom} from "jotai/index";
import {hoverTeaserAtom} from "@/components/hoverTeaserAtom";

// Map database svg_region to actual file paths for the three available body parts
const organFileMap: Record<string, { src: string; alt: string }> = {
  'skin': { src: '/assets/body/organ-koza.svg', alt: 'Skin' },
  'digestive_system': { src: '/assets/body/organ-traviaci-trakt.svg', alt: 'Digestive System' },
  'respiratory_system': { src: '/assets/body/organ-dychaci-trakt.svg', alt: 'Respiratory System' },
};

interface BabyProps {
    visibleOrgans?: string[]; // Now using svg_region strings from database
}

const BabyWithCircles = () => {
    const [hover] = useAtom(hoverTeaserAtom);
    console.log('hover',hover)
    const [animationComplete, setAnimationComplete] = useState(false);

    // Determine visible organs based on hover state
    const visibleOrgans = React.useMemo(() => {
        if (!hover || hover === '') {
            return [];
        }

        // If hovering "all", show all available organs
        if (hover === 'all') {
            return Object.keys(organFileMap);
        }

        // If hovering a specific organ that exists in organFileMap, show only that one
        if (organFileMap[hover]) {
            return [hover];
        }

        return [];
    }, [hover]);

    useEffect(() => {
        // Start animation after component mounts
        const timer = setTimeout(() => {
            setAnimationComplete(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


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
        <motion.div
            initial={{ x: '0%' }}
            animate={{ x: animationComplete ? '-25%' : '0%' }}
            transition={{ duration: 1.5, ease: [0.8, 0, 0.2, 1] }} // slow-fast-slow cubic-bezier
            style={{ width: '100%', height: '100%' }}
        >
            <Baby visibleOrgans={visibleOrgans} />
        </motion.div>
        </Box>
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
                width: '650px',
                height: '650px',
                backgroundColor: '#694DD5',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            },
            '& .circle2': {
                width: '850px',
                height: '850px',
                backgroundColor: '#311F7D',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            },
            '& .circle3': {
                width: '1050px',
                height: '1050px',
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
        <div>
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
                    const organ = organFileMap[organKey];
                    if (!organ) {
                        return null;
                    }

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
                                    opacity: 0.75,
                                }}
                            />
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default BabyWithCircles;
