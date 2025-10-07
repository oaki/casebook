'use client';

import {useEffect, useMemo, useState} from 'react';
import Image from 'next/image';
import {Box} from '@mui/material';
import {AnimatePresence, motion} from 'framer-motion';
import {useAtom} from "jotai/index";
import {organHighlightAtom} from "@/components/hoverTeaserAtom";
import {getBodyParts} from "@/lib/getBodyParts";
import {useTranslation} from "react-i18next";
import {OrganFile} from "@/components/CategoryTeasersClient";

interface BabyProps {
    visibleOrgans: OrganFile[] ;
}

const BabyWithCircles = () => {
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
            return bodyParts.map(item => item.organFile).filter((item): item is OrganFile => item !== undefined);;
        }

        const o = bodyParts.filter((bodyPart) => organHighlight.hover?.includes(bodyPart.code)).map(item => item.organFile);

        return o.filter((item): item is OrganFile => item !== undefined);
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
                initial={{x: '0%'}}
                animate={{x: animationComplete ? '-25%' : '0%'}}
                transition={{duration: 1.5, ease: [0.8, 0, 0.2, 1]}} // slow-fast-slow cubic-bezier
                style={{width: '100%', height: '100%'}}
            >
                <Baby visibleOrgans={visibleOrgans}/>
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
const Baby = ({visibleOrgans = []}: BabyProps) => {
    const fadeAnimation = {
        initial: {opacity: 0},
        animate: {opacity: 1},
        exit: {opacity: 0},
        transition: {duration: 0.5}
    };

    return (
        <div>
            <Circles/>
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
                {visibleOrgans.map((organ) => {
                    return (
                        <motion.div
                            key={organ.src}
                            initial={fadeAnimation.initial}
                            animate={fadeAnimation.animate}
                            exit={fadeAnimation.exit}
                            transition={fadeAnimation.transition}
                            style={{position: 'absolute', width: '100%', height: '100%'}}
                        >
                            <Image
                                src={organ.body}
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
