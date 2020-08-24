const express = require('express');

const router = express.Router();

router
  .route('/echo')
  .get((req, res) => {
    res.json({
      response: 'succ',
      user: 'Gi',
      password: 'asdjad',
    });
  });

router
  .route('/users')
  .get((req, res) => {
    res.json({
      response: 'sua res aqui',
      user: 'Gi',
      password: 'asdjad',
    });
  });

router
  .route('/products')
  .get((req, res) => {
    res.json({
      response: 'success',
      data: [
        {
          name: 'Produto 1',
          price: 100,
        },
        {
          name: 'Produto 2',
          price: 200,
        },
      ],
    });
  });

router
  .route('/products/details')
  .get((req, res) => {
    res.json({
      response: 'success',
      data: {
        productId: 1,
        name: 'bola',
        quantity: 5,
      },
    });
  });

module.exports = router;
