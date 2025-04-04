

module.exports = (sequelize, DataTypes) => {

    const Engine = sequelize.define("engine", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true
        }

    })

    return Engine
}