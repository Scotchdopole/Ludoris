

module.exports = (sequelize, DataTypes) => {

    const Game = sequelize.define("game", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: true
        },

        releaseDate: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        ytbTrailerLink: {
            type: DataTypes.STRING,
            allowNull: true
        }

         




    })

    return Game
}