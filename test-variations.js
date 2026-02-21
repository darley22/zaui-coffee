
const WC_URL = "https://hanhha.com";
const WC_CONSUMER_KEY = "ck_6d0a1fc4a0ed857b82c10bffe852e86a3faca9e8";
const WC_CONSUMER_SECRET = "cs_c273f9a08580a840757eb6ccfb9f2c8bc05bcc3c";

async function fetchWcApi(endpoint) {
    const separator = endpoint.includes('?') ? '&' : '?';
    const url = `${WC_URL}/wp-json/wc/v3/${endpoint}${separator}consumer_key=${WC_CONSUMER_KEY}&consumer_secret=${WC_CONSUMER_SECRET}`;
    const response = await fetch(url, { headers: { "Content-Type": "application/json" } });
    if (!response.ok) {
        console.error("API Error", response.status);
        return { error: response.status, data: await response.text() };
    }
    return response.json();
}

async function run() {
    const products = await fetchWcApi("products?per_page=5");
    if (products.error) return;

    for (const p of products) {
        if (p.type === "variable") {
            const variations = await fetchWcApi(`products/${p.id}/variations`);
            console.log(`Variations for ${p.id}:`, Array.isArray(variations) ? "Array" : typeof variations);
            if (Array.isArray(variations) && variations.length > 0) {
                console.log(`First variation attributes:`, variations[0].attributes);
            } else {
                console.log(`Variations content:`, variations);
            }
        }
    }
}
run();
