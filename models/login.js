//the below will actually create the Sequelize table


module.exports = function (sequelize, DataTypes) {
    var Login = sequelize.define("Login", {
  
      //TODO: Create the CRUD operations
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
    return Login;
  };
  
  