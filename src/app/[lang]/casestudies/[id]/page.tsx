import Header from "@/app/header";
import {getSession} from "@/lib/session";
import {redirect} from "next/navigation";
import React from "react";
import CaseDetailClient from "./CaseDetailClient";
import {getFiltersFromSearchParams} from "@/lib/getFiltersFromSearchParams";
import {createFiltersLink} from "@/lib/clientFilters";
import {getCaseDetail, getCasesIds} from "@/app/libs/services/caseService";

const CaseDetailPage = async ({
                                  params,
                                  searchParams
                              }: {
    params: Promise<{ lang: string, id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
    const session = await getSession();
    const {lang, id} = await params;

    if (!session || !session.user) {
        redirect("/");
    }

    const caseDetailData = await getCaseDetail(parseInt(id));

    const {categories, products} = getFiltersFromSearchParams(await searchParams);
    const casesIds = await getCasesIds(categories);
    const linkToFilter = createFiltersLink(`/${lang}/casestudies`, categories, products);
    if (!caseDetailData) {
        redirect(linkToFilter);
    }
    const index = casesIds.indexOf(Number(id));

    const prevId = index > 0 ? casesIds[index - 1] : undefined;
    const nextId = index < casesIds.length - 1 ? casesIds[index + 1] : undefined;

    const prevLink =  prevId ? createFiltersLink(`/${lang}/casestudies/${prevId}`, categories, products): undefined;
    const nextLink =  nextId ? createFiltersLink(`/${lang}/casestudies/${nextId}`, categories, products): undefined;

    return (
        <div>
            <Header/>
            <CaseDetailClient prevLink={prevLink} nextLink={nextLink} linkToFilter={linkToFilter} caseData={caseDetailData}/>
        </div>
    );
};

export default CaseDetailPage;
