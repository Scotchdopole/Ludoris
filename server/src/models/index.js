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


db.game = require("./games.js")(sequelize, DataTypes);
db.genre = require("./genres.js")(sequelize, DataTypes);
db.platform = require("./platforms.js")(sequelize, DataTypes);
db.developer = require("./developer.js")(sequelize, DataTypes);
db.publisher = require("./publisher.js")(sequelize, DataTypes);
db.engine = require("./engine.js")(sequelize, DataTypes);
db.perspective = require("./perspective.js")(sequelize, DataTypes);
db.gameModes = require("./gameModes.js")(sequelize, DataTypes);
db.user = require('./user')(sequelize, DataTypes);
db.userGame = require('./userGame')(sequelize, DataTypes);


//associace
db.game.belongsToMany(db.genre, { through: "gameGenres" })
db.genre.belongsToMany(db.game, { through: "gameGenres" })

db.game.belongsToMany(db.platform, { through: "gamePlatforms" })
db.platform.belongsToMany(db.game, { through: "gamePlatforms" })

db.game.belongsToMany(db.developer, { through: "gameDeveloper" })
db.developer.belongsToMany(db.game, { through: "gameDeveloper" })

db.game.belongsToMany(db.publisher, { through: "gamePublisher" })
db.publisher.belongsToMany(db.game, { through: "gamePublisher" })

db.game.belongsToMany(db.engine, { through: "gameEngine" })
db.engine.belongsToMany(db.game, { through: "gameEngine" })

db.game.belongsToMany(db.perspective, { through: "gamePerspective" })
db.perspective.belongsToMany(db.game, { through: "gamePerspective" })

db.game.belongsToMany(db.gameModes, { through: "gameGameModes" })
db.gameModes.belongsToMany(db.game, { through: "gameGameModes" })

db.user.belongsToMany(db.game, { 
    through: db.userGame,
    foreignKey: 'userId',
    as: 'games'
});

db.game.belongsToMany(db.user, {
    through: db.userGame,
    foreignKey: 'gameId',
    as: 'users'
});


db.sequelize.sync({force:false})
    .then(async () => {
        console.log("sync done")

        
    })

module.exports = db