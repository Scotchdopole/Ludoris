const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const gameDb = require("../models/");

const User = gameDb.user;
const Game = gameDb.game;
const UserGame = gameDb.userGame;

require('dotenv').config();

//user registration
exports.registerUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
        return res.status(400).json({ error: 'Username is already taken' });
    }

    const user = await User.create({ username, password: password });
    res.status(201).json({ message: 'User registered successfully', user });
};

//user login
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        user.lastOnline = new Date();
        await user.save();

        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '3h' }
        );

        res.json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

//add game to user
exports.addGameToUser = async (req, res) => {
    const { gameId } = req.body;
    const userId = req.user.id;

    const user = await User.findByPk(userId);
    const game = await Game.findByPk(gameId);

    if (!game) return res.status(404).json({ error: 'Game not found' });

    const existingGame = await UserGame.findOne({ where: { userId, gameId } });

    if (existingGame) {
        return res.status(400).json({ error: 'Game already added for this user' });
    }

    await user.addGame(game);

    res.json({ message: "Game added to user" });
};

//remove game from completed
exports.removeGameFromUser = async (req, res) => {
    const { gameId } = req.body;
    const userId = req.user.id;

    try {
        const deletedRows = await UserGame.destroy({
            where: {
                userId,
                gameId,
            },
        });

        if (deletedRows === 0) {
            return res.status(404).json({ error: 'Game not found in user\'s list.' });
        }

        res.json({ message: 'Game removed from user\'s list.' });
    } catch (error) {
        console.error('Error removing game:', error);
        res.status(500).json({ error: 'Failed to remove game.' });
    }
};

//jwt verification
exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(403).json({ error: 'No token provided' });

    const tokenWithoutBearer = token.split(' ')[1];

    jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ error: 'Invalid or expired token' });

        req.userId = decoded.id;
        req.user = { id: decoded.id, username: decoded.username };
        next();
    });
};



//get all users including game statuses
exports.getUserGamesWithStatus = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Game,
                    as: 'games',
                    through: {
                        attributes: ['status'],
                    },
                },
            ],
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (!user.games) {
            return res.status(404).json({ error: 'No games found for this user' });
        }

        const gamesWithStatus = user.games.map((game) => ({
            id: game.id,
            name: game.name,
            image: game.image
        }));

        res.json(gamesWithStatus);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
//user updated
exports.updateUser = async (req, res) => {
    const userId = req.user.id;
    const { username, password } = req.body;

    try {
        const user = await User.findByPk(userId);

        if (!user) return res.status(404).json({ error: 'User not found' });

        if (username) user.username = username;
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
        }

        await user.save();

        res.json({ message: 'User updated successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}



//get user by id
exports.getUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

//get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        if (!users) {
            return res.status(404).json({ error: 'No users found' });
        }

        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

//delete user
exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    const { password: enteredPassword } = req.body;
    if (!enteredPassword) {
        return res.status(400).json({ error: 'Password is required in the request body to delete the account.' });
    }

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const isPasswordCorrect = await bcrypt.compare(enteredPassword, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: 'Incorrect password. Account deletion denied.' });
        }
        await user.destroy();
        res.status(200).json({ message: 'User deleted successfully after password verification.' });

    } catch (error) {
        console.error('Error during user deletion process:', error);
        res.status(500).json({ error: 'Internal server error during account deletion.' });
    }
};

