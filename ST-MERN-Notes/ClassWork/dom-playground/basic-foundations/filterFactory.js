function createPriceFilter(minPrice, maxPrice) {
  // This function returns another function that checks one product
  function filterProduct(product) {
    return product.price >= minPrice && product.price <= maxPrice;
  }

  return filterProduct;
}

var midRangeFilter = createPriceFilter(500, 1500);

var products = [
  { name: "Earphones", price: 400 },
  { name: "Headphones", price: 900 },
  { name: "Monitor", price: 5000 }
];

// Use the filter function
var midRangeProducts = products.filter(midRangeFilter);

console.log(midRangeProducts);
// [ { name: "Headphones", price: 900 } ]