module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define("registration", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING
    },
    branch: {
      type: DataTypes.STRING
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    }
  });

  return Registration;
};