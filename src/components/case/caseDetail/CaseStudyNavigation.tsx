'use client';
import {FC} from "react";
import {Box, IconButton} from "@mui/material";
import Image from "next/image";

import CaretLeftIcon from '/public/assets/icons/caret-left.svg';
import GridBigIcon from '/public/assets/icons/grid-big.svg';
import CaretRightIcon from '/public/assets/icons/caret-right.svg';

export const CaseStudyNavigation: FC<CaseStudyNavigationProps> = ({onPrev, onNext, onGridClick}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0,
            }}
        >
            <IconButton onClick={onPrev} sx={{}}>
                <Image style={{filter: 'brightness(0) invert(1)'}} src={CaretLeftIcon} alt="Previous" width={28}
                       height={28}/>
            </IconButton>
            <IconButton onClick={onGridClick} sx={{}}>
                <Image style={{filter: 'brightness(0) invert(1)'}} src={GridBigIcon} alt="Grid View" width={28}
                       height={28}/>
            </IconButton>
            <IconButton onClick={onNext} sx={{}}>
                <Image style={{filter: 'brightness(0) invert(1)'}} src={CaretRightIcon} alt="Next" width={28}
                       height={28}/>
            </IconButton>
        </Box>
    );
};

type CaseStudyNavigationProps = {
    onPrev: () => void;
    onNext: () => void;
    onGridClick: () => void;
};

