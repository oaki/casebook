"use client";
import {FC} from "react";
import {CaseData} from "@/app/[lang]/casestudies/page";
import {CategoryIcon} from "@/components/CategoryIcon";
import {Box, Button, Link, Stack, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";


const List: FC<ListProps> = ({cases, lang}) => {
    const {t} = useTranslation();
    return (
        <Stack
            component="section"
            spacing={3}
            sx={{py: 2, zIndex: 1, width: '100%'}}
            aria-label="Case studies list"
        >
            {cases.map((caseItem) => (
                <article
                    key={caseItem.id}
                    style={{
                        backgroundColor: 'transparent',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        borderBottom: '1px solid #FFFFFF42',
                        paddingBottom: '16px',
                        paddingTop: '16px',
                        margin: 0
                    }}
                >
                    <Box>
                        <Typography variant="h5" sx={{fontSize: '20px', fontWeight: 700}}>
                            {caseItem.case_name}
                        </Typography>

                        <Typography variant="body2" color="white">
                            {caseItem.author}, {caseItem.specialization}, {caseItem.workplace}
                        </Typography>
                    </Box>

                    <Box sx={{display: 'flex', gap: 2, mt: 1, justifyContent: 'space-between'}}>
                        <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                            {caseItem.affected_systems.map(item => (
                                <CategoryIcon size={'small'} key={item} code={item}/>
                            ))}
                        </Box>

                        <Button
                            component={Link}
                            href={`/${lang}/casestudies/${caseItem.id}`}
                            variant="text"
                            size={'small'}
                            endIcon={
                                <Box
                                    component="img"
                                    src="/assets/icons/caret-right.svg"
                                    alt=""

                                    sx={{
                                        width: 32,
                                        height: 32,
                                        color: 'transparent',
                                        filter: 'brightness(0) invert(1)'
                                    }}
                                />
                            }
                            sx={{
                                color: '#FFFFFF', '& .MuiButton-endIcon': {
                                    marginLeft: 0
                                }
                            }}
                        >
                            {t('Otvoriť prípadovú štúdiu')}
                        </Button>
                    </Box>

                </article>
            ))}
        </Stack>
    );
};

type ListProps = {
    cases: CaseData[];
    lang: string;
}

export default List;
