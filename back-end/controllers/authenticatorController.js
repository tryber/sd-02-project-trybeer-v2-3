const jwt = require('jsonwebtoken');
const { getUser } = require('../services/usersService');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '300m',
  algorithm: 'HS256',
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return next({ code: 'invalid_data', message: 'Missing fields' });

    const user = await getUser(email);

    if (!user || user.password !== password) {
      return next({ code: 'unauthorized', message: 'User not found or wrong password' });
    }

    const { password: _, ...payload } = user;

    const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

    return res.status(200).json({
      status: 'success',
      token,
      ...payload,
    });
  } catch (error) {
    return next({ code: 'something_wrong', message: 'Something went wrong' });
  }
};

const authUser = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return next({ code: 'unauthorized', message: 'Missing JWT' });
  try {
    const payload = jwt.verify(token, JWT_SECRET);

    const user = await getUser(payload.email);

    if (!user) return next({ code: 'not_found', message: 'User not found' });

    req.user = user;

    return next();
  } catch (err) {
    return next({ code: 'unauthorized', message: 'Invalid Token' });
  }
};

module.exports = {
  login,
  authUser,
};
