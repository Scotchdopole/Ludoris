const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

    const games = sequelize.define("product",{

        id: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
}