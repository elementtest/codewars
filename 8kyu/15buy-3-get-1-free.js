//calculate price of mangoes based on a 3 mangoes for the price of 2 rule.
 mango = (quantity, price) => price * (quantity - Math.floor(quantity / 3));