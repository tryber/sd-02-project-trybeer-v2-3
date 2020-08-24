const codes = {
  invalid_data: 422,
  not_found: 404,
  something_wrong: 500,
  unauthorized: 401,
  access_denied: 403,
  conflict: 409,
};

const errorController = async (err, req, res, _next) => res.status(codes[err.code])
  .json({
    status: 'failed',
    code: err.code,
    message: err.message,
  });

module.exports = {
  errorController,
};
