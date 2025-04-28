-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2025 at 06:22 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET FOREIGN_KEY_CHECKS = 0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ludoris`
--

-- --------------------------------------------------------

--
-- Table structure for table `developers`
--

CREATE TABLE `developers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `developers`
--

INSERT INTO `developers` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Naughty Dog', '2025-02-25 10:52:57', '2025-02-25 10:52:57'),
(2, 'CD Projekt Red', '2025-02-25 10:55:41', '2025-02-25 10:55:41'),
(3, 'Rockstar North', '2025-02-25 10:58:03', '2025-02-25 10:58:03'),
(4, 'Valve', '2025-02-25 11:00:43', '2025-02-25 11:00:43'),
(5, 'Rockstar Studios', '2025-02-25 11:04:17', '2025-02-25 11:04:17'),
(6, 'Nintendo', '2025-03-07 10:08:47', '2025-03-07 10:08:47'),
(7, 'Mojang Studios', '2025-03-07 10:11:36', '2025-03-07 10:11:36'),
(8, 'Blizzard Entertainment', '2025-03-07 11:03:12', '2025-03-07 11:03:12'),
(9, 'id Software', '2025-03-18 11:08:17', '2025-03-18 11:08:17'),
(10, 'Innersloth', '2025-03-18 11:23:10', '2025-03-18 11:23:10'),
(11, 'Supergiant Games', '2025-03-18 11:26:01', '2025-03-18 11:26:01'),
(12, 'Maddy Makes Games', '2025-03-18 11:28:32', '2025-03-18 11:28:32'),
(13, 'Team Cherry', '2025-03-18 11:29:50', '2025-03-18 11:29:50'),
(14, 'FromSoftware', '2025-03-18 11:31:55', '2025-03-18 11:31:55'),
(15, 'Ubisoft Quebec', '2025-03-18 11:35:51', '2025-03-18 11:35:51');

-- --------------------------------------------------------

--
-- Table structure for table `engines`
--

CREATE TABLE `engines` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `engines`
--

INSERT INTO `engines` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, '4A Engine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(2, 'A-Frame', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(3, 'Adventure Game Interpreter', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(4, 'Adventure Game Studio', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(5, 'Aleph One', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(6, 'Amazon Lumberyard', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(7, 'Anvil', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(8, 'AppGameKit', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(9, 'Ardor3D', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(10, 'Aurora toolset', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(11, 'Babylon.js', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(12, 'Blend4Web', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(13, 'Blender Game Engine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(14, 'Build engine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(15, 'Buildbox', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(16, 'C4 Engine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(17, 'Chrome Engine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(18, 'ClanLib', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(19, 'Clausewitz', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(20, 'Clickteam Fusion', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(21, 'Cocos2d', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(22, 'Cocos2d-x', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(23, 'Cocos2d-html5', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(24, 'CryEngine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(25, 'Crystal Space', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(26, 'Cube', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(27, 'Cube 2', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(28, 'DarkBASIC', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(29, 'Defold', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(30, 'Delta3D', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(31, 'Dim3', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(32, 'Dream Maker', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(33, 'Ego', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(34, 'Elflight Engine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(35, 'Enigma Engine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(36, 'Esenthel Engine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(37, 'Flare3D', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(38, 'FlatRedBall', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(39, 'Flixel', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(40, 'Frostbite', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(41, 'Gamebryo', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(42, 'GameMaker Studio', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(43, 'Godot', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(44, 'GoldSrc', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(45, 'HaxeFlixel', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(46, 'HeroEngine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(47, 'id Tech 1', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(48, 'id Tech 2', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(49, 'id Tech 3', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(50, 'id Tech 4', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(51, 'id Tech 5', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(52, 'id Tech 6', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(53, 'id Tech 7', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(54, 'Irrlicht', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(55, 'Jade', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(56, 'jMonkeyEngine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(57, 'Kivy', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(58, 'Leadwerks', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(59, 'Limon Engine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(60, 'LithTech', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(61, 'Lumberyard', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(62, 'Maratis', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(63, 'Marmalade', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(64, 'Mugen', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(65, 'Ogre', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(66, 'Open Dynamics Engine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(67, 'OpenFL', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(68, 'OpenSceneGraph', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(69, 'Orx', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(70, 'Panda3D', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(71, 'Phaser', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(72, 'PlayCanvas', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(73, 'Q', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(74, 'Quake engine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(75, 'RAGE', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(76, 'Raydium', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(77, 'RealmForge', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(78, 'RenderWare', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(79, 'Ren\'Py', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(80, 'Retribution Engine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(81, 'RPG Maker', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(82, 'S2 Engine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(83, 'ShiVa', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(84, 'Source', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(85, 'Source 2', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(86, 'Spring', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(87, 'Stride', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(88, 'Torque', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(89, 'Turbulenz', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(90, 'TyrQuake', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(91, 'Unigine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(92, 'Unreal Engine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(93, 'Unreal Engine 2', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(94, 'Unreal Engine 3', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(95, 'Unreal Engine 4', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(96, 'Unreal Engine 5', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(97, 'Urho3D', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(98, 'V-Play', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(99, 'Vision', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(100, 'Wintermute Engine', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(101, 'Xenko', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(102, 'Zillions of Games', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(103, 'REDEngine', '2025-02-26 12:58:55', '2025-02-26 12:58:55'),
(104, 'Naughty Dog Engine', '2025-02-26 13:09:29', '2025-02-26 13:09:29'),
(105, 'Other', '2025-03-07 11:07:27', '2025-03-07 11:07:27'),
(106, 'Unity', '2025-03-18 12:19:51', '2025-03-18 12:19:51'),
(107, 'Monogame', '2025-03-18 12:45:01', '2025-03-18 12:45:01');

-- --------------------------------------------------------

--
-- Table structure for table `gamedeveloper`
--

CREATE TABLE `gamedeveloper` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `gameId` int(11) NOT NULL,
  `developerId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `gamedeveloper`
--

INSERT INTO `gamedeveloper` (`createdAt`, `updatedAt`, `gameId`, `developerId`) VALUES
('2025-02-25 10:56:16', '2025-02-25 10:56:16', 1, 1),
('2025-02-25 10:56:43', '2025-02-25 10:56:43', 2, 2),
('2025-02-25 10:57:19', '2025-02-25 10:57:19', 3, 2),
('2025-02-25 10:58:03', '2025-02-25 10:58:03', 4, 3),
('2025-02-25 11:04:17', '2025-02-25 11:04:17', 5, 5),
('2025-02-25 11:00:43', '2025-02-25 11:00:43', 6, 4),
('2025-03-07 10:08:47', '2025-03-07 10:08:47', 7, 6),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 7),
('2025-03-07 11:03:12', '2025-03-07 11:03:12', 9, 8),
('2025-03-07 11:11:01', '2025-03-07 11:11:01', 10, 4),
('2025-03-18 11:08:17', '2025-03-18 11:08:17', 11, 9),
('2025-03-18 11:23:10', '2025-03-18 11:23:10', 12, 10),
('2025-03-18 11:26:01', '2025-03-18 11:26:01', 13, 11),
('2025-03-18 11:28:32', '2025-03-18 11:28:32', 14, 12),
('2025-03-18 11:29:50', '2025-03-18 11:29:50', 15, 13),
('2025-03-18 11:36:31', '2025-03-18 11:36:31', 16, 14),
('2025-03-18 11:36:22', '2025-03-18 11:36:22', 17, 15);

-- --------------------------------------------------------

--
-- Table structure for table `gameengine`
--

CREATE TABLE `gameengine` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `gameId` int(11) NOT NULL,
  `engineId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `gameengine`
--

INSERT INTO `gameengine` (`createdAt`, `updatedAt`, `gameId`, `engineId`) VALUES
('2025-02-26 12:09:44', '2025-02-26 12:09:44', 1, 104),
('2025-02-26 12:00:15', '2025-02-26 12:00:15', 2, 103),
('2025-02-26 12:00:42', '2025-02-26 12:00:42', 3, 103),
('2025-02-25 10:58:03', '2025-02-25 10:58:03', 4, 75),
('2025-02-25 10:59:11', '2025-02-25 10:59:11', 5, 75),
('2025-02-25 11:00:43', '2025-02-25 11:00:43', 6, 85),
('2025-03-07 10:08:47', '2025-03-07 10:08:47', 7, 105),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 105),
('2025-03-07 11:03:12', '2025-03-07 11:03:12', 9, 105),
('2025-03-07 11:11:01', '2025-03-07 11:11:01', 10, 44),
('2025-03-18 11:08:17', '2025-03-18 11:08:17', 11, 53),
('2025-03-18 11:23:10', '2025-03-18 11:23:10', 12, 106),
('2025-03-18 11:26:01', '2025-03-18 11:26:01', 13, 92),
('2025-03-18 11:45:42', '2025-03-18 11:45:42', 14, 107),
('2025-03-18 11:29:50', '2025-03-18 11:29:50', 15, 43),
('2025-03-18 11:31:55', '2025-03-18 11:31:55', 16, 92),
('2025-03-18 11:44:10', '2025-03-18 11:44:10', 17, 7);

-- --------------------------------------------------------

--
-- Table structure for table `gamegamemodes`
--

CREATE TABLE `gamegamemodes` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `gameId` int(11) NOT NULL,
  `gameModeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `gamegamemodes`
--

INSERT INTO `gamegamemodes` (`createdAt`, `updatedAt`, `gameId`, `gameModeId`) VALUES
('2025-02-25 10:52:57', '2025-02-25 10:52:57', 1, 1),
('2025-02-25 10:56:43', '2025-02-25 10:56:43', 2, 1),
('2025-02-25 10:57:19', '2025-02-25 10:57:19', 3, 1),
('2025-02-25 10:58:04', '2025-02-25 10:58:04', 4, 1),
('2025-02-25 10:58:04', '2025-02-25 10:58:04', 4, 2),
('2025-02-25 10:59:11', '2025-02-25 10:59:11', 5, 1),
('2025-02-25 10:59:11', '2025-02-25 10:59:11', 5, 2),
('2025-02-25 11:00:43', '2025-02-25 11:00:43', 6, 2),
('2025-03-07 10:08:47', '2025-03-07 10:08:47', 7, 1),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 1),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 2),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 3),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 4),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 5),
('2025-03-07 11:03:13', '2025-03-07 11:03:13', 9, 2),
('2025-03-07 11:03:13', '2025-03-07 11:03:13', 9, 3),
('2025-03-07 11:03:13', '2025-03-07 11:03:13', 9, 4),
('2025-03-07 11:11:01', '2025-03-07 11:11:01', 10, 1),
('2025-03-07 11:11:01', '2025-03-07 11:11:01', 10, 2),
('2025-03-18 11:08:17', '2025-03-18 11:08:17', 11, 1),
('2025-03-18 11:08:17', '2025-03-18 11:08:17', 11, 2),
('2025-03-18 11:23:10', '2025-03-18 11:23:10', 12, 2),
('2025-03-18 11:23:10', '2025-03-18 11:23:10', 12, 3),
('2025-03-18 11:26:02', '2025-03-18 11:26:02', 13, 1),
('2025-03-18 11:28:32', '2025-03-18 11:28:32', 14, 1),
('2025-03-18 11:29:50', '2025-03-18 11:29:50', 15, 1),
('2025-03-18 11:31:55', '2025-03-18 11:31:55', 16, 1),
('2025-03-18 11:36:22', '2025-03-18 11:36:22', 17, 1);

-- --------------------------------------------------------

--
-- Table structure for table `gamegenres`
--

CREATE TABLE `gamegenres` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `gameId` int(11) NOT NULL,
  `genreId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `gamegenres`
--

INSERT INTO `gamegenres` (`createdAt`, `updatedAt`, `gameId`, `genreId`) VALUES
('2025-02-25 10:52:57', '2025-02-25 10:52:57', 1, 10),
('2025-02-25 10:56:43', '2025-02-25 10:56:43', 2, 5),
('2025-02-25 10:56:43', '2025-02-25 10:56:43', 2, 10),
('2025-02-25 10:57:19', '2025-02-25 10:57:19', 3, 5),
('2025-02-25 10:57:19', '2025-02-25 10:57:19', 3, 10),
('2025-02-25 10:58:04', '2025-02-25 10:58:04', 4, 5),
('2025-02-25 10:58:04', '2025-02-25 10:58:04', 4, 10),
('2025-02-25 10:59:11', '2025-02-25 10:59:11', 5, 5),
('2025-02-25 10:59:11', '2025-02-25 10:59:11', 5, 10),
('2025-02-25 11:00:43', '2025-02-25 11:00:43', 6, 1),
('2025-03-07 10:08:47', '2025-03-07 10:08:47', 7, 9),
('2025-03-07 10:08:47', '2025-03-07 10:08:47', 7, 10),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 5),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 7),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 9),
('2025-03-07 11:03:12', '2025-03-07 11:03:12', 9, 1),
('2025-03-07 11:11:01', '2025-03-07 11:11:01', 10, 3),
('2025-03-07 11:11:01', '2025-03-07 11:11:01', 10, 6),
('2025-03-18 11:08:17', '2025-03-18 11:08:17', 11, 1),
('2025-03-18 11:23:10', '2025-03-18 11:23:10', 12, 9),
('2025-03-18 11:23:10', '2025-03-18 11:23:10', 12, 12),
('2025-03-18 11:26:02', '2025-03-18 11:26:02', 13, 3),
('2025-03-18 11:26:02', '2025-03-18 11:26:02', 13, 5),
('2025-03-18 11:26:02', '2025-03-18 11:26:02', 13, 9),
('2025-03-18 11:28:32', '2025-03-18 11:28:32', 14, 2),
('2025-03-18 11:28:32', '2025-03-18 11:28:32', 14, 9),
('2025-03-18 11:29:50', '2025-03-18 11:29:50', 15, 2),
('2025-03-18 11:29:50', '2025-03-18 11:29:50', 15, 9),
('2025-03-18 11:36:31', '2025-03-18 11:36:31', 16, 3),
('2025-03-18 11:31:55', '2025-03-18 11:31:55', 16, 5),
('2025-03-18 11:36:22', '2025-03-18 11:36:22', 17, 5),
('2025-03-18 11:36:22', '2025-03-18 11:36:22', 17, 10);

-- --------------------------------------------------------

--
-- Table structure for table `gamemodes`
--

CREATE TABLE `gamemodes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `gamemodes`
--

INSERT INTO `gamemodes` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Singleplayer', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(2, 'Multiplayer', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(3, 'Online Co-Op', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(4, 'Co-Op', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(5, 'Sandbox', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(6, 'Split-Screen', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(7, 'LAN Multiplayer', '2025-02-25 10:48:22', '2025-02-25 10:48:22');

-- --------------------------------------------------------

--
-- Table structure for table `gameperspective`
--

CREATE TABLE `gameperspective` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `gameId` int(11) NOT NULL,
  `perspectiveId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `gameperspective`
--

INSERT INTO `gameperspective` (`createdAt`, `updatedAt`, `gameId`, `perspectiveId`) VALUES
('2025-02-25 10:52:57', '2025-02-25 10:52:57', 1, 2),
('2025-02-25 10:56:43', '2025-02-25 10:56:43', 2, 2),
('2025-02-25 10:57:19', '2025-02-25 10:57:19', 3, 1),
('2025-02-25 10:58:04', '2025-02-25 10:58:04', 4, 1),
('2025-02-25 10:58:04', '2025-02-25 10:58:04', 4, 2),
('2025-02-25 10:59:12', '2025-02-25 10:59:12', 5, 1),
('2025-02-25 10:59:12', '2025-02-25 10:59:12', 5, 2),
('2025-02-25 11:00:43', '2025-02-25 11:00:43', 6, 1),
('2025-03-07 10:08:47', '2025-03-07 10:08:47', 7, 2),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 1),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 2),
('2025-03-07 11:03:13', '2025-03-07 11:03:13', 9, 1),
('2025-03-07 11:11:01', '2025-03-07 11:11:01', 10, 1),
('2025-03-18 11:08:17', '2025-03-18 11:08:17', 11, 1),
('2025-03-18 11:23:10', '2025-03-18 11:23:10', 12, 4),
('2025-03-18 11:26:02', '2025-03-18 11:26:02', 13, 2),
('2025-03-18 11:28:32', '2025-03-18 11:28:32', 14, 5),
('2025-03-18 11:29:50', '2025-03-18 11:29:50', 15, 5),
('2025-03-18 11:31:55', '2025-03-18 11:31:55', 16, 2),
('2025-03-18 11:36:22', '2025-03-18 11:36:22', 17, 2);

-- --------------------------------------------------------

--
-- Table structure for table `gameplatforms`
--

CREATE TABLE `gameplatforms` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `gameId` int(11) NOT NULL,
  `platformId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `gameplatforms`
--

INSERT INTO `gameplatforms` (`createdAt`, `updatedAt`, `gameId`, `platformId`) VALUES
('2025-02-25 10:52:57', '2025-02-25 10:52:57', 1, 4),
('2025-02-25 10:56:43', '2025-02-25 10:56:43', 2, 1),
('2025-02-25 10:56:43', '2025-02-25 10:56:43', 2, 3),
('2025-02-25 10:56:43', '2025-02-25 10:56:43', 2, 4),
('2025-02-25 10:56:43', '2025-02-25 10:56:43', 2, 5),
('2025-02-25 10:57:19', '2025-02-25 10:57:19', 3, 1),
('2025-02-25 10:57:19', '2025-02-25 10:57:19', 3, 3),
('2025-02-25 10:57:19', '2025-02-25 10:57:19', 3, 4),
('2025-02-25 10:57:19', '2025-02-25 10:57:19', 3, 5),
('2025-02-25 10:58:04', '2025-02-25 10:58:04', 4, 1),
('2025-02-25 10:58:04', '2025-02-25 10:58:04', 4, 2),
('2025-02-25 10:58:04', '2025-02-25 10:58:04', 4, 3),
('2025-02-25 10:58:04', '2025-02-25 10:58:04', 4, 4),
('2025-02-25 10:58:04', '2025-02-25 10:58:04', 4, 5),
('2025-02-25 10:59:11', '2025-02-25 10:59:11', 5, 1),
('2025-02-25 10:59:11', '2025-02-25 10:59:11', 5, 3),
('2025-02-25 10:59:11', '2025-02-25 10:59:11', 5, 4),
('2025-02-25 10:59:11', '2025-02-25 10:59:11', 5, 5),
('2025-02-25 11:00:43', '2025-02-25 11:00:43', 6, 1),
('2025-02-25 11:00:43', '2025-02-25 11:00:43', 6, 2),
('2025-03-07 10:08:47', '2025-03-07 10:08:47', 7, 6),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 1),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 2),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 3),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 4),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 5),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 6),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 7),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 8),
('2025-03-07 11:03:13', '2025-03-07 11:03:13', 9, 1),
('2025-03-07 11:03:13', '2025-03-07 11:03:13', 9, 2),
('2025-03-07 11:03:13', '2025-03-07 11:03:13', 9, 3),
('2025-03-07 11:03:13', '2025-03-07 11:03:13', 9, 4),
('2025-03-07 11:03:13', '2025-03-07 11:03:13', 9, 5),
('2025-03-07 11:03:13', '2025-03-07 11:03:13', 9, 6),
('2025-03-07 11:11:01', '2025-03-07 11:11:01', 10, 1),
('2025-03-07 11:11:01', '2025-03-07 11:11:01', 10, 2),
('2025-03-07 11:11:01', '2025-03-07 11:11:01', 10, 3),
('2025-03-07 11:11:01', '2025-03-07 11:11:01', 10, 5),
('2025-03-18 11:08:17', '2025-03-18 11:08:17', 11, 1),
('2025-03-18 11:08:17', '2025-03-18 11:08:17', 11, 2),
('2025-03-18 11:08:17', '2025-03-18 11:08:17', 11, 3),
('2025-03-18 11:08:17', '2025-03-18 11:08:17', 11, 4),
('2025-03-18 11:08:17', '2025-03-18 11:08:17', 11, 5),
('2025-03-18 11:08:17', '2025-03-18 11:08:17', 11, 6),
('2025-03-18 11:23:10', '2025-03-18 11:23:10', 12, 1),
('2025-03-18 11:23:10', '2025-03-18 11:23:10', 12, 2),
('2025-03-18 11:23:10', '2025-03-18 11:23:10', 12, 4),
('2025-03-18 11:23:10', '2025-03-18 11:23:10', 12, 5),
('2025-03-18 11:23:10', '2025-03-18 11:23:10', 12, 6),
('2025-03-18 11:23:10', '2025-03-18 11:23:10', 12, 7),
('2025-03-18 11:23:10', '2025-03-18 11:23:10', 12, 8),
('2025-03-18 11:26:02', '2025-03-18 11:26:02', 13, 1),
('2025-03-18 11:26:02', '2025-03-18 11:26:02', 13, 4),
('2025-03-18 11:26:02', '2025-03-18 11:26:02', 13, 7),
('2025-03-18 11:28:32', '2025-03-18 11:28:32', 14, 1),
('2025-03-18 11:28:32', '2025-03-18 11:28:32', 14, 4),
('2025-03-18 11:28:32', '2025-03-18 11:28:32', 14, 7),
('2025-03-18 11:29:50', '2025-03-18 11:29:50', 15, 1),
('2025-03-18 11:29:50', '2025-03-18 11:29:50', 15, 4),
('2025-03-18 11:29:50', '2025-03-18 11:29:50', 15, 7),
('2025-03-18 11:31:55', '2025-03-18 11:31:55', 16, 1),
('2025-03-18 11:31:55', '2025-03-18 11:31:55', 16, 4),
('2025-03-18 11:31:55', '2025-03-18 11:31:55', 16, 5),
('2025-03-18 11:36:22', '2025-03-18 11:36:22', 17, 1),
('2025-03-18 11:36:22', '2025-03-18 11:36:22', 17, 4),
('2025-03-18 11:36:22', '2025-03-18 11:36:22', 17, 5),
('2025-03-18 11:36:22', '2025-03-18 11:36:22', 17, 7);

-- --------------------------------------------------------

--
-- Table structure for table `gamepublisher`
--

CREATE TABLE `gamepublisher` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `gameId` int(11) NOT NULL,
  `publisherId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `gamepublisher`
--

INSERT INTO `gamepublisher` (`createdAt`, `updatedAt`, `gameId`, `publisherId`) VALUES
('2025-02-25 10:56:17', '2025-02-25 10:56:17', 1, 1),
('2025-02-25 10:56:43', '2025-02-25 10:56:43', 2, 2),
('2025-02-25 10:57:19', '2025-02-25 10:57:19', 3, 2),
('2025-02-25 10:58:03', '2025-02-25 10:58:03', 4, 3),
('2025-02-25 10:59:11', '2025-02-25 10:59:11', 5, 3),
('2025-02-25 11:00:43', '2025-02-25 11:00:43', 6, 4),
('2025-03-07 10:08:47', '2025-03-07 10:08:47', 7, 5),
('2025-03-07 10:11:36', '2025-03-07 10:11:36', 8, 6),
('2025-03-07 11:03:12', '2025-03-07 11:03:12', 9, 7),
('2025-03-07 11:11:01', '2025-03-07 11:11:01', 10, 4),
('2025-03-18 11:08:17', '2025-03-18 11:08:17', 11, 8),
('2025-03-18 11:23:10', '2025-03-18 11:23:10', 12, 9),
('2025-03-18 11:26:01', '2025-03-18 11:26:01', 13, 10),
('2025-03-18 11:28:32', '2025-03-18 11:28:32', 14, 11),
('2025-03-18 11:29:50', '2025-03-18 11:29:50', 15, 12),
('2025-03-18 11:36:31', '2025-03-18 11:36:31', 16, 13),
('2025-03-18 11:36:22', '2025-03-18 11:36:22', 17, 14);

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `releaseDate` date DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `ytbTrailerLink` varchar(255) DEFAULT NULL,
  `desc` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `name`, `image`, `releaseDate`, `price`, `ytbTrailerLink`, `desc`, `createdAt`, `updatedAt`) VALUES
(1, 'The Last of Us Part II', 'Images/1740480766161.jpg', '2020-06-19', 60, 'https://www.youtube.com/watch?v=vhII1qlcZ4E', 'The Last of Us Part II is an action-adventure game developed by Naughty Dog. The story follows Ellie as she embarks on a journey of revenge in a post-apocalyptic world, facing both dangerous infected creatures and hostile human factions. The game is praised for its deep narrative, complex characters, and realistic depiction of emotions and survival. It features intense combat, stealth mechanics, and a gripping storyline that challenges players with moral dilemmas and emotional depth.', '2025-02-25 10:52:46', '2025-02-25 10:56:16'),
(2, 'The Witcher 3: Wild Hunt', 'Images/1740480921850.jpg', '2015-05-19', 30, 'https://youtu.be/c0i88t0Kacs', 'The Witcher 3: Wild Hunt is an open-world action RPG developed by CD Projekt Red. Players take on the role of Geralt of Rivia, a professional monster hunter searching for his adopted daughter in a vast world full of moral dilemmas and dangers. The game is praised for its deep storytelling, complex characters, and immersive world.', '2025-02-25 10:55:21', '2025-02-25 10:56:43'),
(3, 'Cyberpunk 2077', 'Images/1740481018802.jpg', '2020-12-10', 60, 'https://youtu.be/qIcTM8WXFjk', 'Cyberpunk 2077 is a futuristic open-world RPG from CD Projekt Red. Set in Night City, a megalopolis obsessed with power, glamour, and body modification, players step into the shoes of V, a mercenary seeking a unique implant that grants immortality. The game features branching narratives, immersive gameplay, and a detailed cyberpunk universe.', '2025-02-25 10:56:58', '2025-02-25 10:57:19'),
(4, 'Grand Theft Auto V', 'Images/1740481071699.png', '2013-09-17', 30, 'https://youtu.be/QkkoHAzjnUs', 'Grand Theft Auto V is an action-adventure game developed by Rockstar Games. Set in the sprawling city of Los Santos, players follow the interwoven stories of three criminals—Michael, Franklin, and Trevor—as they navigate the underworld, undertake heists, and deal with personal struggles. The game features an expansive open world, a compelling single-player story, and a highly popular online mode.', '2025-02-25 10:57:51', '2025-02-25 10:58:03'),
(5, 'Red Dead Redemption 2', 'Images/1740481133117.jpg', '2018-10-26', 60, 'https://youtu.be/gmA6MrX81z4', 'Red Dead Redemption 2 is an epic Western adventure from Rockstar Games. Set in 1899, players control Arthur Morgan, an outlaw struggling to survive as the age of the Wild West comes to an end. The game offers an expansive open world, an emotionally engaging story, and detailed survival mechanics that bring the era to life.', '2025-02-25 10:58:53', '2025-02-25 11:04:17'),
(6, 'Counter-Strike 2', 'Images/1740481200893.png', '2020-09-23', 0, 'https://youtu.be/nSE38xjMLqE', '    Counter-Strike 2 is the latest iteration of Valve’s legendary competitive FPS series. Built on the Source 2 engine, the game offers enhanced visuals, dynamic smoke grenades, and improved server tick rates. With classic bomb-defusal gameplay, ranked matchmaking, and a thriving esports scene, CS2 continues to be a staple in the shooter genre.', '2025-02-25 11:00:00', '2025-02-25 11:00:43'),
(7, 'The Legend of Zelda: Breath of the Wild', 'Images/1741342021572.jpg', '2017-03-03', 60, 'https://www.youtube.com/watch?v=1rPxiXXxftE', 'The Legend of Zelda: Breath of the Wild is a groundbreaking action-adventure game by Nintendo that redefined open-world exploration. Players take on the role of Link, a legendary hero who awakens after a hundred years to find Hyrule in ruins, threatened by Calamity Ganon. To save Princess Zelda and restore peace, Link must regain his lost memories, uncover ancient Sheikah technology, and defeat Ganon. Set in a vast open world, the game offers complete freedom to explore diverse landscapes, solve puzzles, and engage in physics-based combat. Survival elements play a key role—Link must hunt for food, craft gear, and adapt to weather conditions. With its breathtaking visuals, dynamic gameplay, and non-linear storytelling, Breath of the Wild is widely regarded as one of the greatest video games of all time.', '2025-03-07 10:07:01', '2025-03-07 10:08:47'),
(8, 'Minecraft', 'Images/1741342241465.jpg', '2011-11-18', 27, 'https://www.youtube.com/watch?v=MmB9b5njVbA', 'Minecraft is a globally renowned sandbox game that offers limitless creativity and exploration. Developed by Mojang Studios, it places players in a procedurally generated world where they can mine resources, craft tools, and build structures. With no set objectives, players have complete freedom to shape their own adventures, whether by constructing massive cities, surviving against hostile creatures, or exploring deep caves and vast landscapes. The game features multiple modes, including Survival, where players must gather food, manage health, and fend off enemies, and Creative, which provides unlimited resources for boundless construction. Its unique blocky aesthetic, coupled with deep mechanics like redstone circuitry and modding support, has made Minecraft one of the best-selling and most influential games of all time.', '2025-03-07 10:10:41', '2025-03-07 10:11:36'),
(9, 'Overwatch 2', 'Images/1741343958292.jpg', '2022-10-04', 0, 'https://www.youtube.com/watch?v=dZl1yGUetjI', 'Overwatch 2 is a fast-paced team-based shooter developed by Blizzard Entertainment, serving as both a sequel and evolution of the original Overwatch. The game features a diverse roster of heroes, each with unique abilities and playstyles, competing in objective-based matches across dynamic maps. With a shift to 5v5 gameplay, refined mechanics, and new hero reworks, Overwatch 2 enhances the strategic depth and intensity of team battles. The game introduces a free-to-play model, seasonal updates, and an expanded PvE experience, allowing players to engage in cooperative missions that explore the lore of the Overwatch universe. With its polished gameplay, vibrant visuals, and strong emphasis on teamwork, Overwatch 2 continues to be a major title in the competitive FPS scene.', '2025-03-07 10:39:18', '2025-03-07 11:03:12'),
(10, 'Portal 2', 'Images/1741345804350.jpg', '2011-04-18', 10, 'https://www.youtube.com/watch?v=tax4e4hBBZc', 'Portal 2 is a critically acclaimed first-person puzzle-platformer developed by Valve. As the protagonist, Chell, players navigate through a series of test chambers using a portal gun that creates linked portals to transport themselves and objects. The game builds on the original Portal, expanding on its mechanics with new portal types, puzzles, and an engaging storyline. Set in the mysterious Aperture Science facility, players encounter various challenges that require both creative thinking and precise timing. Addition to the single-player campaign, Portal 2 features a cooperative mode where two players control two robots, Atlas and P-Body, to solve puzzles together. The game is renowned for its clever writing, memorable characters, including the hilarious AI GLaDOS, and its innovative gameplay mechanics that offer a fresh take on the puzzle genre. With its witty dialogue, challenging puzzles, and seamless integration of story and gameplay, Portal 2 remains one of the most beloved games in the puzzle-platformer genre.', '2025-03-07 11:10:04', '2025-03-07 11:14:12'),
(11, 'DOOM Eternal', 'Images/1742296079100.jpg', '2020-03-20', 60, 'https://youtu.be/FkklG9MA0vM', 'DOOM Eternal is a fast-paced first-person shooter where players once again step into the boots of the Doom Slayer to battle demonic forces from Hell. Featuring aggressive combat, heavy metal music, and intricate level design, the game enhances the series’ iconic gameplay. With both singleplayer and multiplayer modes, DOOM Eternal delivers adrenaline-fueled action with stunning visuals and tight gunplay.', '2025-03-18 11:07:59', '2025-03-18 11:08:17'),
(12, 'Among Us', 'Images/1742296976561.jpg', '2018-06-15', 5, 'https://youtu.be/NSJ4cESNQfE', 'Among Us is a multiplayer social deduction game where players take on the roles of Crewmates and Impostors aboard a spaceship or planetary base. Crewmates must complete various tasks to keep the facility running, while Impostors secretly sabotage and eliminate them without getting caught. With rounds full of tension, deception, and teamwork, the game tests players’ abilities to lie or detect lies. Featuring cross-platform support and short, dynamic matches, Among Us is ideal for both casual gaming sessions and intense competitive play. The game’s success surged thanks to online streaming and its fun, accessible gameplay loop that brings players back for more.', '2025-03-18 11:22:56', '2025-03-18 11:23:10'),
(13, 'Hades', 'Images/1742297146105.jpg', '2020-09-17', 25, 'https://www.youtube.com/watch?v=91t0ha9x0AE', 'Hades is a rogue-like dungeon crawler where players control Zagreus, the son of Hades, as he attempts to escape the Underworld and reach Mount Olympus. The game combines fast-paced combat, strategic gameplay, and a compelling narrative where every escape attempt tells a new part of the story. Players can choose from a variety of powerful weapons and abilities, with each run offering different combinations, keeping the gameplay fresh and engaging. The rich character development and dynamic storytelling set Hades apart, earning it critical acclaim and a dedicated fanbase.', '2025-03-18 11:25:46', '2025-03-18 11:38:58'),
(14, 'Celeste', 'Images/1742297295192.png', '2018-01-25', 20, 'https://www.youtube.com/watch?v=70d9irlxiB4', 'Celeste is a critically acclaimed indie platformer that follows Madeline as she attempts to climb the dangerous mountain Celeste, while confronting her inner struggles and mental health issues. The game features tight, precision-based platforming, with challenging levels that require players to master movement mechanics. Its narrative, woven seamlessly into the gameplay, is emotionally resonant, addressing themes of self-doubt, perseverance, and overcoming personal obstacles. With beautiful pixel art, an evocative soundtrack, and a touching story, Celeste offers both an incredibly difficult challenge and a deeply rewarding experience.', '2025-03-18 11:28:15', '2025-03-18 11:39:46'),
(15, 'Hollow Knight', 'Images/1742297378257.png', '2017-02-24', 15, 'https://www.youtube.com/watch?v=UAO2urG23S4', 'Hollow Knight is a critically acclaimed action-adventure game set in the mysterious, decaying world of Hallownest. Players control the titular knight, exploring intricate, interconnected environments, battling fierce enemies, and uncovering the secrets of the kingdom. The game combines tight platforming, challenging combat, and a deep, atmospheric narrative that is revealed through exploration and environmental storytelling. With beautiful hand-drawn art, an evocative soundtrack, and a massive world to explore, Hollow Knight offers a rewarding experience for those who enjoy Metroidvania-style gameplay.', '2025-03-18 11:29:38', '2025-03-18 11:40:29'),
(16, 'Sekiro: Shadows Die Twice', 'Images/1742297495978.jpg', '2019-03-22', 60, 'https://www.youtube.com/watch?v=rXMX4YJ7Lks', 'Sekiro: Shadows Die Twice is an action-adventure game set in a reimagined feudal Japan. Players control a shinobi named Wolf, who is on a quest to rescue his kidnapped lord and seek revenge against his enemies. The game features a unique combat system focused on precision timing and parrying, as well as stealth mechanics and exploration. With a deep, challenging narrative and a strong emphasis on player skill, Sekiro offers an experience that rewards mastery of its mechanics. The game is known for its tough but fair difficulty and its rewarding combat encounters.', '2025-03-18 11:31:35', '2025-03-18 11:37:10'),
(17, 'Assassin\'s Creed Odyssey', 'Images/1742297723741.png', '2018-10-05', 60, 'https://www.youtube.com/watch?v=6F8L3d_OIE0', 'Assassin\'s Creed Odyssey is an open-world action RPG set in ancient Greece during the Peloponnesian War. Players can choose between Alexios or Kassandra, two mercenaries with different backgrounds, as they explore a vast world full of secrets, historical figures, and epic quests. The game emphasizes player choice, offering branching storylines and multiple endings based on decisions made throughout the journey. Combat is more dynamic than previous entries, allowing for skill-based action, naval battles, and the use of abilities inspired by Greek mythology. Players can also engage in side activities such as hunting, crafting, and exploring the massive open world, which features cities, islands, and ancient ruins.', '2025-03-18 11:35:23', '2025-03-18 11:42:06');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Shooter', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(2, 'Platformer', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(3, 'Hack and Slash', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(4, 'Battle Royale', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(5, 'RPG', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(6, 'Strategy', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(7, 'Simulator', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(8, 'Racing', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(9, 'Survival', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(10, 'Adventure', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(11, 'Sport', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(12, 'Party', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(13, 'Fighting', '2025-02-25 10:48:22', '2025-02-25 10:48:22');

-- --------------------------------------------------------

--
-- Table structure for table `perspectives`
--

CREATE TABLE `perspectives` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `perspectives`
--

INSERT INTO `perspectives` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'First-Person', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(2, 'Third-Person', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(3, 'Isometric', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(4, 'Top-down', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(5, 'Side-scrolling', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(6, 'Fixed Camera', '2025-02-25 10:48:22', '2025-02-25 10:48:22');

-- --------------------------------------------------------

--
-- Table structure for table `platforms`
--

CREATE TABLE `platforms` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `platforms`
--

INSERT INTO `platforms` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Windows', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(2, 'Linux', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(3, 'macOS', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(4, 'Playstation', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(5, 'Xbox', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(6, 'Nintento', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(7, 'Android', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(8, 'iOS', '2025-02-25 10:48:22', '2025-02-25 10:48:22'),
(9, 'Oculus', '2025-02-25 10:48:22', '2025-02-25 10:48:22');

-- --------------------------------------------------------

--
-- Table structure for table `publishers`
--

CREATE TABLE `publishers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `publishers`
--

INSERT INTO `publishers` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Sony Interactive Entertainment', '2025-02-25 10:52:57', '2025-02-25 10:52:57'),
(2, 'CD Projekt', '2025-02-25 10:55:41', '2025-02-25 10:55:41'),
(3, 'Rockstar Games', '2025-02-25 10:58:03', '2025-02-25 10:58:03'),
(4, 'Valve', '2025-02-25 11:00:43', '2025-02-25 11:00:43'),
(5, 'Nintendo', '2025-03-07 10:08:47', '2025-03-07 10:08:47'),
(6, 'Mojang Studios', '2025-03-07 10:11:36', '2025-03-07 10:11:36'),
(7, 'Blizzard Entertainment', '2025-03-07 11:03:12', '2025-03-07 11:03:12'),
(8, 'Bethesda Softworks', '2025-03-18 11:08:17', '2025-03-18 11:08:17'),
(9, 'Innersloth', '2025-03-18 11:23:10', '2025-03-18 11:23:10'),
(10, 'Supergiant Games', '2025-03-18 11:26:01', '2025-03-18 11:26:01'),
(11, 'Maddy Makes Games', '2025-03-18 11:28:32', '2025-03-18 11:28:32'),
(12, 'Team Cherry', '2025-03-18 11:29:50', '2025-03-18 11:29:50'),
(13, 'Activision', '2025-03-18 11:31:55', '2025-03-18 11:31:55'),
(14, 'Ubisoft', '2025-03-18 11:35:51', '2025-03-18 11:35:51');

-- --------------------------------------------------------

--
-- Table structure for table `usergames`
--

CREATE TABLE `usergames` (
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) NOT NULL,
  `gameId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `lastOnline` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `lastOnline`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '$2b$10$ST3R3Yrlo2ekRRf8ydlTFetS1QjjT.mfevQu7YFqAh8i.ZExTRQDW', '2025-04-28 16:18:54', '2025-03-28 10:05:52', '2025-04-28 16:18:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `developers`
--
ALTER TABLE `developers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `engines`
--
ALTER TABLE `engines`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `gamedeveloper`
--
ALTER TABLE `gamedeveloper`
  ADD PRIMARY KEY (`gameId`,`developerId`),
  ADD KEY `developerId` (`developerId`);

--
-- Indexes for table `gameengine`
--
ALTER TABLE `gameengine`
  ADD PRIMARY KEY (`gameId`,`engineId`),
  ADD KEY `engineId` (`engineId`);

--
-- Indexes for table `gamegamemodes`
--
ALTER TABLE `gamegamemodes`
  ADD PRIMARY KEY (`gameId`,`gameModeId`),
  ADD KEY `gameModeId` (`gameModeId`);

--
-- Indexes for table `gamegenres`
--
ALTER TABLE `gamegenres`
  ADD PRIMARY KEY (`gameId`,`genreId`),
  ADD KEY `genreId` (`genreId`);

--
-- Indexes for table `gamemodes`
--
ALTER TABLE `gamemodes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `gameperspective`
--
ALTER TABLE `gameperspective`
  ADD PRIMARY KEY (`gameId`,`perspectiveId`),
  ADD KEY `perspectiveId` (`perspectiveId`);

--
-- Indexes for table `gameplatforms`
--
ALTER TABLE `gameplatforms`
  ADD PRIMARY KEY (`gameId`,`platformId`),
  ADD KEY `platformId` (`platformId`);

--
-- Indexes for table `gamepublisher`
--
ALTER TABLE `gamepublisher`
  ADD PRIMARY KEY (`gameId`,`publisherId`),
  ADD KEY `publisherId` (`publisherId`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `perspectives`
--
ALTER TABLE `perspectives`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `platforms`
--
ALTER TABLE `platforms`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `publishers`
--
ALTER TABLE `publishers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `usergames`
--
ALTER TABLE `usergames`
  ADD PRIMARY KEY (`userId`,`gameId`),
  ADD KEY `gameId` (`gameId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `developers`
--
ALTER TABLE `developers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `engines`
--
ALTER TABLE `engines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- AUTO_INCREMENT for table `gamemodes`
--
ALTER TABLE `gamemodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `perspectives`
--
ALTER TABLE `perspectives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `platforms`
--
ALTER TABLE `platforms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `publishers`
--
ALTER TABLE `publishers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `gamedeveloper`
--
ALTER TABLE `gamedeveloper`
  ADD CONSTRAINT `gamedeveloper_ibfk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamedeveloper_ibfk_2` FOREIGN KEY (`developerId`) REFERENCES `developers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `gameengine`
--
ALTER TABLE `gameengine`
  ADD CONSTRAINT `gameengine_ibfk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameengine_ibfk_2` FOREIGN KEY (`engineId`) REFERENCES `engines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `gamegamemodes`
--
ALTER TABLE `gamegamemodes`
  ADD CONSTRAINT `gamegamemodes_ibfk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamegamemodes_ibfk_2` FOREIGN KEY (`gameModeId`) REFERENCES `gamemodes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `gamegenres`
--
ALTER TABLE `gamegenres`
  ADD CONSTRAINT `gamegenres_ibfk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamegenres_ibfk_2` FOREIGN KEY (`genreId`) REFERENCES `genres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `gameperspective`
--
ALTER TABLE `gameperspective`
  ADD CONSTRAINT `gameperspective_ibfk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameperspective_ibfk_2` FOREIGN KEY (`perspectiveId`) REFERENCES `perspectives` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `gameplatforms`
--
ALTER TABLE `gameplatforms`
  ADD CONSTRAINT `gameplatforms_ibfk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gameplatforms_ibfk_2` FOREIGN KEY (`platformId`) REFERENCES `platforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `gamepublisher`
--
ALTER TABLE `gamepublisher`
  ADD CONSTRAINT `gamepublisher_ibfk_1` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `gamepublisher_ibfk_2` FOREIGN KEY (`publisherId`) REFERENCES `publishers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `usergames`
--
ALTER TABLE `usergames`
  ADD CONSTRAINT `usergames_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usergames_ibfk_2` FOREIGN KEY (`gameId`) REFERENCES `games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



SET FOREIGN_KEY_CHECKS = 1;