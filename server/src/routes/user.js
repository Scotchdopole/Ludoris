const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

// /api/user
router.post('/register', userController.registerUser);


router.post('/login', userController.loginUser);


router.get('/:id', userController.getUserById);


router.get('/', userController.getAllUsers);

//auth required
router.post('/add-game/:id', userController.verifyToken, userController.addGameToUser);

//auth required
router.get('/:id/games', userController.verifyToken, userController.getUserGamesWithStatus);

//auth required
router.put('/update/:id', userController.verifyToken, userController.updateUser);

//auth required
router.delete('/delete/:id', userController.verifyToken, userController.deleteUser);

router.use(userController.verifyToken);

module.exports = router;
