import {TFunction} from "i18next";
import {Category} from "@/components/CategoryTeasersClient";

export const allPartsIcon = {
    body: '/assets/icons/stethoscope.svg',
    src: '/assets/icons/stethoscope.svg',
    alt: 'all',
    color: '#B8A888'
}
export const getBodyParts = (t: TFunction): Category[] => {
    return [
        {
            id: 1,
            code: 'digestive',
            order: 1,
            title: t('caseForm.caseInfo.affectedSystemsOptions.digestive'),
            organFile: {
                body: '/assets/body/organ-traviaci-trakt.svg',
                src: '/assets/icons/intestine.svg',
                alt: 'Digestive System',
                color: '#8B7BA8'
            }
        },
        {
            id: 2,
            code: 'skin',
            order: 2,
            title: t('caseForm.caseInfo.affectedSystemsOptions.skin'),
            organFile: {
                body: '/assets/body/organ-koza.svg',
                src: '/assets/icons/skin.svg',
                alt: 'Skin',
                color: '#D4916C',
            }
        },
        {
            id: 3,
            code: 'respiratory',
            order: 3,
            title: t('caseForm.caseInfo.affectedSystemsOptions.respiratory'),
            organFile: {
                body: '/assets/body/organ-dychaci-trakt.svg',
                src: '/assets/icons/lungs.svg',
                alt: 'Respiratory System',
                color: '#82A884'
            }
        }
    ];
};
