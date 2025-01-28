const dbConfig = require("../config/db.js");

const {Sequelize, DataTypes} = require("sequelize");

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

db.sequelize.sync({ force: false })
.then(() => {
    console.log("sync done")
})


module.exports = db