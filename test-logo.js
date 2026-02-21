const WC_URL = "https://hanhha.com";
const WC_CONSUMER_KEY = "ck_6d0a1fc4a0ed857b82c10bffe852e86a3faca9e8";
const WC_CONSUMER_SECRET = "cs_c273f9a08580a840757eb6ccfb9f2c8bc05bcc3c";

async function run() {
    console.log("Fetching WP index...");
    const res = await fetch(`${WC_URL}/wp-json/`);
    const data = await res.json();
    console.log("Site Title:", data.name);
    console.log("Site Description:", data.description);
    if (data.site_icon_url) {
        console.log("Site Icon URL:", data.site_icon_url);
    }
    if (data.site_logo) {
        console.log("Site Logo URL:", data.site_logo);
    }
}
run().catch(console.error);
