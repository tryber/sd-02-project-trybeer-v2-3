module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert('Products', [
      {
        product_name: 'Skol Lata 350ml',
        product_price: '2.20',
        picture: 'http://localhost:3001/images/Skol Lata 350ml.jpg',
      },
      {
        product_name: 'Heineken 600ml',
        product_price: '7.50',
        picture: 'http://localhost:3001/images/Heineken 600ml.jpg',
      },
      {
        product_name: 'Antarctica Pilsen 300ml',
        product_price: '2.49',
        picture: 'http://localhost:3001/images/Antarctica Pilsen 300ml.jpg',
      },
      {
        product_name: 'Brahma 600ml',
        product_price: '7.50',
        picture: 'http://localhost:3001/images/Brahma 600ml.jpg',
      },
      {
        product_name: 'Skol 269ml',
        product_price: '2.19',
        picture: 'http://localhost:3001/images/Skol 269ml.jpg',
      },
      {
        product_name: 'Skol Beats Senses 313ml',
        product_price: '4.49',
        picture: 'http://localhost:3001/images/Skol Beats Senses 313ml.jpg',
      },
      {
        product_name: 'Becks 330ml',
        product_price: '4.99',
        picture: 'http://localhost:3001/images/Becks 330ml.jpg',
      },
      {
        product_name: 'Brahma Duplo Malte 350ml',
        product_price: '2.79',
        picture: 'http://localhost:3001/images/Brahma Duplo Malte 350ml',
      },
      {
        product_name: 'Becks 600ml',
        product_price: '8.89',
        picture: 'http://localhost:3001/images/Becks 600ml',
      },
      {
        product_name: 'Skol Beats Senses 269ml',
        product_price: '3.57',
        picture: 'http://localhost:3001/images/Skol Beats Senses 269ml',
      },
      {
        product_name: 'Stella Artois 275ml',
        product_price: '3.49',
        picture: 'http://localhost:3001/images/Stella Artois 275ml',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Products', null, {}),
};
