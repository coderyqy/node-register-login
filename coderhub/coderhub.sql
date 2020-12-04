-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-12-04 17:52:46
-- 服务器版本： 8.0.12
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `coderhub`
--

-- --------------------------------------------------------

--
-- 表的结构 `moment`
--

CREATE TABLE `moment` (
  `id` int(11) NOT NULL COMMENT 'moment的id',
  `content` varchar(1000) NOT NULL,
  `user_id` int(11) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(40) NOT NULL COMMENT '用户密码',
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `createAt`, `updateAt`) VALUES
(1, 'coderyqy', '123456', '2020-12-02 06:35:16', '2020-12-02 06:35:16'),
(2, '张三', '123456', '2020-12-02 07:23:44', '2020-12-02 07:23:44'),
(3, '李四', '123456', '2020-12-02 07:25:23', '2020-12-02 07:25:23'),
(4, '王五', '123456', '2020-12-02 07:39:41', '2020-12-02 07:39:41'),
(5, '赵四', '123456', '2020-12-03 01:59:49', '2020-12-03 01:59:49'),
(6, '张三1', 'e10adc3949ba59abbe56e057f20f883e', '2020-12-03 02:18:25', '2020-12-03 02:18:25'),
(7, '张三2', 'e10adc3949ba59abbe56e057f20f883e', '2020-12-03 02:20:26', '2020-12-03 02:20:26'),
(8, '张三3', 'e10adc3949ba59abbe56e057f20f883e', '2020-12-03 02:21:49', '2020-12-03 02:21:49'),
(9, '张三4', 'e10adc3949ba59abbe56e057f20f883e', '2020-12-03 02:22:35', '2020-12-03 02:22:35'),
(10, '张三5', 'e10adc3949ba59abbe56e057f20f883e', '2020-12-03 02:23:49', '2020-12-03 02:23:49');

--
-- 转储表的索引
--

--
-- 表的索引 `moment`
--
ALTER TABLE `moment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `moment`
--
ALTER TABLE `moment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'moment的id';

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 限制导出的表
--

--
-- 限制表 `moment`
--
ALTER TABLE `moment`
  ADD CONSTRAINT `moment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
