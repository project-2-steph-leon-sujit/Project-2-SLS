//the below will actually create the Sequelize table


module.exports = function (sequelize, DataTypes) {
  var Budget = sequelize.define("Budget", {

    //TODO: Create the CRUD operations
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    expense: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    //The category lists the category of each transaction
    category: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    //Description: describes the item
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });


  // Budget.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Budget.belongsTo(models.Login, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Budget;
};

