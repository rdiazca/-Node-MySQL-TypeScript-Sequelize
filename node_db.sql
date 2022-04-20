/*
Navicat MySQL Data Transfer

Source Server         : MySQL
Source Server Version : 50505
Source Host           : 127.0.0.1:3306
Source Database       : node_db

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2022-04-18 18:08:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for heroes
-- ----------------------------
DROP TABLE IF EXISTS `heroes`;
CREATE TABLE `heroes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `poder` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- ----------------------------
-- Records of heroes
-- ----------------------------
INSERT INTO `heroes` VALUES ('1', 'Ironman', 'Dinero e Ingeniería');
INSERT INTO `heroes` VALUES ('2', 'Hulk', 'Rayos Gama');
INSERT INTO `heroes` VALUES ('3', 'Warmachine', 'Sabiduría');
INSERT INTO `heroes` VALUES ('4', 'Siderman', 'Araña');
INSERT INTO `heroes` VALUES ('5', 'Batman', 'Fuerza');
INSERT INTO `heroes` VALUES ('6', 'Hulk', 'Fuerza');
INSERT INTO `heroes` VALUES ('7', 'Hulk', 'Ogro');
