const gameDb = require("../models/")
const multer = require("multer")
const path = require("path")

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
        let {
            name,
            engineIds,
            developers,
            publishers,
            genreIds,
            platformIds,
            releaseDate,
            gameModesIds,
            price,
            ytbTrailerLink,
            perspectiveIds,
            desc
        } = req.body;

        // Parse JSON strings from FormData
        if (typeof engineIds === 'string') engineIds = JSON.parse(engineIds);
        if (typeof developers === 'string') developers = JSON.parse(developers);
        if (typeof publishers === 'string') publishers = JSON.parse(publishers);
        if (typeof genreIds === 'string') genreIds = JSON.parse(genreIds);
        if (typeof platformIds === 'string') platformIds = JSON.parse(platformIds);
        if (typeof gameModesIds === 'string') gameModesIds = JSON.parse(gameModesIds);
        if (typeof perspectiveIds === 'string') perspectiveIds = JSON.parse(perspectiveIds);

        let imagePath = req.file ? req.file.path.replace(/\\/g, '/') : null;

        // Create the base game object
        const newGame = await Game.create({
            name,
            releaseDate,
            price,
            ytbTrailerLink,
            desc,
            image: imagePath
        });

        // Handle developers association
        if (developers && developers.length > 0) {
            let developerIds = [];
            for (const dev of developers) {
                let [developer] = await Developer.findOrCreate({
                    where: { name: dev.name }
                });
                developerIds.push(developer.id);
            }
            await newGame.setDevelopers(developerIds);
        }

        // Rest of your code remains the same...

        // Handle publishers association
        if (publishers && publishers.length > 0) {
            let publisherIds = [];
            for (const pub of publishers) {
                let [publisher] = await Publisher.findOrCreate({
                    where: { name: pub.name }
                });
                publisherIds.push(publisher.id);
            }
            await newGame.setPublishers(publisherIds);
        }

        // Handle other associations
        if (engineIds && engineIds.length > 0) await newGame.setEngines(engineIds);
        if (genreIds && genreIds.length > 0) await newGame.setGenres(genreIds);
        if (platformIds && platformIds.length > 0) await newGame.setPlatforms(platformIds);
        if (gameModesIds && gameModesIds.length > 0) await newGame.setGameModes(gameModesIds);
        if (perspectiveIds && perspectiveIds.length > 0) await newGame.setPerspectives(perspectiveIds);

        // Fetch the complete game with all associations
        const createdGame = await Game.findByPk(newGame.id, {
            include: [Genre, Platform, Developer, Publisher, Engine, GameModes, Perspective]
        });

        res.status(201).json(createdGame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating game", error });
    }
};


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
            model: GameModes,
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
    let game = await Game.findOne({
        where: { id: id },
        include: [
            {
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
                model: GameModes,
                through: { attributes: [] }
            },
            {
                model: Perspective,
                through: { attributes: [] }
            }
        ]
    });

    res.status(200).send(game)

}


const updateGame = async (req, res) => {

    try {
        const { id } = req.params;
        const {
            name,
            engineIds,
            developers,
            publishers,
            genreIds,
            platformIds,
            releaseDate,
            gameModesIds,
            price,
            ytbTrailerLink,
            perspectiveIds,
            desc
        } = req.body;




        let game = await Game.findByPk(id);
        if (!game) {
            return res.status(404).json({ message: "Game not found" });
        }


        await game.update({
            name,
            releaseDate,
            price,
            ytbTrailerLink,
            desc
        });

        if (developers && developers.length > 0) {
            let developerIds = [];
            for (const dev of developers) {
                let [developer] = await Developer.findOrCreate({
                    where: { name: dev.name }
                });
                developerIds.push(developer.id);
            }
            await game.setDevelopers(developerIds);
        }


        if (publishers && publishers.length > 0) {
            let publisherIds = [];
            for (const pub of publishers) {
                let [publisher] = await Publisher.findOrCreate({
                    where: { name: pub.name }
                });
                publisherIds.push(publisher.id);
            }
            await game.setPublishers(publisherIds);
        }


        if (engineIds && engineIds.length > 0) await game.setEngines(engineIds);
        if (genreIds && genreIds.length > 0) await game.setGenres(genreIds);
        if (platformIds && platformIds.length > 0) await game.setPlatforms(platformIds);
        if (gameModesIds && gameModesIds.length > 0) await game.setGameModes(gameModesIds);
        if (perspectiveIds && perspectiveIds.length > 0) await game.setPerspectives(perspectiveIds);


        const updatedGame = await Game.findByPk(game.id, {
            include: [Genre, Platform, Developer, Publisher, Engine, GameModes, Perspective]
        });

        res.status(200).json(updatedGame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating game", error });
    }
};





const deleteGame = async (req, res) => {

    let id = req.params.id
    await Game.destroy(
        { where: { id: id } });
    res.status(200).send("game deleted")

}



const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "Images")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }

})


const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/
        const mimetype = fileTypes.test(file.mimetype)
        const extName = fileTypes.test(path.extname(file.originalname))

        if (mimetype && extName) {
            return cb(null, true)
        }
        cb("unsupported file format")
    }
}).single("image");



const getAllEngines = async (req, res) => {
    try {
        const engines = await Engine.findAll();
        res.status(200).json(engines);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching engines", error: error.message });
    }
};


const updateGameImage = async (req, res) => {
    try {
        const gameId = req.params.id;

        if (!req.file) {
            return res.status(400).json({ message: "No image uploaded" });
        }

        const imagePath = req.file.path.replace(/\\/g, '/');

        const game = await Game.findByPk(gameId);
        if (!game) {
            return res.status(404).json({ message: "Game not found" });
        }

        game.image = imagePath;
        await game.save();

        res.status(200).json({ message: "Image uploaded successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error uploading image", error });
    }
};



module.exports = {
    createGame,
    getGameById,
    getAllGames,
    updateGame,
    deleteGame,
    upload,
    getAllEngines,
    updateGameImage
}



