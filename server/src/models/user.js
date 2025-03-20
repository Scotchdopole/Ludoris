require("dotenv").config();
const bcrypt = require('bcrypt'); 

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    //password hashing
    User.beforeCreate(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
    });

    return User;
};
