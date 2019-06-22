//the below will actually create the Sequelize table


module.exports = function(sequelize, DataTypes) {
    var Budget = sequelize.define("Budget", {
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      expense: {
        type: DataTypes.STRING,
        defaultValue: "Personal"
      },
      date: {
        type: DataTypes.STRING,
        defaultValue: "Personal"
      }
    });
    return Post;
  };
  