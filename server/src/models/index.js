const dbConfig = require("../config/db.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT
    }
)

sequelize.authenticate()
    .then(() => {
        console.log("connected");
    })
    .catch(err => {
        console.log(err);
    })

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.game = require("./games.js")(sequelize, DataTypes)
db.genre = require("./genres.js")(sequelize, DataTypes)
db.platform = require("./platforms.js")(sequelize, DataTypes)


//associace
db.game.belongsToMany(db.genre, { through: "gameGenres" })
db.genre.belongsToMany(db.game, { through: "gameGenres" })

db.game.belongsToMany(db.platform, { through: "gamePlatforms" })
db.platform.belongsToMany(db.game, { through: "gamePlatforms" })







db.sequelize.sync({ force: true })
    .then(() => {
        console.log("sync done")

    })


module.exports = db