module.exports = (sequelize, DataTypes) => {
    const UserGame = sequelize.define('userGame', {
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    });

    return UserGame;
};