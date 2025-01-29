

module.exports = (sequelize, DataTypes) => {

    const Platform = sequelize.define("platform", {

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

    return Platform
}