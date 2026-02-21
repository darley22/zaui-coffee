function parsePrice(price) {
  if (typeof price === "number") return price;
  if (!price) return 0;
  let priceStr = String(price).trim();
  
  if (priceStr.endsWith(".00")) {
    priceStr = priceStr.slice(0, -3);
  } else if (priceStr.endsWith(",00")) {
    priceStr = priceStr.slice(0, -3);
  }
  
  priceStr = priceStr.replace(/[.,]/g, "");
  return Number(priceStr) || 0;
}

console.log("20.000 ->", parsePrice("20.000"));
console.log("20,000 ->", parsePrice("20,000"));
console.log("20000.00 ->", parsePrice("20000.00"));
console.log("3.500 ->", parsePrice("3.500"));
console.log("50000 ->", parsePrice("50000"));
console.log("50.000,00 ->", parsePrice("50.000,00"));
