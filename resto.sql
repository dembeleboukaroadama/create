-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 24 mars 2019 à 08:21
-- Version du serveur :  5.7.21
-- Version de PHP :  5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `resto`
--

-- --------------------------------------------------------

--
-- Structure de la table `repas`
--

DROP TABLE IF EXISTS `repas`;
CREATE TABLE IF NOT EXISTS `repas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `repas`
--

INSERT INTO `repas` (`id`, `nom`) VALUES
(1, 'kabato avec sauce arrachide'),
(2, 'riz avec sauce graine'),
(3, 'Placali au sauces'),
(4, 'souple de viande brousse'),
(5, 'foutou igname');

-- --------------------------------------------------------

--
-- Structure de la table `reserves`
--

DROP TABLE IF EXISTS `reserves`;
CREATE TABLE IF NOT EXISTS `reserves` (
  `place` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  PRIMARY KEY (`place`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `reserves`
--

INSERT INTO `reserves` (`place`, `nom`) VALUES
(1, 'Dembélé Boukaro Adama'),
(2, 'Kone Kader'),
(3, 'camara hassane'),
(4, 'Paul Valerie');

-- --------------------------------------------------------

--
-- Structure de la table `restodispo`
--

DROP TABLE IF EXISTS `restodispo`;
CREATE TABLE IF NOT EXISTS `restodispo` (
  `nom` varchar(100) NOT NULL,
  `quartier` varchar(100) NOT NULL,
  `numero` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`numero`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `restodispo`
--

INSERT INTO `restodispo` (`nom`, `quartier`, `numero`) VALUES
('place privée', 'abobo', 1),
('manger bien', 'belle ville', 2),
('Chez la bonne', 'abobo', 3),
('Restaurant haut grade', 'Plateau', 4),
('Bien Servir', 'Marcory', 5);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
