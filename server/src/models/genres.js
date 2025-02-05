

module.exports = (sequelize, DataTypes) => {

    const Genre = sequelize.define("genre", {

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

    return Genre
}