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
    const { gameId, status } = req.body;
    const userId = req.user.id;

    const user = await User.findByPk(userId);
    const game = await Game.findByPk(gameId);

    if (!game) return res.status(404).json({ error: 'Game not found' });

    const existingGame = await UserGame.findOne({ where: { userId, gameId } });

    if (existingGame) {
        return res.status(400).json({ error: 'Game already added for this user' });
    }

    await user.addGame(game, { through: { status: status || false } });

    res.json({ message: `Game added to user with status "${status || 'false'}"` });
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
            include: {
                model: Game,
                as: 'games',
                through: {
                    attributes: ['status'], // Include 'status' from the join table
                },
            },
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if user.Games is defined
        if (!user.Games) {
            return res.status(404).json({ error: 'No games found for this user' });
        }

        // Map over the user's games and include the status from the join table
        const gamesWithStatus = user.Games.map((game) => ({
            id: game.id,
            name: game.name,
            status: game.UserGame.status, // Access status from the join table
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

    const user = await User.findByPk(userId);

    if (!user) return res.status(404).json({ error: 'User not found' });

    if (username) user.username = username;
    if (password) user.password = await bcrypt.hash(password, 10);

    await user.save();

    res.json({ message: 'User updated successfully', user });
};


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

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        await user.destroy();

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

