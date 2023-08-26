const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const price = prices.map(function (price) {
  return {
    price,
    salePrice: price / 2,
  };
});
console.log('Price objects', price);

const formattedPrices = prices.map(function (number) {
  return `$${number.toFixed(2)}`;
});
console.log('Formatted prices', formattedPrices);
