export const getTotals = (cart) => {
  let returnAmount = 0;
  let totalCost = 0;
  for (let { amount, price } of cart.values()) {
    returnAmount += amount;
    totalCost += amount * price;
  }
  return { returnAmount, totalCost };
};
