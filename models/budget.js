//the below will actually create the Sequelize table


module.exports = function(sequelize, DataTypes) {
  var Budget = sequelize.define("Budget", {

//TODO: Create the CRUD operations
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
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
    },
    //Cost of item. Negative for an expense, positive for income.
    expense: {
      type: DataTypes.INTEGER,
      allowNull: false
  }
    //TODO: find a way to add the date to each transaction. 
  //   created_at: {
  //     type: DataTypes.DATE,
  // }
  });
  return Budget;
};

