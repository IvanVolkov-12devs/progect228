CREATE TABLE `inbox` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(34) NOT NULL,
  `title` varchar(34) NOT NULL,
  `message` varchar(255) NOT NULL,
  `time` text NOT NULL,
  `date` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=272 DEFAULT CHARSET=utf8;