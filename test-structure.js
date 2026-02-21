const WC_URL = "https://hanhha.com";
const WC_CONSUMER_KEY = "ck_6d0a1fc4a0ed857b82c10bffe852e86a3faca9e8";
const WC_CONSUMER_SECRET = "cs_c273f9a08580a840757eb6ccfb9f2c8bc05bcc3c";

async function run() {
    const res = await fetch(`${WC_URL}/wp-json/wc/v3/products?per_page=1&consumer_key=${WC_CONSUMER_KEY}&consumer_secret=${WC_CONSUMER_SECRET}`);
    const products = await res.json();
    console.log(JSON.stringify(products[0], null, 2));
}
run();
