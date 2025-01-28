

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

        //association
        genres: {
            type: DataTypes.STRING,
            allowNull: true
        },

        //association
        platforms: {
            type: DataTypes.STRING,
            allowNull: true
        },

        engine: {
            type: DataTypes.STRING,
            allowNull: true
        },
        
        //association
        developer: {
            type: DataTypes.STRING,
            allowNull: true
        },

         //association
        publisher: {
            type: DataTypes.STRING,
            allowNull: true
        },

         //association
        gameModes: {
            type: DataTypes.STRING,
            allowNull: true
        },

        releaseDate: {
            type: DataTypes.DATE,
            allowNull: true
        },

        price: {
            type: DataTypes.NUMBER,
            allowNull: true
        },

        ytbTrailerLink: {
            type: DataTypes.STRING,
            allowNull: true
        },

         




    })

    return Game
}