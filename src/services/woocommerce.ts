export const WC_URL = import.meta.env.VITE_WC_URL;
export const WC_CONSUMER_KEY = import.meta.env.VITE_WC_CONSUMER_KEY;
export const WC_CONSUMER_SECRET = import.meta.env.VITE_WC_CONSUMER_SECRET;

const getAuthString = () => {
    return btoa(`${WC_CONSUMER_KEY}:${WC_CONSUMER_SECRET}`);
};

/**
 * Fetch generic data from WooCommerce REST API
 */
export const fetchWcApi = async (endpoint: string, options: RequestInit = {}) => {
    if (!WC_URL || !WC_CONSUMER_KEY || !WC_CONSUMER_SECRET) {
        console.warn("WooCommerce credentials are missing in .env");
        return null;
    }

    const url = `${WC_URL}/wp-json/wc/v3/${endpoint}`;
    const headers = {
        ...options.headers,
        Authorization: `Basic ${getAuthString()}`,
        "Content-Type": "application/json",
    };

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
