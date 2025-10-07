// Shared product options for case forms
export const productOptions = [
    {value: 'neocate_syneo', label: 'Neocate Syneo'},
    {value: 'neocate_infant', label: 'Neocate Infant'},
    {value: 'neocate_junior', label: 'Neocate Junior'},
    {value: 'nutrilon_allergy_care_syneo', label: 'Nutrilon Allergy Care Syneo+'},
    {value: 'nutrilon_comfort_colics', label: 'Nutrilon Comfort & Colics'},
    {value: 'nutrilon_ar', label: 'Nutrilon AR'},
    {value: 'nutrilon_nutriton', label: 'Nutrilon Nutriton'},
] as const;

export type ProductValue = typeof productOptions[number]['value'];

