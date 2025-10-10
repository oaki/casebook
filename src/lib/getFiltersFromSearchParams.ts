// Utility to extract categories and products from searchParams
export function getFiltersFromSearchParams(searchParams: {[key: string]: string | string[] | undefined}): { categories: string[] | undefined, products: string[] | undefined } {
    const categoryParam = searchParams['categories'];
    const productParam = searchParams['products'];
    const categories = categoryParam
        ? (Array.isArray(categoryParam) ? categoryParam : [categoryParam])
        : undefined;
    const products = productParam
        ? (Array.isArray(productParam) ? productParam : [productParam])
        : undefined;
    return { categories, products };
}
