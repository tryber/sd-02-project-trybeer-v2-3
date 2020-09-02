const UserAllData = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  return User;
};

module.exports = UserAllData;
