'use client';
import {FC} from "react";
import {Box, Container, Grid} from "@mui/material";
import {CategoryIcon} from "@/components/CategoryIcon";
import {CaseHeader} from "@/components/case/caseDetail/CaseHeader";
import {PatientInfo} from "@/components/case/caseDetail/PatientInfo";
import CaseContent from "@/components/case/caseDetail/CaseContent";
import ImageGallery from "@/components/case/caseDetail/ImageGallery";
import {CaseStudyNavigation} from "@/components/case/caseDetail/CaseStudyNavigation";
import {CaseDetailData} from "@/app/libs/services/caseService";

const CaseDetailClient: FC<CaseDetailClientProps> = ({linkToFilter, caseData, nextLink, prevLink}) => {
    return (
        <Container maxWidth="lg" sx={{py: 4}}>
            <Grid container spacing={4}>
                <Grid size={{xs: 12}}>
                    <CaseStudyNavigation
                        nextLink={nextLink}
                        prevLink={prevLink}
                        linkToFilter={linkToFilter}
                    />
                </Grid>
                <Grid size={{xs: 12, md: 8}}>
                    <CaseHeader
                        title={caseData.case_name}
                        author={caseData.author}
                        specialization={caseData.specialization}
                        workplace={caseData.workplace}
                    />
                    <PatientInfo caseData={caseData}/>
                    <CaseContent
                        diagnosis={caseData.diagnosis}
                        treatment_description={caseData.treatment_description}
                        other_symptoms={caseData.other_symptoms}
                    />
                </Grid>

                <Grid size={{xs: 12, md: 4}}>
                    <Box sx={{mb: 4}}>
                        <Box sx={{display: 'flex', gap: 2, flexWrap: 'wrap'}}>
                            {caseData.affected_systems.map(item => (
                                <CategoryIcon key={item} code={item} size="large"/>
                            ))}
                        </Box>
                    </Box>

                    {caseData.attachments.length > 0 && (
                        <ImageGallery images={caseData.attachments}/>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default CaseDetailClient;

type CaseDetailClientProps = {
    caseData: CaseDetailData;
    linkToFilter: string;
    nextLink?:string, prevLink?: string;
};
