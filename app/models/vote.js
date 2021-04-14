module.exports = (sequelize, DataTypes) => {
    const vote = sequelize.define("vote", {
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      initialVote: {
        type: DataTypes.INTEGER
      },
      currentVote: {
        type: DataTypes.INTEGER
      },
    });
  
    return vote;
  };