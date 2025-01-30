

module.exports = (sequelize, DataTypes) => {

    const GameModes = sequelize.define("gameModes", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name:{
            type:DataTypes.STRING,
            unique: true,
            allowNull: true
        }

    })

    return GameModes
}