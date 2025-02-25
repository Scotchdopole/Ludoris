

module.exports = (sequelize, DataTypes) => {

    const Desc = sequelize.define("desc", {

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

    return Desc
}