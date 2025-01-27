const dbConfig = require("../config/db");

const [Sequelize, DataTypes] = require("sequelize");

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

db.games = require("./games.js")(sequelize, DataTypes)

db.sequelize.sync({ force: false })


module.exports = db