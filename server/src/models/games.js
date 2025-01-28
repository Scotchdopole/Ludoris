

module.exports = (sequelize, DataTypes) => {

    const Game = sequelize.define("game", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },


        


    })

    return Game
}