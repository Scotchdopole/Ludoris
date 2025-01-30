const gameDb = require("../models/")

const Game = gameDb.game
const Genre = gameDb.genre




const createGame = async (req, res) => {

    let info = {
        id: req.body.id,
        name: req.body.name,
        engine: req.body.engine,
        developer: req.body.developer,
        publisher: req.body.publisher,
        gameModes: req.body.gameModes
    }

    const game = await Game.create(info);
    res.status(200).send(game)
}



const getAllGames = async (req, res) => {

    let games = await Game.findAll({
        include: [{
            model: { Genre, Platform },
            through: { attributes: [] }
        }],
    })
    res.status(200).send(games)

}


const getGameById = async (req, res) => {

    let id = req.params.id
    let game = await Game.findOne({ where: { id: id } })
    res.status(200).send(game)

}


const updateGame = async (req, res) => {

    let id = req.params.id
    const game = await Game.update(req.body, { where: { id: id } })
    res.status(200).send(game)

}




const deleteGame = async (req, res) => {

    let id = req.params.id
    await Game.destroy({ where: { id: id } });
    res.status(200).send("game deleted")

}





module.exports = {
    createGame,
    getGameById,
    getAllGames,
    updateGame,
    deleteGame
}



