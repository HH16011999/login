/*
 Navicat Premium Data Transfer

 Source Server         : Replicant
 Source Server Type    : MySQL
 Source Server Version : 100424
 Source Host           : localhost:3306
 Source Schema         : login

 Target Server Type    : MySQL
 Target Server Version : 100424
 File Encoding         : 65001

 Date: 15/09/2022 18:26:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for results
-- ----------------------------
DROP TABLE IF EXISTS `results`;
CREATE TABLE `results`  (
  `_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `score` int NULL DEFAULT NULL,
  `max_score` int NULL DEFAULT NULL,
  `positive_score` int NULL DEFAULT NULL,
  PRIMARY KEY (`_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of results
-- ----------------------------
INSERT INTO `results` VALUES (1, 1, 9, 10, 4);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  PRIMARY KEY (`_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'harut@harut.am', '$2b$07$bN2y7KMH1VxlQcEOV3UAR.iYp7gy0GLTvvJCHZKC/MOFL59JDkbgG');
INSERT INTO `users` VALUES (2, 'harut@harut.ru', '222');
INSERT INTO `users` VALUES (3, 'harut@harut.com', '$2b$07$bN2y7KMH1VxlQcEOV3UAR.iYp7gy0GLTvvJCHZKC/MOFL59JDkbgG');

SET FOREIGN_KEY_CHECKS = 1;
