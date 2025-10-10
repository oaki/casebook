import Image from 'next/image';
import {AnimatePresence, motion} from 'framer-motion';
import Circles from './Circles';
import {OrganFile} from '@/components/CategoryTeasersClient';
import type {FC} from 'react';

export const Baby: FC<BabyProps> = ({visibleOrgans = []}) => {
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
                style={{objectFit: 'contain'}}
            />
            <AnimatePresence>
                {visibleOrgans.map((organ) => (
                    <motion.div
                        key={organ.src}
                        initial={fadeAnimation.initial}
                        animate={fadeAnimation.animate}
                        exit={fadeAnimation.exit}
                        transition={fadeAnimation.transition}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        <Image
                            src={organ.body}
                            alt={organ.alt}
                            fill
                            priority
                            style={{objectFit: 'contain'}}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

// Types
export type BabyProps = {
    visibleOrgans: OrganFile[];
};
