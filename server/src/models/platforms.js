

module.exports = (sequelize, DataTypes) => {

    const Platform = sequelize.define("platform", {

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

    return Platform
}