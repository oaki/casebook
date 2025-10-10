'use client';

import {useEffect, useMemo, useState} from 'react';
import {Box} from '@mui/material';
import {motion} from 'framer-motion';
import {useAtom} from "jotai";
import {organHighlightAtom} from "@/components/hoverTeaserAtom";
import {getBodyParts} from "@/lib/getBodyParts";
import {useTranslation} from "react-i18next";
import {Baby} from './Baby';
import {OrganFile} from "@/components/CategoryTeasersClient";


const BabyWithCircles = ({scaleFactor = 1, initialX = '0%', animatedX = '-25%'}: BabyWithCirclesProps) => {
    const [organHighlight] = useAtom(organHighlightAtom);
    const {t} = useTranslation();
    const bodyParts = getBodyParts(t);
    const [animationComplete, setAnimationComplete] = useState(false);

    // Determine visible organs based on hover state
    const visibleOrgans: OrganFile[] = useMemo(() => {
        if (!organHighlight.hover || organHighlight.hover.length === 0) {
            return [];
        }

        if (organHighlight.hover.includes('all')) {
            return bodyParts.map(item => item.organFile).filter((item): item is OrganFile => item !== undefined);
        }

        return bodyParts
            .filter((bodyPart) => organHighlight.hover?.includes(bodyPart.code))
            .map(item => item.organFile)
            .filter((item): item is OrganFile => item !== undefined);
    }, [organHighlight.hover, bodyParts]);

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
                initial={{x: initialX, width: '100%', height: '100%'}}
                animate={{
                    x: animationComplete ? animatedX : initialX,
                    width: '100%',
                    height: '100%',
                    scale: animationComplete ? scaleFactor : 1,
                }}
                transition={{duration: 1.5, ease: [0.8, 0, 0.2, 1]}} // slow-fast-slow cubic-bezier
                style={{width: '100%', height: '100%'}}
            >
                <Baby visibleOrgans={visibleOrgans}/>
            </motion.div>
        </Box>
    );
};

export default BabyWithCircles;

// Types
type BabyWithCirclesProps = {
    /** x value used for the initial position (e.g. '0%', '10px') */
    initialX?: string;
    /** x value used when animation completes (e.g. '-25%', '-200px') */
    animatedX?: string;
    scaleFactor?: number;
};
