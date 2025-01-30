

module.exports = (sequelize, DataTypes) => {

    const Developer = sequelize.define("developer", {

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

    return Developer
}