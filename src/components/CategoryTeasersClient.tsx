'use client';

import {FC} from 'react';
import {Box, Paper, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import Image from 'next/image';
import {useAtom} from 'jotai';
import {organHighlightAtom} from "@/components/hoverTeaserAtom";
import {useTranslation} from "react-i18next";
import { useRouter } from 'next/navigation';
import {allPartsIcon} from "@/lib/getBodyParts";


const StyledCategoryTeaser = styled(Paper)(() => ({
    display: 'flex',
    padding: '32px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
    flexShrink: 0,
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '-1px -3px 3px 0 rgba(255, 255, 255, 0.10) inset, 1px 3px 5px 0 rgba(255, 255, 255, 0.30) inset, 0 0 14px 0 rgba(255, 255, 255, 0.35) inset, 0 2px 10px 5px rgba(53, 53, 53, 0.05) inset, 0 3px 8px 3px rgba(53, 53, 53, 0.05)',
    backdropFilter: 'blur(5px)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
    }
}));


export const CategoryTeasersClient: FC<CategoryTeasersClientProps> = ({categories}) => {
    const router = useRouter();

    const [organHighlight, setOrganHighlight] = useAtom(organHighlightAtom);
    console.log({organHighlight})
    const allIconMap = allPartsIcon;

    const {t,i18n } = useTranslation();
    const currentLang = i18n.language;

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                p: 4,
                gap: 3,
            }}>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 2,
                    maxWidth: '600px',
                    width: '100%',
                }}>
                    {categories.map((category) => {
                        const iconConfig = category.organFile;
                        if(!iconConfig){
                            return null;
                        }
                        return (
                            <StyledCategoryTeaser
                                key={category.id}
                                elevation={0}

                                onMouseEnter={() => {
                                    setOrganHighlight({
                                        hover: [category.code],
                                        position: '0px'
                                    });
                                }}
                                onMouseLeave={() => {
                                    setOrganHighlight({
                                        hover: [],
                                        position: '0px'
                                    });
                                }}
                                onClick={() => {
                                    router.push(`/${currentLang}/casestudies?categories=${category.code}`);
                                }}
                            >
                                <Box sx={{
                                    borderRadius: '24px',
                                    background: iconConfig.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '8px',
                                }}>
                                    <Image
                                        src={iconConfig.src}
                                        alt={category.title}
                                        width={64}
                                        height={64}
                                        style={{filter: 'brightness(0) invert(1)'}}
                                    />
                                </Box>
                                <Typography variant="h5" gutterBottom sx={{margin: 0}}>{category.title}</Typography>
                            </StyledCategoryTeaser>
                        );
                    })}

                    <StyledCategoryTeaser
                        elevation={0}
                        title={t('buttons.allCases')}
                        onMouseEnter={() => {
                            setOrganHighlight({
                                hover: ['all'],
                                position: '0px'
                            });
                        }}
                        onMouseLeave={() => {
                            setOrganHighlight({
                                hover: [],
                                position: '0px'
                            });
                        }}
                        onClick={() => {
                            router.push(`/${currentLang}/casestudies`);
                        }}
                    >
                        <Box sx={{
                            borderRadius: '24px',
                            background: allIconMap.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '8px',
                        }}>
                            <Image
                                src={allIconMap.src}
                                alt={t('buttons.allCases')}
                                width={64}
                                height={64}
                                style={{filter: 'brightness(0) invert(1)'}}
                            />
                        </Box>
                        <Typography variant="h5" gutterBottom sx={{margin: 0}}>{t('buttons.allCases')}</Typography>
                    </StyledCategoryTeaser>
                </Box>
            </Box>
        </>
    );
};

export type OrganFile = {
    body: string;
    src: string;
    alt: string;
    color: string;
};
export type Category = {
    id: number;
    code: string;
    order: number;
    title: string;
    organFile?: OrganFile;
}

type CategoryTeasersClientProps = {
    categories: Category[];
}
