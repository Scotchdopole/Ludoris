

module.exports = (sequelize, DataTypes) => {

    const Publisher = sequelize.define("publisher", {

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

    return Publisher
}