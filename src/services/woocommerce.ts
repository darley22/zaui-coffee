export const WC_URL = import.meta.env.VITE_WC_URL || "https://hanhha.com";
export const WC_CONSUMER_KEY = import.meta.env.VITE_WC_CONSUMER_KEY || "ck_6d0a1fc4a0ed857b82c10bffe852e86a3faca9e8";
export const WC_CONSUMER_SECRET = import.meta.env.VITE_WC_CONSUMER_SECRET || "cs_c273f9a08580a840757eb6ccfb9f2c8bc05bcc3c";



/**
 * Fetch generic data from WooCommerce REST API
 */
export const fetchWcApi = async (endpoint: string, options: RequestInit = {}) => {
    if (!WC_URL || !WC_CONSUMER_KEY || !WC_CONSUMER_SECRET) {
        console.warn("WooCommerce credentials are missing in .env");
        return null;
    }

    const separator = endpoint.includes('?') ? '&' : '?';
    const url = `${WC_URL}/wp-json/wc/v3/${endpoint}${separator}consumer_key=${WC_CONSUMER_KEY}&consumer_secret=${WC_CONSUMER_SECRET}`;

    const headers: Record<string, string> = {
        ...options.headers as Record<string, string>,
    };

    // Only add strict Content-Type if it's not a GET request, so we don't trigger unnecessary CORS pre-flight on Zalo physical devices
    if (options.method && options.method !== 'GET') {
        headers["Content-Type"] = "application/json";
    }

    try {
        const response = await fetch(url, { ...options, headers });
        if (!response.ok) {
            console.error("WooCommerce API error:", response.status, response.statusText);
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch WooCommerce API:", error);
        return null;
    }
};

/**
 * Fetch all categories
 */
export const getCategories = async () => {
    return fetchWcApi("products/categories?per_page=100");
};

/**
 * Fetch all products
 */
export const getProducts = async () => {
    return fetchWcApi("products?per_page=100");
};

/**
 * Fetch product variations
 */
export const getProductVariations = async (productId: number) => {
    return fetchWcApi(`products/${productId}/variations`);
};

/**
 * Create a new order
 */
export const createOrder = async (orderData: any) => {
    return fetchWcApi("orders", {
        method: "POST",
        body: JSON.stringify(orderData),
    });
};

/**
 * Fetch WP Site Info
 */
export const getSiteConfig = async () => {
    if (!WC_URL) return null;
    try {
        const response = await fetch(`${WC_URL}/wp-json/`);
        if (!response.ok) return null;
        return await response.json();
    } catch (error) {
        return null;
    }
};
