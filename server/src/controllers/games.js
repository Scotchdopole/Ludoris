const gameDb = require("../models/")

const Game = gameDb.game
const Genre = gameDb.genre
const Platform = gameDb.platform
const Developer = gameDb.developer
const Publisher = gameDb.publisher
const Engine = gameDb.engine
const Perspective = gameDb.perspective
const GameModes = gameDb.gameModes




const createGame = async (req, res) => {
    try {
        const {
            name,
            engines,
            developers,  
            publishers,  
            genreIds,
            platformIds,
            releaseDate,
            gameModesIds,
            price,
            ytbTrailerLink,
            perspectiveIds
        } = req.body;

       
        const newGame = await Game.create({
            name,  
            releaseDate,
            price,
            ytbTrailerLink
        });

        
        let developerIds = [];
        if (developers && developers.length > 0) {
            for (const dev of developers) {
                let [developer] = await Developer.findOrCreate({
                    where: { name: dev.name },
                    defaults: { name: dev.name }
                });
                developerIds.push(developer.id);
            }
            await newGame.setDevelopers(developerIds);
        }

        let engineIds = [];
        if (engines && engines.length > 0) {
            for (const eng of engines) {
                let [engine] = await Engine.findOrCreate({
                    where: { name: eng.name },
                    defaults: { name: eng.name }
                });
                engineIds.push(engine.id);
            }
            await newGame.setEngines(engineIds);
        }

       
        let publisherIds = [];
        if (publishers && publishers.length > 0) {
            for (const pub of publishers) {
                let [publisher] = await Publisher.findOrCreate({
                    where: { name: pub.name },
                    defaults: { name: pub.name }
                });
                publisherIds.push(publisher.id);
            }
            await newGame.setPublishers(publisherIds);
        }


        if (genreIds && genreIds.length > 0) {
            await newGame.setGenres(genreIds);
        }
        if (platformIds && platformIds.length > 0) {
            await newGame.setPlatforms(platformIds);
        }
        if (gameModesIds && gameModesIds.length > 0) {
            await newGame.setGameModes(gameModesIds);
        } 
        if (perspectiveIds && perspectiveIds.length > 0) {
            await newGame.setPerspective(perspectiveIds);
        }

        // fixnout gameModes a perspektivy
        const createdGame = await Game.findByPk(newGame.id, {
            include: [Genre, Platform, Developer, Publisher, Engine]
        });

        res.status(201).json(createdGame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating game", error });
    }
}
    

const getAllGames = async (req, res) => {

    let games = await Game.findAll({
        include: [{
            model: Genre,
            through: { attributes: [] }
        },
        {
            model: Platform,
            through: { attributes: [] }
        },
        {
            model: Developer,
            through: { attributes: [] }
        },
        {
            model: Publisher,
            through: { attributes: [] }
        },
        {
            model: Engine,
            through: { attributes: [] }
        },
        {
            model: Perspective,
            through: { attributes: [] }
        }
    ]
    })
    res.status(200).send(games)

}


const getGameById = async (req, res) => {

    let id = req.params.id
    let game = await Game.findOne(
        {
            include: [{
                model: Genre,
                through: { attributes: [] }
            },
            {
                model: Platform,
                through: { attributes: [] }
            },
            {
                model: Developer,
                through: { attributes: [] }
            },
            {
                model: Publisher,
                through: { attributes: [] }
            },
            {
                model: Engine,
                through: { attributes: [] }
            },
            {
                model: Perspective,
                through: { attributes: [] }
            }
        ]
        },
        { where: { id: id } })
    res.status(200).send(game)

}


const updateGame = async (req, res) => {

    let id = req.params.id
    const game = await Game.update(req.body, { where: { id: id } })
    res.status(200).send(game)

}




const deleteGame = async (req, res) => {

    let id = req.params.id
    await Game.destroy(
        {
            include: [{
                model: Genre,
                through: { attributes: [] }
            },
            {
                model: Platform,
                through: { attributes: [] }
            },
            {
                model: Developer,
                through: { attributes: [] }
            },
            {
                model: Publisher,
                through: { attributes: [] }
            },
            {
                model: Engine,
                through: { attributes: [] }
            },
            {
                model: Perspective,
                through: { attributes: [] }
            }
        ]
        },
        { where: { id: id } });
    res.status(200).send("game deleted")

}





module.exports = {
    createGame,
    getGameById,
    getAllGames,
    updateGame,
    deleteGame
}



