function calculateShipping(weight, distance) {
  const ratePerKg = 0.5;
  const ratePerKm = 0.1;
  const cost = (weight * ratePerKg) + (distance * ratePerkm);
  return 'Shipping cost: $${cost.toFixed(2)}';
}

console.log(calculateShipping(10, 1000));
