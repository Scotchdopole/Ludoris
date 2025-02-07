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
db.developer = require("./developer.js")(sequelize, DataTypes)
db.publisher = require("./publisher.js")(sequelize, DataTypes)
db.engine = require("./engine.js")(sequelize, DataTypes)
db.perspective = require("./perspective.js")(sequelize, DataTypes)
db.gameModes = require("./gameModes.js")(sequelize, DataTypes)


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








db.sequelize.sync({ force: true })
    .then(async () => {
        console.log("sync done")

        //seeding
        await db.genre.bulkCreate([
            {name: "Shooter"},
            { name: "Platformer" },
            { name: "Hack and Slash" },
            { name: "Battle Royale" },
            { name: "RPG" },
            { name: "Strategy" },
            { name: "Simulator" },
            { name: "Racing" },
            { name: "Survival" },
            { name: "Adventure" },
            { name: "Sport" },
            { name: "Party" },
            { name: "Fighting" },
        ])
        await db.platform.bulkCreate([
            { name: "Windows" },
            { name: "Linux" },
            { name: "macOS" },
            { name: "Playstation" },
            { name: "Xbox" },
            { name: "Nintento" },
            { name: "Android" },
            { name: "iOS" },
            { name: "Oculus" },
        ])
        await db.gameModes.bulkCreate([
            { name: "Singleplayer" },
            { name: "Multiplayer" },
            { name: "Online Co-Op" },
            { name: "Co-Op" },
            { name: "Sandbox" },
            { name: "Split-Screen" },
            { name: "LAN Multiplayer" },
        ])
        await db.perspective.bulkCreate([
            { name: "First-Person" },
            { name: "Third-Person" },
            { name: "Isometric" },
            { name: "Top-down" },
            { name: "Side-scrolling" },
            { name: "Fixed Camera" },
        ])
        await db.engine.bulkCreate([
            { name: "4A Engine" },
            { name: "A-Frame" },
            { name: "Adventure Game Interpreter" },
            { name: "Adventure Game Studio" },
            { name: "Aleph One" },
            { name: "Amazon Lumberyard" },
            { name: "Anvil" },
            { name: "AppGameKit" },
            { name: "Ardor3D" },
            { name: "Aurora toolset" },
            { name: "Babylon.js" },
            { name: "Blend4Web" },
            { name: "Blender Game Engine" },
            { name: "Build engine" },
            { name: "Buildbox" },
            { name: "C4 Engine" },
            { name: "Chrome Engine" },
            { name: "ClanLib" },
            { name: "Clausewitz" },
            { name: "Clickteam Fusion" },
            { name: "Cocos2d" },
            { name: "Cocos2d-x" },
            { name: "Cocos2d-html5" },
            { name: "CryEngine" },
            { name: "Crystal Space" },
            { name: "Cube" },
            { name: "Cube 2" },
            { name: "DarkBASIC" },
            { name: "Defold" },
            { name: "Delta3D" },
            { name: "Dim3" },
            { name: "Dream Maker" },
            { name: "Ego" },
            { name: "Elflight Engine" },
            { name: "Enigma Engine" },
            { name: "Esenthel Engine" },
            { name: "Flare3D" },
            { name: "FlatRedBall" },
            { name: "Flixel" },
            { name: "Frostbite" },
            { name: "Gamebryo" },
            { name: "GameMaker Studio" },
            { name: "Godot" },
            { name: "GoldSrc" },
            { name: "HaxeFlixel" },
            { name: "HeroEngine" },
            { name: "id Tech 1" },
            { name: "id Tech 2" },
            { name: "id Tech 3" },
            { name: "id Tech 4" },
            { name: "id Tech 5" },
            { name: "id Tech 6" },
            { name: "id Tech 7" },
            { name: "Irrlicht" },
            { name: "Jade" },
            { name: "jMonkeyEngine" },
            { name: "Kivy" },
            { name: "Leadwerks" },
            { name: "Limon Engine" },
            { name: "LithTech" },
            { name: "Lumberyard" },
            { name: "Maratis" },
            { name: "Marmalade" },
            { name: "Mugen" },
            { name: "Ogre" },
            { name: "Open Dynamics Engine" },
            { name: "OpenFL" },
            { name: "OpenSceneGraph" },
            { name: "Orx" },
            { name: "Panda3D" },
            { name: "Phaser" },
            { name: "PlayCanvas" },
            { name: "Q" },
            { name: "Quake engine" },
            { name: "RAGE" },
            { name: "Raydium" },
            { name: "RealmForge" },
            { name: "RenderWare" },
            { name: "Ren'Py" },
            { name: "Retribution Engine" },
            { name: "RPG Maker" },
            { name: "S2 Engine" },
            { name: "ShiVa" },
            { name: "Source" },
            { name: "Source 2" },
            { name: "Spring" },
            { name: "Stride" },
            { name: "Torque" },
            { name: "Turbulenz" },
            { name: "TyrQuake" },
            { name: "Unigine" },
            { name: "Unreal Engine" },
            { name: "Unreal Engine 2" },
            { name: "Unreal Engine 3" },
            { name: "Unreal Engine 4" },
            { name: "Unreal Engine 5" },
            { name: "Urho3D" },
            { name: "V-Play" },
            { name: "Vision" },
            { name: "Wintermute Engine" },
            { name: "Xenko" },
            { name: "Zillions of Games" },
        ]);
    })


module.exports = db