"use client";
import React, {FC, useState} from 'react';
import {Box, Dialog, DialogActions, DialogContent} from '@mui/material';
import {DialogTitleWithClose} from "@/components/dialog/DialogTitleWithClose";
import {useTranslation} from "react-i18next";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import {FormGroupTitle} from "@/components/form/FormGroupTitle";
import {AffectedSystemsToggle} from "@/components/form/AffectedSystemsToggle";
import {getBodyParts} from "@/lib/getBodyParts";
import ProductsToggle from "@/components/form/ProductsToggle";
import {CancelButton} from "@/components/form/CancelButton";
import {NextButton} from "@/components/form/NextButton";
import {usePathname, useRouter} from 'next/navigation';

type FilterDialogProps = {
    categories?: string[];
    products?: string[];
};

const FilterDialog: FC<FilterDialogProps> = ({products, categories}) => {
    const {t} = useTranslation();
    const [openFilter, setOpenFilter] = useState(false);
    const handleClose = () => {
        setOpenFilter(false);
    }

    const bodyParts = getBodyParts(t);


    const [selectedCategories, setSelectedCategories] = useState(categories || []);
    const [selectedProducts, setSelectedProducts] = useState(products || []);
    console.log({selectedCategories});
    // const allProducts = productOptions.map((product) => product.value);
    const router = useRouter();
    const pathname = usePathname();

    const handleSubmit = () => {
        const params = new URLSearchParams();
        if (selectedCategories.length > 0) {
            selectedCategories.forEach(cat => params.append('categories', cat));
        }
        if (selectedProducts.length > 0) {
            selectedProducts.forEach(prod => params.append('products', prod));
        }
        router.push(`${pathname}?${params.toString()}`);
        setOpenFilter(false);
    }

    return (
        <>
            <SecondaryButton onClick={() => setOpenFilter(true)}>Filtrovať kazuistiky</SecondaryButton>

            <Dialog
                open={openFilter}
                onClose={handleClose}
                fullWidth
                maxWidth="md"
                slotProps={{
                    paper: {
                        sx: {
                            borderRadius: 3,
                            border: '1px solid #e0e0e0',
                        },
                    },
                }}
            >
                <DialogTitleWithClose onClose={handleClose}>
                    {t('filter.title')}
                </DialogTitleWithClose>
                <DialogContent dividers>
                    <Box sx={{pt: 2, mb: '32px'}}>
                        <FormGroupTitle sx={{mb: '16px', fontSize: 22}}>
                            {t('filter.affectedSystem')}
                        </FormGroupTitle>

                        <Box>
                            <AffectedSystemsToggle
                                value={selectedCategories}
                                onChange={(e, newValue) => setSelectedCategories(newValue)}
                            />
                        </Box>
                    </Box>

                    <Box sx={{my: 3}}>
                        <Box sx={{height: 2, backgroundColor: '#BABABA80', width: '100%'}}/>
                    </Box>

                    <Box sx={{pt: 2}}>
                        <FormGroupTitle sx={{mb: 3, fontSize: 22}}>
                            {t('filter.product')}
                        </FormGroupTitle>

                        <Box>
                            <ProductsToggle
                                value={selectedProducts}
                                onChange={(e, newValue) => setSelectedProducts(newValue)}
                            />
                        </Box>
                    </Box>

                    <Box sx={{my: 3}}>
                        <Box sx={{height: 2, backgroundColor: '#BABABA80', width: '100%'}}/>
                    </Box>
                </DialogContent>
                <DialogActions sx={{p: 2, justifyContent: 'space-between'}}>
                    <Box>
                        <CancelButton onClick={() => {
                            setSelectedCategories([]);
                            setSelectedProducts([]);
                        }}>Resetovať filter</CancelButton>
                    </Box>

                    <Box sx={{ml: 'auto'}}>
                        <NextButton onClick={handleSubmit}>Zobrazit kazuistiky</NextButton>
                    </Box>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default FilterDialog;
