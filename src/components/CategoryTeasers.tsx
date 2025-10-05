"use client";
import {CategoryTeasersClient} from './CategoryTeasersClient';
import {getBodyParts} from "@/lib/getBodyParts";
import {useTranslation} from "react-i18next";


export const CategoryTeasers = () => {

    const {t} = useTranslation();
    const categories = getBodyParts(t);

    return <CategoryTeasersClient categories={categories}/>;

};
