'use client';
import { FC } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import UserIcon from "/public/assets/icons/user.svg";

export const CaseHeader: FC<CaseHeaderProps> = ({ title, author, specialization, workplace }) => {
    return (
        <>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 1, fontSize: '40px' }}>
                {title}
            </Typography>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Image style={{filter: 'brightness(0) invert(1)'}} src={UserIcon} alt="author" width={24} height={24} />
                <Typography variant="body1" sx={{ mb: 0 }}>
                    {author}, {specialization}, {workplace}
                </Typography>
            </Box>
        </>
    );
};

type CaseHeaderProps = {
    title: string;
    author: string;
    specialization: string;
    workplace: string;
};
