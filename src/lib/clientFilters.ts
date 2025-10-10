// Client-side filter utilities

/**
 * Extracts categories and products from a query string (e.g. window.location.search)
 * Returns empty arrays if not present.
 */
export function getClientFiltersFromQuery(): { categories: string[], products: string[] } {
    const params = new URLSearchParams(window.location.search);
    const categories = params.getAll('categories');
    const products = params.getAll('products');
    return {
        categories,
        products,
    };
}

/**
 * Creates a link with categories and products as query params
 * Example: createFiltersLink('/casestudies', ['digestive'], ['neocate_syneo'])
 * => '/casestudies?categories=digestive&products=neocate_syneo'
 */
export function createFiltersLink(basePath: string, categories?: string[], products?: string[]): string {
    const params = new URLSearchParams();
    if (categories) {
        categories.forEach(cat => params.append('categories', cat));
    }

    if (products) {
        products.forEach(prod => params.append('products', prod));
    }
    return params.toString() ? `${basePath}?${params.toString()}` : basePath;
}

