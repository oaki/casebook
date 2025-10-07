'use client'
import Image from "next/image";
import React, {FC} from "react";
import {getBodyParts} from "@/lib/getBodyParts";
import {useTranslation} from "react-i18next";
import {Box} from "@mui/material";

export const CategoryIcon: FC<CategoryIconProps> = ({code, size= 'large'}) => {
    const {t} = useTranslation();
    const category = getBodyParts(t).find(item => item.code === code);

    if (!category || !category.organFile) {
        return null;
    }

    const sizeMap = {
        small: {
            size: 20,
            radius: 8,
            padding: 4,
        },
        medium: {
            size: 48,
            radius: 12,
            padding: 8,
        },
        large: {
            size: 64,
            radius: 24,
            padding: 8,
        },
    };


    return (
        <Box sx={{
            borderRadius: `${sizeMap[size].radius}px`,
            background: category.organFile.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: `${sizeMap[size].padding}px`
        }}>
            <Image
                src={category.organFile.src}
                alt={category.organFile.alt}
                width={sizeMap[size].size}
                height={sizeMap[size].size}
                style={{filter: 'brightness(0) invert(1)'}} // Your specified style
            />
        </Box>
    )
}

type CategoryIconProps = {
    code: string;
    size: 'small' | 'medium' | 'large';
}
