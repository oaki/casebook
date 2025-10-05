import {TFunction} from "i18next";
import {Category} from "@/components/CategoryTeasersClient";

export const getBodyParts = (t: TFunction): Category[] => {
    return [
        {
            id: 1,
            code: 'digestive_system',
            svg_region: 'digestive_system',
            order: 1,
            title: t('caseForm.caseInfo.affectedSystemsOptions.digestive'),
        },
        {
            id: 2,
            code: 'skin',
            svg_region: 'skin',
            order: 2,
            title: t('caseForm.caseInfo.affectedSystemsOptions.skin'),
        },
        {
            id: 3,
            code: 'respiratory_system',
            svg_region: 'respiratory_system',
            order: 3,
            title: t('caseForm.caseInfo.affectedSystemsOptions.respiratory'),
        }
    ];
};
