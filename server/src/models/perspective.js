

module.exports = (sequelize, DataTypes) => {

    const Perspective = sequelize.define("perspective", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name:{
            type:DataTypes.STRING,
            unique: true,
            allowNull: false
        }

    })

    return Perspective
}