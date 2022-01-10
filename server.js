module.exports = () => {
  const data = {
    products: []
  };

  for (let index = 0; index < 1000; index++) {
    const product = {
      id: index + 1,
      title: `Product - ${index + 1}`,
      price: Math.floor(Math.random() * 100) + 1
    };

    data.products.push(product);
  }

  return data;
};
