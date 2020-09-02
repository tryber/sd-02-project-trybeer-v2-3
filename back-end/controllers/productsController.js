// const {
//   getProducts, newOrder, addProducts, delivered,
// } = require('../services/productsService');

const { getProducts, delivered, newOrder, addProducts } = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const products = await getProducts();
  res.status(200).json({
    status: 'success',
    products,
  });
};

const createOrder = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { street, streetNumber, products } = req.body;
    const { dataValues } = await newOrder(id, street, streetNumber, products);
    await addProducts(products, dataValues);

    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    next({ code: 'something_wrong', message: 'Something went wrong' });
  }
};

const markAsDelivered = async (req, res, next) => {
  const { role } = req.user;
  const { id } = req.params;
  const { status } = req.body;
  if (role !== 'admin') return next({ code: 'unauthorized', message: 'User not alowed' });
  if (!['Entregue', 'Preparando', 'Pendente'].includes(status)) {
    return next({ code: 'invalid_data', message: 'Invalid status' });
  }
  await delivered(id, status);
  return res.status(200).json({
    status: 'success',
  });
};

module.exports = {
  getAllProducts,
  createOrder,
  markAsDelivered,
};
