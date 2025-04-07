const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

// /api/user
router.post('/register', userController.registerUser);


router.post('/login', userController.loginUser);


router.get('/:id', userController.getUserById);


router.get('/', userController.getAllUsers);

router.get('/:id/games', userController.getUserGamesWithStatus);

//auth required
router.post('/:id/add-game', userController.verifyToken, userController.addGameToUser);

//auth required
router.put('/update/:id', userController.verifyToken, userController.updateUser);

//auth required
router.delete('/delete/:id', userController.verifyToken, userController.deleteUser);

//auth required
router.delete('/:id/remove-game', userController.verifyToken, userController.removeGameFromUser);

router.use(userController.verifyToken);

module.exports = router;
