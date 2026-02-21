const url = "https://hanhha.com/wp-json/wc/v3/products/categories?per_page=100";
const productsUrl = "https://hanhha.com/wp-json/wc/v3/products?per_page=5";
const auth = Buffer.from("ck_6d0a1fc4a0ed857b82c10bffe852e86a3faca9e8:cs_c273f9a08580a840757eb6ccfb9f2c8bc05bcc3c").toString("base64");

async function run() {
  try {
    const catRes = await fetch(url, { headers: { Authorization: `Basic ${auth}` } });
    const categories = await catRes.json();
    console.log("Categories Length:", categories.length);
    categories.forEach(c => console.log(`[CAT] ${c.name} | Image: ${c.image?.src || 'none'} | description: ${c.description}`));

    const prodRes = await fetch(productsUrl, { headers: { Authorization: `Basic ${auth}` } });
    const products = await prodRes.json();
    console.log("\nProducts Sample:");
    products.forEach(p => {
      console.log(`- ${p.name} | Type: ${p.type} | Price: ${p.price} | Regular: ${p.regular_price} | Sale: ${p.sale_price}`);
      console.log(`  Variations:`, p.variations);
      console.log(`  Attributes:`, p.attributes.map(a => a.name));
    });
  } catch (err) {
    console.error(err);
  }
}

run();
