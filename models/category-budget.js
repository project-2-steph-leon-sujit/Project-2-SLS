module.exports = function(sequelize, DataTypes) {
    var CategoryBudget = sequelize.define("CategoryBudget", {
      income: {
        type: DataTypes.INTEGER,
        allowNull: false,
          len: [1]
        
      },
      goal: {
        type: DataTypes.INTEGER,
        allowNull: false,
          len: [1]
        
      },
      rent: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      },
      food: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      },
      entertainment: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      },
      pets: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      },
      misc: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      }
    });

    return CategoryBudget;
};