const WC_URL = "https://hanhha.com";
const WC_CONSUMER_KEY = "ck_6d0a1fc4a0ed857b82c10bffe852e86a3faca9e8";
const WC_CONSUMER_SECRET = "cs_c273f9a08580a840757eb6ccfb9f2c8bc05bcc3c";

async function run() {
    const url = `${WC_URL}/wp-json/wc/v3/products?per_page=100&consumer_key=${WC_CONSUMER_KEY}&consumer_secret=${WC_CONSUMER_SECRET}`;

    console.time("FetchTime");
    const response = await fetch(url, { headers: { "Content-Type": "application/json" } });
    console.timeEnd("FetchTime");

    if (!response.ok) {
        console.error("API Error", response.status);
    } else {
        const json = await response.json();
        console.log(`Success! length: ${json.length}`);
    }
}
run().catch(console.error);
