const gameController = require("../controllers/games");



const router = require("express").Router()

// /api/games
router.post("/createGame", gameController.upload, gameController.createGame);
router.get("/engines", gameController.getAllEngines);
router.get("/", gameController.getAllGames);
router.get("/:id", gameController.getGameById);
router.put("/:id", gameController.updateGame);
router.delete("/:id", gameController.deleteGame);

router.put("/:id/uploadImage", gameController.upload, gameController.updateGameImage);





module.exports = router
